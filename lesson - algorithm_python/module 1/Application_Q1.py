"""
Provided code for Application portion of Module 1
Imports physics citation graph 
"""
# general imports
import urllib2

# Set timeout for CodeSkulptor if necessary
import codeskulptor
codeskulptor.set_timeout(20)

# import plot and math
import simpleplot
import math

# Code for loading citation graph
CITATION_URL = "http://storage.googleapis.com/codeskulptor-alg/alg_phys-cite.txt"

# def relative function
def load_graph(graph_url):
    """
    Function that loads a graph given the URL
    for a text representation of the graph
    Returns a dictionary that models a graph
    """
    graph_file = urllib2.urlopen(graph_url)
    graph_text = graph_file.read()
    graph_lines = graph_text.split('\n')
    graph_lines = graph_lines[ : -1]
    print "Loaded graph with", len(graph_lines), "nodes"
    answer_graph = {}
    for line in graph_lines:
        neighbors = line.split(' ')
        node = int(neighbors[0])
        answer_graph[node] = set([])
        for neighbor in neighbors[1 : -1]:
            answer_graph[node].add(int(neighbor))
    return answer_graph

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
# load data
citation_graph = load_graph(CITATION_URL)

# get in degree distribution
citation_inDegree_distribution = in_degree_distribution(citation_graph)

# create log-log plot
plot_normal = build_loglog_plot(citation_inDegree_distribution)
plot_lot = build_loglog_plot(citation_inDegree_distribution,"log")

# show plot
simpleplot.plot_lines("in-degree distribution", 600, 600, "in-degree number", "node number", [plot_normal])
simpleplot.plot_lines("in-degree distribution", 600, 600, "log(in-degree number)", "log(node number)", [plot_lot])




