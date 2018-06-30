'''
Convolutional Neural Networks
'''
from __future__ import print_function
import tensorflow as tf
from tensorflow.examples.tutorials.mnist import input_data

mnist = input_data.read_data_sets('MNIST_data', one_hot=True) # load mnist data : 1 to 10 img data

def compute_accuracy(v_xs, v_ys):
    global prediction
    y_pre = sess.run(prediction, feed_dict={xs: v_xs, keep_prob: 1}) # without dropout when testing
    correct_prediction = tf.equal(tf.argmax(y_pre, 1), tf.argmax(v_ys, 1))
    accuracy = tf.reduce_mean(tf.cast(correct_prediction, tf.float32))
    result = sess.run(accuracy, feed_dict={xs: v_xs, ys: v_ys, keep_prob: 1})
    return result

def weight_variable(shape):
    initial = tf.truncated_normal(shape, stddev=0.1) # Outputs random values from a truncated normal distribution.
    return tf.Variable(initial)

def bias_variable(shape):
    initial = tf.constant(0.1, shape=shape)
    return tf.Variable(initial)

def conv2d(x, W):
    '''
    x = input data
    W = weight
    stride [1, x_movement, y_movement, 1] ; Must have strides[0] = strides[3] = 1
    padding = VALID || SAME
    '''
    return tf.nn.conv2d(x, W, strides=[1, 1, 1, 1], padding='SAME')

def max_pool_2x2(x):
    '''
    stride [1, x_movement, y_movement, 1]
    '''
    return tf.nn.max_pool(x, ksize=[1, 2, 2, 1], strides=[1, 2, 2, 1], padding='SAME')

# define placeholder for inputs to network
xs = tf.placeholder(tf.float32, [None, 784])  # 28x28
ys = tf.placeholder(tf.float32, [None, 10])   # result number 0~9
keep_prob = tf.placeholder(tf.float32) # dropout ratio
x_image = tf.reshape(xs, [-1, 28, 28, 1]) # (sample_numbers, 28*28px, color)

## conv1 layer : sample padding convolution + maxpool ##
# # 28*28*1 scan by 5*5*1*32 with same padding => 28*28*32
# # 28*28*32 with 2x2 pooling => 14*14*32
W_conv1 = weight_variable([5,5,1,32]) # patch 5*5 ; input depth=1 ; output depth=32
b_conv1 = bias_variable([32])
h_conv1 = tf.nn.relu(conv2d(x_image, W_conv1) + b_conv1) # ouput size = 28*28*32
h_pool1 = max_pool_2x2(h_conv1) # output size = 14*14*32

## conv2 layer ##
# # 14*14*32 scan by 5*5*32*64 with same padding => 14*14*64
# # 14*14*64 with 2x2 pooling => 7*7*64
W_conv2= weight_variable([5,5,32,64])
b_conv2 = bias_variable([64])
h_conv2 = tf.nn.relu(conv2d(h_pool1, W_conv2) + b_conv2)
h_pool2 = max_pool_2x2(h_conv2)

## func1 layer ##
# # (7,7,64) reshape to (1, 7*7*64)
# # 7*7*64 X (7*7*64, 1024) = (1024)
W_fc1 = weight_variable([7*7*64, 1024]) # 1024 = any big number for data depth
b_fc1 = bias_variable([1024])
h_pool2_flat = tf.reshape(h_pool2, [-1, 7*7*64]) # [data_num, 7, 7, 64] => [data_num, 7*7*64]
h_fc1 = tf.nn.relu(tf.matmul(h_pool2_flat, W_fc1) + b_fc1)
h_fc1_drop = tf.nn.dropout(h_fc1, keep_prob) # add dropout for prevent over fitting

## func2 layer ##
# # (1024) X (1024, 10) = (10)
W_fc2 = weight_variable([1024, 10]) # output 10 = number 0~9 for final result
b_fc2 = bias_variable([10])
prediction = tf.nn.softmax(tf.matmul(h_fc1_drop, W_fc2) + b_fc2)

# the error between prediction and real data
cross_entropy = tf.reduce_mean(-tf.reduce_sum(ys * tf.log(prediction), reduction_indices=[1])) # loss
train_step = tf.train.AdamOptimizer(1e-4).minimize(cross_entropy) # use adam optimizer for increase calculate speed

sess = tf.Session()
init = tf.global_variables_initializer()
sess.run(init)
for i in range(1000):
    batch_xs, batch_ys = mnist.train.next_batch(100)
    sess.run(train_step, feed_dict={xs: batch_xs, ys: batch_ys, keep_prob: 0.5})
    if i % 50 == 0:
        print(compute_accuracy(mnist.test.images, mnist.test.labels))

