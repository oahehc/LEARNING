"""
Project 2 for Algorithm Thinkng Part1
"""

##################################################################################################
def bfs_visited(ugraph, start_node):
	"""
	ugraph = undirected graph 
	start_node = start point
	returns the set consisting of all nodes that are visited by a BFS that starts at start_node
	"""
	queue = []
	visited = [start_node]
	queue.append(start_node)
	while queue:
		current = queue.pop(0)
		for content in ugraph[current]:
			if content not in visited:
				visited.append(content)
				queue.append(content)
	return set(visited)


def cc_visited(ugraph):
	"""
	ugraph = undirected graph
	returns a list of sets, where each set consists of all the nodes in a connected component
	and there is exactly one set in the list for each connected component
	"""
	remain = []
	for node in ugraph:
		remain.append(node)
	connected = []
	while remain:
		visited = bfs_visited(ugraph, remain[0])
		connected.append(visited)
		remain = [i for i in remain if not i in visited]
	return connected
	
	
def largest_cc_size(ugraph):
	"""
	ugraph = undirected graph
	returns the size (an integer) of the largest connected component in ugraph
	"""
	connected = cc_visited(ugraph)
	maxnum = 0
	for content in connected:
		maxnum = max(maxnum,len(content))
	return maxnum

	
def compute_resilience(ugraph, attack_order):
	"""
	ugraph = undirected graph
	attack_order = a list of nodes in ugraph, removes the given node and its edges from the graph
	returns a list with largest connected component after removes node by attack order
	"""
	newgraph = ugraph
	connectnum = [largest_cc_size(ugraph)]
	for content in attack_order:
		newgraph.pop(content)
		for key in newgraph:
			if content in newgraph[key]:
				newgraph[key].remove(content)
		connectnum.append(largest_cc_size(newgraph))
	return connectnum
		
		

##################################################################################################
EX_GRAPH1 = {
	0:set([1,2]),
	1:set([0]),
	2:set([0]),
	3:set([4]),
	4:set([3])
}
EX_GRAPH2 = {
	0:set([1,2]),
	1:set([0]),
	2:set([0,3]),
	3:set([2,4]),
	4:set([3]),
	5:set([6]),
	6:set([5])
}