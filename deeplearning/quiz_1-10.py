# encoding: utf-8
import numpy as np
import math


def softmax(scores):
    if((type(scores[0]) is int) | (type(scores[0]) is float)):
        row = len(scores)
        sumArray = 0
        for j in range(row):
            sumArray += math.exp(scores[j])

        resultArray = np.full(row, 0, dtype=float)
        for j in range(row):
            resultArray[j] = math.exp(scores[j]) / sumArray
    else:
        col = len(scores[0])
        row = len(scores)
        sumArray = np.full(col, 0, dtype=float)
        for i in range(col):
            for j in range(row):
                sumArray[i] += math.exp(scores[j][i])
                print(i, scores[j][i], math.exp(scores[j][i]), sumArray[i])
        resultArray = np.full((row, col), 0, dtype=float)
        for i in range(col):
            for j in range(row):
                resultArray[j][i] = math.exp(scores[j][i]) / sumArray[i]
    return resultArray
