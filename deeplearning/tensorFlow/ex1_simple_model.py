'''
https://www.youtube.com/watch?v=JKR1Dxinwwc&index=6&list=PLXO45tsB95cKI5AIlf5TxxFPzb-0zeVZ8
simple tensorflow model
'''
import tensorflow as tf
import numpy as np

# create data
x_data = np.random.rand(100).astype(np.float32) # create random number as input, tensorflow use type=float32
y_data = x_data*0.1 + 0.3 # test model is linear function

# create tensorflow structure
Weights = tf.Variable(tf.random_uniform([1], -1.0, 1.0)) # create 1-dimension random varaible from -1~1 as weights
biases = tf.Variable(tf.zeros([1])) # biase is zero for initial
y = Weights*x_data + biases

loss = tf.reduce_mean(tf.square(y-y_data)) # loss function
optimizer = tf.train.GradientDescentOptimizer(0.5) # optimize by gradient descent with 0.5 learning rate
train = optimizer.minimize(loss) # min loss

# start training
init = tf.initialize_all_variables()
sess = tf.Session()
sess.run(init)

for step in range(200):
    sess.run(train)
    if step%20 == 0:
        print(step, sess.run(Weights), sess.run(biases)) # print weight and biase every 20 step