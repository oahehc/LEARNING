
# coding: utf-8

# In[27]:

# read csv file
from pandas import DataFrame, read_csv
import numpy as np
import tensorflow as tf
import pandas as pd
import operator

data_train = pd.read_csv('titanic_train.csv')
data_test = pd.read_csv('titanic_test.csv')

# merge train and test data, empty column = NaN
dummies_Type = pd.get_dummies(['test'], prefix= 'Type')
data_merge = data_train.append(data_test, ignore_index=True)

print('train',data_train.shape)
print('test',data_test.shape)
print('merge',data_merge.shape)


# In[28]:

# create Title base on Name
import re
titleList = list()
for name in data_merge['Name']:
    nameList = re.split(', |\.', name)
    title = nameList[1]
    titleList.append(title)
titleCol = pd.DataFrame(data = titleList, columns=['Title'])
data_merge_addTitle = pd.concat([data_merge, titleCol], axis=1)

# add age range
rangeList = list()
for age in data_merge['Age']:
    if age < 10:
        rangeList.append('X')
    else:
        age = str(age)
        ageRange = age[:1] + 'X'
        rangeList.append(ageRange)
rangeCol = pd.DataFrame(data = rangeList, columns=['Range'])
data_merge_addRange = pd.concat([data_merge_addTitle, rangeCol], axis=1)

# adjust cabin
cabinList = list()
for cabin in data_merge['Cabin']:
    cabin = str(cabin)
    cabinNew = cabin[:1]
    cabinList.append(cabinNew)
cabinCol = pd.DataFrame(data = cabinList, columns=['CabinNew'])
data_merge_adjustCabin = pd.concat([data_merge_addRange, cabinCol], axis=1)


import math
fareList = list()
for fare in data_merge['Fare']:
    if math.isnan(fare):
        fareList.append(30)
    else:
        fareList.append(fare)
fareCol = pd.DataFrame(data = fareList, columns=['FareNew'])
data_merge_adjustFare = pd.concat([data_merge_adjustCabin, fareCol], axis=1)


# In[29]:

# adjust to training format
data_final = data_merge_adjustFare
# # PLAN A
# 100 Train:  80.7142857143 Validate:  79.057591623
# dummy_list = ['Embarked','Sex','Parch','Pclass','Title','Range','CabinNew','SibSp']
# drop_list = ['FareNew','Age', 'Cabin', 'Fare', 'Name', 'Ticket']
# # B : REMOVE TITLE
# 100 Train:  82.1428571429 Validate:  79.057591623
# dummy_list = ['Embarked','Sex','Parch','Pclass','Range','CabinNew','SibSp']
# drop_list = ['FareNew','Age', 'Cabin', 'Fare', 'Name', 'Ticket','Title']
# # C: ADD FareNew
# 100 Train:  63.2857142857 Validate:  62.8272251309
# dummy_list = ['Embarked','Sex','Parch','Pclass','Title','Range','CabinNew','SibSp']
# drop_list = ['Age', 'Cabin', 'Fare', 'Name', 'Ticket']
# # D : Parch Pclass remain number
# 100 Train:  78.8571428571 Validate:  82.722513089
# dummy_list = ['Embarked','Sex','Title','Range','CabinNew','SibSp']
# drop_list = ['FareNew','Age', 'Cabin', 'Fare', 'Name', 'Ticket']
# # E : seperate all
# 100 Train:  78.8571428571 Validate:  79.057591623
dummy_list = ['Embarked','Sex','Parch','Pclass','Title','SibSp', 'Ticket', 'Cabin','Age', 'Fare']
drop_list = ['FareNew','Name','CabinNew','Range']
# # F : seperate all AND remove Fare
# 100 Train:  79.5714285714 Validate:  80.1047120419
# dummy_list = ['Embarked','Sex','Parch','Pclass','Title','SibSp', 'Ticket', 'Cabin','Age']
# drop_list = ['FareNew','Name','CabinNew','Range', 'Fare']
# # G
# 100 Train:  78.4285714286 Validate:  81.1518324607
# dummy_list = ['Embarked','Sex','Parch','Pclass','SibSp','Age','Cabin']
# drop_list = ['FareNew','Name', 'Fare','Title', 'Ticket', 'Range', 'CabinNew']


for attr in dummy_list:
    dummies = pd.get_dummies(data_final[attr], prefix= attr)
    data_final = pd.concat([data_final, dummies], axis=1)

