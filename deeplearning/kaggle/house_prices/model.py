from pandas import DataFrame, read_csv
import numpy as np
import tensorflow as tf
import pandas as pd
import operator
import math
from datetime import datetime
import time

# download csv file if not exist
from six.moves.urllib.request import urlretrieve
import os
data_root = '.'
url = 'https://s3-ap-northeast-1.amazonaws.com/furbo-mixpenal/kaggle_data/'
def download_file_from_s3(filename):
    dest_filename = os.path.join(data_root, filename)
    if not os.path.exists(dest_filename):
        print('Attempting to download:', filename) 
        filename, _ = urlretrieve(url + filename, dest_filename)
    else:
        print('file exist:', filename) 
download_file_from_s3('HousePrices_train.csv')
download_file_from_s3('HousePrices_test.csv')

# read csv file
data_train = pd.read_csv('HousePrices_train.csv')
data_test = pd.read_csv('HousePrices_test.csv')
# merge train and test data
dummies_Type = pd.get_dummies(['test'], prefix= 'Type')
data_merge = data_train.append(data_test, ignore_index=True)


# # column info adjust
data_merge_adjust = data_merge
# range
rangeList = ['LotFrontage','MasVnrArea','BsmtUnfSF','TotalBsmtSF','WoodDeckSF','OpenPorchSF','EnclosedPorch','3SsnPorch',
             'ScreenPorch','PoolArea','BsmtFinSF1','BsmtFinSF2']
