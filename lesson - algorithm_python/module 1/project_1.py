"""
graph dictionary
"""
EX_GRAPH0 = {
	0:set([1,2]),
	1:set([]),
	2:set([])
}
EX_GRAPH1 = {
	0:set([1,4,5]),
	1:set([2,6]),
	2:set([3]),
	3:set([0]),
	4:set([1]),
	5:set([2]),
	6:set([])
}
EX_GRAPH2 = {
	0:set([1,4,5]),
	1:set([2,6]),
	2:set([3,7]),
	3:set([7]),
	4:set([1]),
	5:set([2]),
	6:set([]),
	7:set([3]),
	8:set([1,2]),
	9:set([0,3,4,5,6,7])
}

def make_complete_graph(num_nodes):
	"""
	return complete graph by setting node numbers
	"""
	graph = {}
	if num_nodes>0:
		for node in range(0,num_nodes):
			array = []
			for number in range(0,num_nodes):
				if number != node:
					array.append(number)
			graph[node] = set(array)
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
    for key in in_degrees_num:
        node = in_degrees_num[key]
        if distribution.has_key(node):
            distribution[node] += 1
        else:
            distribution[node] = 1
    return distribution

	


print compute_in_degrees(EX_GRAPH0)
print in_degree_distribution(EX_GRAPH0)