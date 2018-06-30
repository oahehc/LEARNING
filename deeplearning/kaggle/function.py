def one_hot(arr):
    '''
    translate index array to one_hot_encoding format
    [1,2,3] -> [[1,0,0],[0,1,0],[0,0,1]]
    '''
    minVal = min(arr)
    maxVal = max(arr)
    rangeVal = maxVal - minVal + 1
    result = []
    for val in arr:
        tempArr = [0] * int(rangeVal)
        tempArr[int(val - minVal)] = 1
        result.append(tempArr)
    return result


def reverse_one_hot(matrix):
    '''
    translate one_hot_encoding format to index array
    '''
    result = list()
    for arr in matrix:
        max_index, max_value = max(enumerate(arr), key=operator.itemgetter(1))
        result.append(max_index)
    return result
