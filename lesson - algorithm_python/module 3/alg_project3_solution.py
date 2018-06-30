"""
Module3 project 
"""
import math
import alg_cluster
################################################################################################################################################

# brute-force algorithm
def slow_closest_pair(cluster_list):
    """
    input : cluster list
    out put : closet pair and distance (dist, idx1, idx2)
    """
    num = len(cluster_list)
    result = [float("inf"),-1,-1] # set infinate for start distance
    for index_x in range(num):
        for index_y in range(num):
            if index_x != index_y:
                # calcualte distance
                dis = cluster_list[index_x].distance(cluster_list[index_y])
                if dis < result[0]:
                    result[0] = dis
                    result[1] = min(index_x,index_y)
                    result[2] = max(index_x,index_y)
    result = tuple(result)
    return result
    

def closest_pair_strip(cluster_list, horiz_center, half_width):
    """
    input : cluster_list, horizontal center, width
    out put : closet pair and distance (dist, idx1, idx2)
    """
    num = len(cluster_list)
    result = [float("inf"),-1,-1]
    cluster_list_new = []
    # filter list
    for index in range(num):
        if abs(cluster_list[index].horiz_center()-horiz_center) < half_width:
            cluster_list_new.append(cluster_list[index]);

    num_new = len(cluster_list_new)
    # sort by y-axis
    cluster_list_new.sort(key = lambda cluster: cluster.vert_center())
    # check distant
    for index_x in range(num_new-1):
        boundary = min(index_x+4,num_new)
        for index_y in range(index_x+1,boundary):
            dis = cluster_list_new[index_x].distance(cluster_list_new[index_y])
            if dis < result[0]:
                result[0] = dis
                # find original index
                ori_left = cluster_list.index(cluster_list_new[index_x])
                ori_right = cluster_list.index(cluster_list_new[index_y])
                result[1] = min(ori_left,ori_right)
                result[2] = max(ori_left,ori_right)
    result = tuple(result)
    return result
        
        
def fast_closest_pair(cluster_list):
    """
    input : cluster list
    out put : closet pair and distance (dist, idx1, idx2)
    """
    num = len(cluster_list)
    result = [float("inf"),-1,-1]
    cluster_list_copy = list(cluster_list)
    if num <= 3:
        result = slow_closest_pair(cluster_list)
    else:
        # sort by x-axis
        cluster_list_copy.sort(key = lambda cluster: cluster.horiz_center())
        index_mid = int(math.floor(num/2))
        mid = (cluster_list_copy[index_mid-1].horiz_center() + cluster_list_copy[index_mid].horiz_center())/2
        # separte to 2 list
        cluster_list_left = [cluster_list_copy[index] for index in range(0,index_mid)]
        cluster_list_right = [cluster_list_copy[index] for index in range(index_mid,num)]
        # recurrence
        result_left = fast_closest_pair(cluster_list_left)
        result_right = fast_closest_pair(cluster_list_right)
        if result_left[0] < result_right[0]:
            result[0] = result_left[0]
            # find original index
            ori_left = cluster_list.index(cluster_list_left[result_left[1]])
            ori_right = cluster_list.index(cluster_list_left[result_left[2]])
            result[1] = min(ori_left,ori_right)
            result[2] = max(ori_left,ori_right)
        else:
            result[0] = result_right[0]
            # find original index
            ori_left = cluster_list.index(cluster_list_right[result_right[1]])
            ori_right = cluster_list.index(cluster_list_right[result_right[2]])
            result[1] = min(ori_left,ori_right)
            result[2] = max(ori_left,ori_right)
        # merge
        result_merge = closest_pair_strip(cluster_list, mid, result[0])
        if result_merge[0] < result[0]:
            result = result_merge
    result = tuple(result)
    return result


################################################################################################################################################
# test data
"""
cluster_list = [
alg_cluster.Cluster(set(['06081']), 52.6171444847, 262.707477827, 707161, 5.6e-05),
alg_cluster.Cluster(set(['06075']), 52.7404001225, 254.517429395, 776733, 8.4e-05),
alg_cluster.Cluster(set(['06085']), 63.1509653633, 270.516712105, 1682585, 6.3e-05),
alg_cluster.Cluster(set(['06095']), 64.1452346104, 245.330036641, 394542, 4.6e-05),
alg_cluster.Cluster(set(['06021']), 65.2043358182, 213.245337355, 26453, 6.9e-05),
alg_cluster.Cluster(set(['06077']), 74.1740312349, 256.485831492, 563598, 5.2e-05),
alg_cluster.Cluster(set(['06083']), 76.0382837186, 340.420376302, 399347, 6.4e-05),
alg_cluster.Cluster(set(['06089']), 77.359494209, 188.945068958, 163256, 5.7e-05),
alg_cluster.Cluster(set(['06099']), 77.5948233373, 265.302047042, 446997, 5.1e-05),
alg_cluster.Cluster(set(['06047']), 80.1217093401, 275.749681794, 210554, 4.7e-05),
]
print kmeans_clustering(cluster_list, 3, 1)
"""

# hierarchical clustering
def hierarchical_clustering(cluster_list, num_clusters):
    """
    input : cluster list and number of cluster x
    out put : x cluster list which divide from original cluster
    """
    num_current = len(cluster_list)
    cluster_list_copy = list(cluster_list)
    while num_current > num_clusters : 
        # find closest pair
        result = fast_closest_pair(cluster_list_copy)
        cluster1 = cluster_list_copy[result[1]]
        cluster2 = cluster_list_copy[result[2]]
        # remove closest pair from list
        cluster_list_copy.remove(cluster1) 
        cluster_list_copy.remove(cluster2) 
        # merge closest pair and add to list
        cluster1.merge_clusters(cluster2)
        cluster_list_copy.append(cluster1)
        # get new length of list
        num_current = len(cluster_list_copy)

    return cluster_list_copy


import alg_cluster
# k-means clustering
def kmeans_clustering(cluster_list, num_clusters, num_iterations):
    """
    input : cluster list, and number of cluster x, amd iterate time
    out put : x cluster list which divide from original cluster
    """
    num_total = len(cluster_list)    
    # choose initialize center by population
    cluster_list_copy = list(cluster_list)
    cluster_list_copy.sort(key = lambda cluster: cluster.total_population(),reverse=True)
    center_list = []
    for num_set in range(num_clusters):
        center_list.append((cluster_list_copy[num_set].horiz_center(),cluster_list_copy[num_set].vert_center()))
    
    for iteration in range(num_iterations):
        # initial empty set created by center lits
        cluster_list_new = []
        for num_set in range(num_clusters):
            cluster_list_new.append(alg_cluster.Cluster(set([]), center_list[num_set][0], center_list[num_set][1], 0, 0))           
            
        # find closest set for each item in cluster list
        target_index_list = []
        for index in range(num_total):
            # check distance with each set
            dis_check = float("inf")
            for num_set in range(num_clusters):
                dis = cluster_list_copy[index].distance(cluster_list_new[num_set])
                if dis<dis_check:
                    dis_check = dis
                    target_set = num_set
            target_index_list.append(target_set)
            
        for index in range(num_total):
            # merge to closest set
            cluster_list_new[target_index_list[index]].merge_clusters(cluster_list_copy[index])
            """
            distance_list = []
            for num_set in range(num_clusters):
                distance_list.append(cluster_list_copy[index].distance(cluster_list_new[num_set]))
            dis_min = min(distance_list)
            index_max = distance_list.index(dis_min)
            cluster_list_new[index_max].merge_clusters(cluster_list_copy[index])
            """
        
        # set new center list
        center_list = []
        for num_set in range(num_clusters):
            center_list.append((cluster_list_new[num_set].horiz_center(),cluster_list_new[num_set].vert_center()))
        
    return cluster_list_new
























    
    
    