data_final.drop(dummy_list, axis=1, inplace=True)
data_final.drop(drop_list, axis=1, inplace=True)
print('final data',data_final.shape)

# create csv data
data_merge_adjustFare.to_csv('titanic_DataAdjust.csv', index=False, header=True) 
data_final.to_csv('titanic_DataAdjustFinal.csv', index=False, header=True)

PassengerId = data_final.filter(regex='PassengerId').as_matrix()
Survived = data_final.filter(regex='Survived').as_matrix()
data_final.drop(['PassengerId','Survived'], axis=1, inplace=True)
dataMatrix = data_final.as_matrix()
print('seperate', PassengerId.shape, Survived.shape, dataMatrix.shape)


# In[30]:

# seperate to train and validate dataset
def one_hot(arr):
    minVal = min(arr)
    maxVal = max(arr)
    rangeVal = maxVal - minVal + 1
    result = []
    for val in arr:
        tempArr = [0] * int(rangeVal)
        tempArr[int(val - minVal)] = 1
        result.append(tempArr)
    return np.array(result)

trainData = dataMatrix[:700, :]
trainLabel = one_hot(Survived[:700])
validateData = dataMatrix[700:891, :]
validateLabel = one_hot(Survived[700:891])
testDataId = PassengerId[891:,0]
testData = dataMatrix[891:, :]
print('train', trainData.shape, trainLabel.shape)
print('validate', validateData.shape, validateLabel.shape)
print('test', testData.shape, testDataId.shape)


# In[50]:

# training model : single layer
def accuracy(predictions, labels):
    return (100.0 * np.sum(np.argmax(predictions, 1) == np.argmax(labels, 1)) / predictions.shape[0])

def reverse_one_hot(matrix):
    result = list()
    for arr in matrix:
        max_index, max_value = max(enumerate(arr), key=operator.itemgetter(1))
        result.append(max_index)
    return result


epochs = 12001
print_range = 500
decay_steps = 200
global_step = tf.placeholder(tf.int64)
# learning_rate = 0.1
learning_rate = tf.train.exponential_decay(learning_rate=0.9, global_step=global_step, decay_steps=decay_steps, decay_rate=0.9)
atttribueNum = trainData.shape[1]
x = tf.placeholder(tf.float32, [None, atttribueNum])
W = tf.Variable(tf.zeros([atttribueNum, 2]))
b = tf.Variable(tf.zeros([2]))
# W = tf.Variable(tf.truncated_normal([atttribueNum, 2]))
# b = tf.Variable(tf.truncated_normal([2]))
drop_rate = tf.placeholder(tf.float32)
y = tf.nn.softmax(tf.matmul(x, tf.nn.dropout(W, drop_rate)) + b)
y_ = tf.placeholder(tf.float32, [None, 2])
cross_entropy = tf.reduce_mean(tf.nn.softmax_cross_entropy_with_logits(labels=y_, logits=y))
# train_step = tf.train.GradientDescentOptimizer(learning_rate).minimize(cross_entropy)
# train_step = tf.train.AdadeltaOptimizer(learning_rate).minimize(cross_entropy) # Train:  94.0 Validate:  84.2931937173
# train_step = tf.train.AdagradOptimizer(learning_rate).minimize(cross_entropy) # Train:  96.8571428571 Validate:  85.3403141361
# train_step = tf.train.AdagradDAOptimizer(learning_rate, global_step=global_step).minimize(cross_entropy)
# train_step = tf.train.MomentumOptimizer(learning_rate, momentum=0.5).minimize(cross_entropy) # Train:  95.0 Validate:  87.4345549738
# train_step = tf.train.AdamOptimizer(learning_rate).minimize(cross_entropy) # Train:  99.7142857143 Validate:  83.2460732984
# train_step = tf.train.FtrlOptimizer(learning_rate).minimize(cross_entropy)
# train_step = tf.train.ProximalGradientDescentOptimizer(learning_rate).minimize(cross_entropy) # Train:  92.5714285714 Validate:  85.3403141361
train_step = tf.train.ProximalAdagradOptimizer(learning_rate).minimize(cross_entropy) # Train:  96.7142857143 Validate:  85.8638743455


