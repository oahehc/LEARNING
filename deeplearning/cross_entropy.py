import numpy as np


def cross_entropy(array_x, array_y):
    # print('array_x',array_x)
    # print('array_y',array_y)
    distance = array_y*np.log(array_x)*-1
    return distance

x = np.array([0.7, 0.2, 0.1])
y = np.array([(1,0,0),(0,1,0),(0,0,1)])
for ele_y in y:
    result = cross_entropy(x,ele_y)
    print(result)
    print(np.sum(result))