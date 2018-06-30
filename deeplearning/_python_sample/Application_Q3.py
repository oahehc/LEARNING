"""
Provided code for application portion of module 1

Helper class for implementing efficient version
of DPA algorithm
"""
# general imports
import random


class DPATrial:
    """
    Simple class to encapsulate optimized trials for DPA algorithm
    
    Maintains a list of node numbers with multiple instances of each number.
    The number of instances of each node number are
    in the same proportion as the desired probabilities
    
    Uses random.choice() to select a node number from this list for each trial.
    """

    def __init__(self, num_nodes):
        """
        Initialize a DPATrial object corresponding to a 
        complete graph with num_nodes nodes
        
        Note the initial list of node numbers has num_nodes copies of
        each node number
        """
        self._num_nodes = num_nodes
        self._node_numbers = [node for node in range(num_nodes) for dummy_idx in range(num_nodes)]


    def run_trial(self, num_nodes):
        """
        Conduct num_node trials using by applying random.choice()
        to the list of node numbers
        
        Updates the list of node numbers so that the number of instances of
        each node number is in the same ratio as the desired probabilities
        
        Returns:
        Set of nodes
        """
        
        # compute the neighbors for the newly-created node
        new_node_neighbors = set()
        for dummy_idx in range(num_nodes):
            new_node_neighbors.add(random.choice(self._node_numbers))
        
        # update the list of node numbers so that each node number 
        # appears in the correct ratio
        self._node_numbers.append(self._num_nodes)
        self._node_numbers.extend(list(new_node_neighbors))
        
        #update the number of nodes
        self._num_nodes += 1
        return new_node_neighbors

        
DPA = DPATrial(13)
for i in range(13,28000):
    randomSet = DPA.run_trial(13)
    '''
    print DPA._num_nodes
    print randomSet
    print DPA._node_numbers
    '''
print DPA._num_nodes


# calculate indegree number for each node
from collections import Counter
indegreeNum = Counter(DPA._node_numbers)
print indegreeNum

    
# tranfer to plot
import math	
def build_loglog_plot(distribution):
    """
    Build log-log plot by distribution
    """
    plot = []
    for key in distribution:
            if((key!=0)and(distribution[key]!=0)):
                plot.append([math.log(key), math.log(distribution[key])])
    return plot
    

# show plot
import simpleplot
plot = build_loglog_plot(indegreeNum)
simpleplot.plot_lines("DPA", 600, 600, "log(in-degree number)", "log(node number)", [plot])

