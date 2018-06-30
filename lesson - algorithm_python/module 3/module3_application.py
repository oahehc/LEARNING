"""
Module3 application
"""
##########################################################
# question1
import random
import alg_project3_solution
import time, itertools
import matplotlib.pyplot as plt

def gen_random_clusters(num_clusters):
    """
    create random list within -1~1
    input : number of clusters
    output : cluster list
    """
    cluster_list = []
    for index in range(num_clusters):
        random_x = random.uniform(-1, 1)
        random_y = random.uniform(-1, 1)
        cluster_list.append(alg_cluster.Cluster(set([]), random_x, random_y, 0, 0))
    return cluster_list
    

# run function and record running time
start = 2
end = 200
slow_closest_list = []
fast_closest_list = []
for item in range(start,end):
    # create cluster list
    cluster_list = gen_random_clusters(item)
    
    # run hierarchy
    tStart = time.time()
    alg_project3_solution.slow_closest_pair(cluster_list)
    tStop = time.time()
    slow_closest_list.append(tStop - tStart)
    
    # run kmeans
    tStart = time.time()
    alg_project3_solution.fast_closest_pair(cluster_list)
    tStop = time.time()
    fast_closest_list.append(tStop - tStart)
    
    
# plot
def legend_example():
    xvals= [i for i in range(start,end)]
    yvals1 = slow_closest_list
    yvals2 = fast_closest_list
    
    fig = plt.figure()
    ax = fig.add_subplot(111)
    ax.set_title('Efficiency')
    ax.set_xlabel('number of clusters')
    ax.set_ylabel('running time(sec)')
    
    ax.plot(xvals,yvals1, '-b', label='slow_closest_pair')
    ax.plot(xvals,yvals2, '-r', label='fast_closest_pair')
    ax.legend(loc='upper right')
    
    plt.show()
    
# legend_example()


######################################################################
# question2 & 3
import alg_project3_solution
import alg_project3_viz

def run_hierarchical():
    """
    Load a data table, compute a list of clusters and 
    plot a list of clusters

    Set DESKTOP = True/False to use either matplotlib or simplegui
    """
    data_table = load_data_table(DATA_3108_URL)
    
    singleton_list = []
    for line in data_table:
        singleton_list.append(alg_cluster.Cluster(set([line[0]]), line[1], line[2], line[3], line[4]))
        
    cluster_list = alg_project3_solution.hierarchical_clustering(singleton_list, 15)
    print "Displaying", len(cluster_list), "hierarchical clusters"
    
    # draw the clusters using matplotlib or simplegui
    alg_clusters_matplotlib.plot_clusters(data_table, cluster_list, True)


def run_kmeans():
    """
    Load a data table, compute a list of clusters and 
    plot a list of clusters

    Set DESKTOP = True/False to use either matplotlib or simplegui
    """
    data_table = load_data_table(DATA_3108_URL)
    
    singleton_list = []
    for line in data_table:
        singleton_list.append(alg_cluster.Cluster(set([line[0]]), line[1], line[2], line[3], line[4]))
        
    cluster_list = alg_project3_solution.kmeans_clustering(singleton_list, 15, 5)	
    print "Displaying", len(cluster_list), "k-means clusters"
            
    # draw the clusters using matplotlib or simplegui
    alg_clusters_matplotlib.plot_clusters(data_table, cluster_list, True)

    
#run_hierarchical()
#run_kmeans()


######################################################################
# question4
"""
K-Means,
hierarchical clustering = O(n^2 * (logn)^2)
k-means clustering = O(qkn)
when q(iteration time) and k(number of output clusters) is small, k-means clustering will been faster.
"""


######################################################################
# question5 & 6
import alg_project3_solution
import alg_project3_viz

def run_hierarchical():
    """
    Load a data table, compute a list of clusters and 
    plot a list of clusters

    Set DESKTOP = True/False to use either matplotlib or simplegui
    """
    data_table = load_data_table(DATA_111_URL)
    
    singleton_list = []
    for line in data_table:
        singleton_list.append(alg_cluster.Cluster(set([line[0]]), line[1], line[2], line[3], line[4]))
        
    cluster_list = alg_project3_solution.hierarchical_clustering(singleton_list, 9)
    print "Displaying", len(cluster_list), "hierarchical clusters"
    
    # draw the clusters using matplotlib or simplegui
    alg_clusters_matplotlib.plot_clusters(data_table, cluster_list, True)


def run_kmeans():
    """
    Load a data table, compute a list of clusters and 
    plot a list of clusters

    Set DESKTOP = True/False to use either matplotlib or simplegui
    """
    data_table = load_data_table(DATA_111_URL)
    
    singleton_list = []
    for line in data_table:
        singleton_list.append(alg_cluster.Cluster(set([line[0]]), line[1], line[2], line[3], line[4]))
        
    cluster_list = alg_project3_solution.kmeans_clustering(singleton_list, 9, 5)	
    print "Displaying", len(cluster_list), "k-means clusters"
            
    # draw the clusters using matplotlib or simplegui
    alg_clusters_matplotlib.plot_clusters(data_table, cluster_list, True)

    
#run_hierarchical()
#run_kmeans()


######################################################################
# question7
import math
import random
import urllib2
import alg_cluster
import alg_project3_solution 

DIRECTORY = "http://commondatastorage.googleapis.com/codeskulptor-assets/"
DATA_3108_URL = DIRECTORY + "data_clustering/unifiedCancerData_3108.csv"
DATA_896_URL = DIRECTORY + "data_clustering/unifiedCancerData_896.csv"
DATA_290_URL = DIRECTORY + "data_clustering/unifiedCancerData_290.csv"
DATA_111_URL = DIRECTORY + "data_clustering/unifiedCancerData_111.csv"


def load_data_table(data_url):
    """
    Import a table of county-based cancer risk data
    from a csv format file
    """
    data_file = urllib2.urlopen(data_url)
    data = data_file.read()
    data_lines = data.split('\n')
    print "Loaded", len(data_lines), "data points"
    data_tokens = [line.split(',') for line in data_lines]
    return [[tokens[0], float(tokens[1]), float(tokens[2]), int(tokens[3]), float(tokens[4])] 
            for tokens in data_tokens]


def compute_distortion(cluster_list,data_table_url):
    """
    input : cluster list and original data_table for the list
    output : sum of the error for this list
    """
    # load data table
    data_table = load_data_table(data_table_url)
    
    # sum error for cluster list
    sum_error = 0
    for index in range(len(cluster_list)):
        sum_error += cluster_list[index].cluster_error(data_table)
    
    return sum_error
    
    
def cluster_by_kmeans(data_table_url,num_clusters,num_iterate):
    # load data table
    data_table = load_data_table(data_table_url)
    
    singleton_list = []
    for line in data_table:
        singleton_list.append(alg_cluster.Cluster(set([line[0]]), line[1], line[2], line[3], line[4]))
        
    cluster_list = alg_project3_solution.kmeans_clustering(singleton_list, num_clusters, num_iterate)	
    return cluster_list
    
    
def cluster_by_hierarchical(data_table_url,num_clusters):
    # load data table
    data_table = load_data_table(data_table_url)
    
    singleton_list = []
    for line in data_table:
        singleton_list.append(alg_cluster.Cluster(set([line[0]]), line[1], line[2], line[3], line[4]))
        
    cluster_list = alg_project3_solution.hierarchical_clustering(singleton_list, num_clusters)	
    return cluster_list

    
# cluster_list = cluster_by_hierarchical(DATA_290_URL,16)
# print compute_distortion(cluster_list,DATA_290_URL)

# cluster_list = cluster_by_kmeans(DATA_290_URL,16,5)
# print compute_distortion(cluster_list,DATA_290_URL)

    
# cluster_list = cluster_by_hierarchical(DATA_111_URL,9)
# print compute_distortion(cluster_list,DATA_111_URL)

# cluster_list = cluster_by_kmeans(DATA_111_URL,9,5)
# print compute_distortion(cluster_list,DATA_111_URL)

"""
hierarchical : 1.7516 * 10^11
k-means : 2.7125 * 10^11
"""


##############################################################
#question8
"""
k-means choose high population city as start point, 
and their are few close city on the west coast with high population.
So in k-means clustering, there are 2 close cluster(around L.A.) which show been counted as single cluster.
"""


##############################################################
#question9
hierarchical clustering





##############################################################
#question10
import math
import random
import urllib2
import alg_cluster
import alg_project3_solution 
import matplotlib.pyplot as plt

DIRECTORY = "http://commondatastorage.googleapis.com/codeskulptor-assets/"
DATA_3108_URL = DIRECTORY + "data_clustering/unifiedCancerData_3108.csv"
DATA_896_URL = DIRECTORY + "data_clustering/unifiedCancerData_896.csv"
DATA_290_URL = DIRECTORY + "data_clustering/unifiedCancerData_290.csv"
DATA_111_URL = DIRECTORY + "data_clustering/unifiedCancerData_111.csv"


def load_data_table(data_url):
    """
    Import a table of county-based cancer risk data
    from a csv format file
    """
    data_file = urllib2.urlopen(data_url)
    data = data_file.read()
    data_lines = data.split('\n')
    print "Loaded", len(data_lines), "data points"
    data_tokens = [line.split(',') for line in data_lines]
    return [[tokens[0], float(tokens[1]), float(tokens[2]), int(tokens[3]), float(tokens[4])] 
            for tokens in data_tokens]


def compute_distortion(cluster_list,data_table_url):
    """
    input : cluster list and original data_table for the list
    output : sum of the error for this list
    """
    # load data table
    data_table = load_data_table(data_table_url)
    
    # sum error for cluster list
    sum_error = 0
    for index in range(len(cluster_list)):
        sum_error += cluster_list[index].cluster_error(data_table)
    
    return sum_error
    
    
def cluster_by_kmeans(data_table_url,num_clusters,num_iterate):
    # load data table
    data_table = load_data_table(data_table_url)
    
    singleton_list = []
    for line in data_table:
        singleton_list.append(alg_cluster.Cluster(set([line[0]]), line[1], line[2], line[3], line[4]))
        
    cluster_list = alg_project3_solution.kmeans_clustering(singleton_list, num_clusters, num_iterate)	
    return cluster_list
    
    
def cluster_by_hierarchical(data_table_url,num_clusters):
    # load data table
    data_table = load_data_table(data_table_url)
    
    singleton_list = []
    for line in data_table:
        singleton_list.append(alg_cluster.Cluster(set([line[0]]), line[1], line[2], line[3], line[4]))
        
    cluster_list = alg_project3_solution.hierarchical_clustering(singleton_list, num_clusters)	
    return cluster_list


# cluster_list = cluster_by_hierarchical(DATA_111_URL,9)
# print compute_distortion(cluster_list,DATA_111_URL)

# cluster_list = cluster_by_kmeans(DATA_111_URL,9,5)
# print compute_distortion(cluster_list,DATA_111_URL)


# create clusters and calculate distortion
data_table_url = DATA_896_URL
data_table_url = DATA_290_URL
data_table_url = DATA_111_URL
data_table_url_name = "DATA_111_URL"

start = 6
end = 20
num_iterate = 5

hierarchical_distortion = []
# use 20 as start cluster list
cluster_list = cluster_by_hierarchical(data_table_url,end)
hierarchical_distortion.append(compute_distortion(cluster_list,data_table_url))
for i in range(end-1,start-1,-1):
    cluster_list = alg_project3_solution.hierarchical_clustering(cluster_list,i)
    hierarchical_distortion.append(compute_distortion(cluster_list,data_table_url))

reversed_hierarchical_distortion = hierarchical_distortion[::-1]
print reversed_hierarchical_distortion


kmeans_distortion = []
for i in range(start,end+1):
    cluster_list = cluster_by_kmeans(data_table_url,i,num_iterate)
    kmeans_distortion.append(compute_distortion(cluster_list,data_table_url))
    
print kmeans_distortion 
    
    
# plot the curve
def legend_example():
    xvals= [i for i in range(start,end+1)]
    yvals1 = reversed_hierarchical_distortion
    yvals2 = kmeans_distortion

    fig = plt.figure()
    ax = fig.add_subplot(111)
    ax.set_title('Quality (' + data_table_url_name + ')')
    ax.set_xlabel('number of clusters')
    ax.set_ylabel('distortion')

    ax.plot(xvals,yvals1, '-b', label='hierarchical')
    ax.plot(xvals,yvals2, '-r', label='kmeans')
    ax.legend(loc='upper right')

    plt.show() 
    
legend_example()    
    
    
##############################################################
#question11


