rangeUnit = 10
for key in rangeList:
    tempList = list()
    for value in data_merge_adjust[key]:
        if value == '0':
            tempList.append('NX')
        else:
            try:
                value = int(value)
                tempList.append(str(value//rangeUnit) + 'X')
            except:
                tempList.append('NX')
    tempCol = pd.DataFrame(data = tempList, columns=['_' + key + 'Range'])
    data_merge_adjust = pd.concat([data_merge_adjust, tempCol], axis=1)

# score
scoreList = ['ExterQual','ExterCond','BsmtQual','BsmtCond','HeatingQC','KitchenQual','FireplaceQu','GarageQual','GarageCond',
             'PoolQC','BsmtExposure','BsmtFinType1','BsmtFinType2']
scoreMap = {
            "NA":0,
            "Po":1,
            "No":1,
            "Unf":1,
            "Fa":2,
            "Mn":2,
            "LwQ":2,
            "TA":3,
            "Av":3,
            "Rec":3,
            "Gd":4,
            "BLQ":4,
            "Ex":5,
            "ALQ":5,
            "GLQ":6
            }
for key in scoreList:
    tempList = list()
    for value in data_merge_adjust[key]:
        try:
            tempList.append(scoreMap[value])
        except:
            tempList.append('NA')
    tempCol = pd.DataFrame(data = tempList, columns=['_' + key + 'Score'])
    data_merge_adjust = pd.concat([data_merge_adjust, tempCol], axis=1)
    
# replace empty by zero
# empty_row = ['BsmtFullBath','BsmtHalfBath','GarageArea','GarageCars','GarageYrBlt', 'LotFrontage','BsmtFinSF1','BsmtFinSF2']
empty_row = list(data_merge.columns)
for row in empty_row:
    tempList = list()
    for index,val in enumerate(data_merge_adjust[row]):
        try:
            if math.isnan(val):
                tempList.append(0)
            else:
                tempList.append(val)
        except:
            tempList.append(val)
            print(type(val),val)
    data_merge_adjust[row] = tempList

    
# '_BsmtFinTypeMerge1','_BsmtFinTypeMerge2': BsmtFinType1 / BsmtFinSF1 : Score + range
for num in ['1','2']:
    tempList = list()
    FinType = 'BsmtFinType' + num
    FinSF = 'BsmtFinSF' + num
    Merge = '_BsmtFinTypeMerge' + num
    for index in range(data_merge_adjust[FinType].size):
        BsmtFinType = data_merge_adjust[FinType][index]
        try:
            score = scoreMap[BsmtFinType]
        except:
            score = 0
        rangeVal = str(data_merge_adjust[FinSF][index]//rangeUnit) + 'X'
        val = str(score) + '_'  + rangeVal
        tempList.append(val)
    tempCol = pd.DataFrame(data = tempList, columns=[Merge])
    data_merge_adjust = pd.concat([data_merge_adjust, tempCol], axis=1)

# # scale adjust FOR all area
logList = ['1stFlrSF','2ndFlrSF','GarageArea','GarageYrBlt','GrLivArea','LotArea','MiscVal','3SsnPorch','BsmtFinSF1',
           'BsmtFinSF1','BsmtFinSF2','BsmtUnfSF','LotFrontage','MasVnrArea','OpenPorchSF','PoolArea','LowQualFinSF',
           'TotalBsmtSF','ScreenPorch','WoodDeckSF']
for key in logList:
    tempList = list()
    for val in data_merge_adjust[key]:
        # log
        try:
            newVal = math.log(val+1)
            tempList.append(newVal)
        except:
            tempList.append(0)
    data_merge_adjust[key] = tempList
    
# adjust price scale
linearList = ['SalePrice']
price_scale = 1
for key in linearList:
    data_merge_adjust[key] = data_merge_adjust[key] / price_scale

data_merge_adjust.to_csv('HousePrices_data_adjust.csv', index=False, header=True)


# flat and drop column
data_final = data_merge_adjust
dummy_list = ['MSSubClass','MSZoning','_LotFrontageRange','Street','Alley','LotShape','LandContour','Utilities','LotConfig','LandSlope',
              'Neighborhood','Condition1','Condition2','BldgType','HouseStyle','RoofStyle','RoofMatl','Exterior1st','Exterior2nd',
              'MasVnrType','_MasVnrAreaRange','_ExterQualScore','_ExterCondScore','Foundation','_BsmtQualScore','_BsmtCondScore',
              '_BsmtExposureScore','_BsmtUnfSFRange','_TotalBsmtSFRange',
             'Heating','_HeatingQCScore','CentralAir','Electrical','_KitchenQualScore','Functional','_FireplaceQuScore',
             'GarageType','GarageFinish','_GarageQualScore','_GarageCondScore','PavedDrive',
             '_WoodDeckSFRange','_OpenPorchSFRange','_EnclosedPorchRange','_3SsnPorchRange','_ScreenPorchRange',
              '_PoolAreaRange','_PoolQCScore','Fence','MiscFeature','SaleType','SaleCondition',
             '_BsmtFinType1Score','_BsmtFinType2Score','_BsmtFinSF1Range','_BsmtFinSF2Range',
              '_BsmtFinTypeMerge1','_BsmtFinTypeMerge2','BedroomAbvGr','BsmtFullBath','BsmtHalfBath','Fireplaces','FullBath',
              'GarageCars','HalfBath','KitchenAbvGr','TotRmsAbvGrd']
drop_list = ['ExterQual','ExterCond','BsmtQual','BsmtCond','HeatingQC','KitchenQual','FireplaceQu','GarageQual','GarageCond',
             'PoolQC','BsmtExposure','BsmtFinType1','BsmtFinType2']
keep_list = ['LotArea','OverallQual','OverallCond','YearBuilt','YearRemodAdd','1stFlrSF','2ndFlrSF',
            'LowQualFinSF','GrLivArea','BsmtFullBath','BsmtHalfBath','FullBath','HalfBath','BedroomAbvGr','KitchenAbvGr',
            'TotRmsAbvGrd','Fireplaces','GarageYrBlt','GarageCars','GarageArea','MiscVal','SalePrice',
             '_TotalSF','_SoldDate','_RemodGap']
for attr in dummy_list:
    dummies = pd.get_dummies(data_final[attr], prefix= attr)
    data_final = pd.concat([data_final, dummies], axis=1)
data_final.drop(dummy_list, axis=1, inplace=True)
data_final.drop(drop_list, axis=1, inplace=True)

# create csv data
data_final.to_csv('HousePrices_data_final.csv', index=False, header=True)
Id = data_final.filter(regex='Id').as_matrix()
SalePrice = data_final.filter(regex='SalePrice').as_matrix()
data_final.drop(['Id','SalePrice'], axis=1, inplace=True)
dataMatrix = data_final.as_matrix()

# seperate to train and validate dataset
trainAmount = data_train.shape[0]
tempData = dataMatrix[ : trainAmount , :]
tempLabel = SalePrice[ : trainAmount ]
testDataId = Id[ trainAmount : , 0 ]
testData = dataMatrix[ trainAmount : , :]

# np.random.shuffle(tempData)
# np.random.shuffle(tempLabel)
validateSize = 200
trainIndex = trainAmount - validateSize
trainData = tempData[ : trainIndex , :]
trainLabel = tempLabel[ : trainIndex ]
validateData = tempData[ trainIndex : trainAmount , :]
validateLabel = tempLabel[ trainIndex : trainAmount ]

# training model : 4 layer
epochs = 10001
print_range = (epochs - 1) // 10
hiddenLayer1 = 2048
hiddenLayer2 = 128
hiddenLayer3 = 32
train_drop_rate = 0.5
atttribueNum = trainData.shape[1]
batch_num = 10
batch_size = trainData.shape[0] // batch_num

global_step = tf.placeholder(tf.int32)
x = tf.placeholder(tf.float32, [None, atttribueNum])
W1 = tf.Variable(tf.truncated_normal([atttribueNum, hiddenLayer1]))
b1 = tf.Variable(tf.truncated_normal([hiddenLayer1]))
W2 = tf.Variable(tf.truncated_normal([hiddenLayer1, hiddenLayer2]))
b2 = tf.Variable(tf.truncated_normal([hiddenLayer2]))
W3 = tf.Variable(tf.truncated_normal([hiddenLayer2, hiddenLayer3]))
b3 = tf.Variable(tf.truncated_normal([hiddenLayer3]))
W4 = tf.Variable(tf.truncated_normal([hiddenLayer3, 1]))
b4 = tf.Variable(tf.truncated_normal([1]))
drop_rate = tf.placeholder(tf.float32)
y1 = tf.matmul(x, tf.nn.dropout(W1, drop_rate)) + b1
y2 = tf.matmul(y1, tf.nn.dropout(W2, drop_rate)) + b2
y3 = tf.matmul(y2, tf.nn.dropout(W3, drop_rate)) + b3
y = tf.matmul(y3, tf.nn.dropout(W4, drop_rate)) + b4
y_ = tf.placeholder(tf.float32, [None, 1])

predictionLoss = tf.reduce_mean(tf.abs(tf.div(y_ - y, y_)))
# predictionLoss = tf.sqrt(tf.reduce_mean(tf.square(tf.div(y_ - y, y_))))
predictionMean = tf.reduce_mean(tf.subtract(y_, y))
predictionStd = tf.sqrt(tf.reduce_mean(tf.square(tf.subtract(y_, y))))

loss = predictionLoss
train_step = tf.train.AdamOptimizer().minimize(loss)

init = tf.global_variables_initializer()
sess = tf.Session()
sess.run(init)
targetPercentage = 0.10

epochList = list()
trainLossList = list()
trainMeanList = list()
trainStdList = list()
validateLossList = list()
validateMeanList = list()
validateStdList = list()
for epoch in range(epochs):
    # min batch
    for i in range(batch_num):
        batch_train_data = trainData[i*batch_size : (i+1)*batch_size,]
        batch_train_label = trainLabel[i*batch_size : (i+1)*batch_size,]     
        sess.run(train_step, feed_dict = {x:batch_train_data, y_:batch_train_label, drop_rate: train_drop_rate})
    
    # record best result in validate data
    validateLoss = sess.run(predictionLoss, feed_dict={x:validateData, y_:validateLabel, drop_rate: 1})
    if validateLoss < targetPercentage:
        print('--save', validateLoss)
        targetPercentage = validateLoss
        testResult = sess.run(y, feed_dict={x: testData, drop_rate: 1})
        testResultExp = list()
        for val in testResult[:,0]:
            testResultExp.append(val * price_scale)
        dataSet = list(zip(testDataId, testResultExp))
        df = pd.DataFrame(data = dataSet, columns=['Id','SalePrice']) 
        df.to_csv('HousePrices_test_result.csv', index=False, header=True)

    # print train process
    if epoch%print_range == 0:
        trainLoss = sess.run(predictionLoss, feed_dict={x:trainData, y_:trainLabel, drop_rate: 1.0})
        trainMean = sess.run(predictionMean, feed_dict={x:trainData, y_:trainLabel, drop_rate: 1.0})
        trainStd = sess.run(predictionStd, feed_dict={x:trainData, y_:trainLabel, drop_rate: 1.0})
        validateLoss = sess.run(predictionLoss, feed_dict={x:validateData, y_:validateLabel, drop_rate: 1.0})
        validateMean = sess.run(predictionMean, feed_dict={x:validateData, y_:validateLabel, drop_rate: 1.0})
        validateStd = sess.run(predictionStd, feed_dict={x:validateData, y_:validateLabel, drop_rate: 1.0})

        print(datetime.now(), epoch)
        print('     Train: ', trainLoss, trainMean, trainStd)
        print('  Validate: ', validateLoss, validateMean, validateStd)
        
        epochList.append(epoch)
        trainLossList.append(trainLoss)
        trainMeanList.append(trainMean)
        trainStdList.append(trainStd)
        validateLossList.append(validateLoss)
        validateMeanList.append(validateMean)
        validateStdList.append(validateStd)

dataSet = list(zip(epochList, trainLossList,trainMeanList,trainStdList,validateLossList,validateMeanList,validateStdList))
df = pd.DataFrame(data = dataSet, columns= ['EPOCH', 'TRAIN_LOSS','TRAIN_MEAN','TRAIN_STD','VALIDATE_LOSS','VALIDATE_MEAN','VALIDATE_STD']) 
df.to_csv('HousePrices_train_process.csv', index=False, header=True)

print('***finish')