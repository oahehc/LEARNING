# Set timeout for CodeSkulptor if necessary
import codeskulptor
codeskulptor.set_timeout(60)

# import function
import simpleplot
import math
import random	

# define function
def create_random_graph(nodes,probability):
    """
    generate graph by probability
    """
    graph = {}	
    for nodeI in range(nodes):
        graph[nodeI] = set([])
        for nodeJ in range(nodes):
            if nodeI != nodeJ:
                randomPro = random.random()
                if randomPro < probability:
                    graph[nodeI].add(int(nodeJ))
    return graph

def compute_in_degrees(digraph):
    """
    calculate total in degrees number for each node
    """
    distribution = {}
    for key in digraph:
        distribution[key] = 0
    for key in digraph:
        for node in digraph[key]:
            distribution[node] += 1
    return distribution
    
def in_degree_distribution(digraph):
    """
    return distribution with
    key = numbers of in degree 
    value = numbers of node 
    """
    distribution = {}
    in_degrees_num = compute_in_degrees(digraph)
    in_degrees_total = len(in_degrees_num)
    for key in in_degrees_num:
        node = in_degrees_num[key]	
        if distribution.has_key(node):
            distribution[node] += 1
        else:
            distribution[node] = 1
    for key in distribution:
        distribution[key] = float(distribution[key])/in_degrees_total
    return distribution

def build_loglog_plot(distribution, type = "normal"):
    """
    Build log-log plot by distribution
    """
    plot = []
    for key in distribution:
            if type == "normal":
                plot.append([key, distribution[key]])
            elif type == "log":
                if((key!=0)and(distribution[key]!=0)):
                    plot.append([math.log(key), math.log(distribution[key])])
    return plot


####################################################################################################
# generate random graph
graph = create_random_graph(500,0.001)

# get in degree distribution
inDegree_distribution = in_degree_distribution(graph)

# create log-log plot
plot_noraml = build_loglog_plot(inDegree_distribution)
plot_log = build_loglog_plot(inDegree_distribution,"log")

'''
# show plot
simpleplot.plot_lines("generating random graphs(1000,0.3)", 600, 600, "in-degree number", "node number", [plot_noraml])
simpleplot.plot_lines("generating random graphs(1000,0.3)", 600, 600, "log(in-degree number)", "log(node number)", [plot_log])
'''

print plot_noraml
print plot_log



    