init = tf.global_variables_initializer()
sess = tf.Session()
sess.run(init)
minValidate = 85
for epoch in range(epochs):
    sess.run(train_step, feed_dict = {x: trainData, y_: trainLabel, global_step:epoch, drop_rate: 0.5})
        
    trainPrediction = sess.run(y, feed_dict={x: trainData, drop_rate: 1})
    validatePrediction = sess.run(y, feed_dict={x: validateData, drop_rate: 1})
    trainAccuracy = accuracy(trainPrediction, trainLabel)
    validateAccuracy = accuracy(validatePrediction, validateLabel)
    if validateAccuracy>minValidate:
        minValidate = validateAccuracy
        print('***',epoch,trainAccuracy,validateAccuracy)
        testResult = reverse_one_hot(sess.run(y, feed_dict={x: testData, drop_rate: 1}))
        dataSet = list(zip(testDataId,testResult))
        df = pd.DataFrame(data = dataSet, columns=['PassengerId','Survived']) 
        df.to_csv('titanic_test_result.csv', index=False, header=True)
    if epoch%print_range == 0:
        print(epoch, 'Train: ', str(trainAccuracy), 'Validate: ', validateAccuracy)
print('finish')


# In[39]:

# estimate for test data
def reverse_one_hot(matrix):
    result = list()
    for arr in matrix:
        max_index, max_value = max(enumerate(arr), key=operator.itemgetter(1))
        result.append(max_index)
    return result

drop_rate = 1
testResult = reverse_one_hot(sess.run(y, feed_dict={x: testData}))
dataSet = list(zip(testDataId,testResult))
df = pd.DataFrame(data = dataSet, columns=['PassengerId','Survived']) 
df.to_csv('titanic_test_result.csv', index=False, header=True)
df


# In[209]:

# check training matrix
trainMatrix = sess.run(W, feed_dict = {x: trainData, y_: trainLabel})
col = list(data_final.columns)[2:]
coefData = list(zip(col,trainMatrix[:,1]))
coefCsv = pd.DataFrame(data = coefData, columns=['Attribute','Index']) 
coefCsv.to_csv('titanic_matrix.csv', index=False, header=True) 
coefCsv


# In[322]:

# training model : 2 layer
global_step = tf.placeholder(tf.int32)
# learning_rate = tf.train.exponential_decay(learning_rate=0.9, global_step=global_step, decay_steps=50, decay_rate=0.9)
learning_rate = 0.1
drop_rate = 0.5
atttribueNum = trainData.shape[1]
hidden_layer_dimension = 1024

# layer 1
x = tf.placeholder(tf.float32, [None, atttribueNum])
W1 = tf.Variable(tf.truncated_normal([atttribueNum, hidden_layer_dimension]))
b1 = tf.Variable(tf.random_normal([hidden_layer_dimension]))
y1 = tf.nn.relu(tf.matmul(x, tf.nn.dropout(W1, drop_rate)) + b1)
# layer 2
W2 = tf.Variable(tf.truncated_normal([hidden_layer_dimension, 2]))
b2 = tf.Variable(tf.random_normal([2]))
y2 = tf.nn.softmax(tf.matmul(y1, tf.nn.dropout(W2, drop_rate)) + b2)

y_ = tf.placeholder(tf.float32, [None, 2])
cross_entropy = tf.reduce_mean(tf.nn.softmax_cross_entropy_with_logits(labels=y_, logits=y2))
train_step = tf.train.GradientDescentOptimizer(learning_rate).minimize(cross_entropy)
# train_step = tf.train.AdamOptimizer(learning_rate).minimize(cross_entropy)

epochs = 5001
init = tf.global_variables_initializer()
sess = tf.Session()
sess.run(init)
for epoch in range(epochs):
    sess.run(train_step, feed_dict = {x: trainData, y_: trainLabel, global_step:epochs})
#     for i in range(7):
#         subTrainData = trainData[100*i : 100*(i+1), :]
#         subTrainLabel = trainLabel[100*i : 100*(i+1), :]
#         sess.run(train_step, feed_dict = {x: subTrainData, y_: subTrainLabel, global_step:i})
    if epoch%100 == 0:
        trainPrediction = sess.run(y2, feed_dict={x: trainData})
        validatePrediction = sess.run(y2, feed_dict={x: validateData})
        print(epoch, 'Train: ', accuracy(trainPrediction, trainLabel), 'Validate: ', accuracy(validatePrediction, validateLabel))


# In[ ]:



