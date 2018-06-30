
# coding: utf-8

# In[2]:

import numpy as np
import tensorflow as tf
import matplotlib.pyplot as plt
from pandas import DataFrame, read_csv
import pandas as pd
get_ipython().magic(u'matplotlib inline')
from tensorflow.examples.tutorials.mnist import input_data
mnist = input_data.read_data_sets("MNIST_data/", one_hot=True)


# In[3]:

def weight_variable(shape):
    initial = tf.truncated_normal(shape, stddev=0.1)
    return tf.Variable(initial)
def bias_variable(shape):
    initial = tf.constant(0.1, shape = shape)
    return tf.Variable(initial)
def conv2d(x, W):
    return tf.nn.conv2d(x, W, strides=[1, 1, 1, 1], padding = 'SAME')
def max_pool_2x2(x):
    return tf.nn.max_pool(x, ksize=[1,2,2,1], strides=[1,2,2,1], padding = 'SAME')

def compute_accuracy(v_xs, v_ys):
    global prediction
    y_pre = sess.run(prediction, feed_dict={xs: v_xs, keep_prob: 1})
    correct_prediction = tf.equal(tf.argmax(y_pre, 1), tf.argmax(v_ys, 1))
    accuracy = tf.reduce_mean(tf.cast(correct_prediction, tf.float32))
    result = sess.run(accuracy, feed_dict={xs: v_xs, ys: v_ys, keep_prob: 1})
    return result


# In[4]:

# define placeholder for inputs to network
xs = tf.placeholder(tf.float32, [None, 784])
ys = tf.placeholder(tf.float32, [None, 10])
keep_prob = tf.placeholder(tf.float32)
x_image = tf.reshape(xs, [-1, 28, 28, 1]) # sample_numbers, 28*28px, color(black&white)

## conv1 layer : sample padding convolution + maxpool
W_conv1 = weight_variable([5,5,1,32]) # patch 5*5 ; input depth=1 ; output depth=32
b_conv1 = bias_variable([32])
h_conv1 = tf.nn.relu(conv2d(x_image, W_conv1) + b_conv1) # ouput size = 28*28*32
h_pool1 = max_pool_2x2(h_conv1) # output size = 14*14*32


## conv2 layer ##
W_conv2= weight_variable([5,5,32,64])
b_conv2 = bias_variable([64])
h_conv2 = tf.nn.relu(conv2d(h_pool1, W_conv2) + b_conv2)
h_pool2 = max_pool_2x2(h_conv2)

## func1 layer ##
W_fc1 = weight_variable([7*7*64, 1024]) # 1024 = any big number for data depth
b_fc1 = bias_variable([1024])
h_pool2_flat = tf.reshape(h_pool2, [-1, 7*7*64]) # [data_num, 7, 7, 64] => [data_num, 7*7*64]
h_fc1 = tf.nn.relu(tf.matmul(h_pool2_flat, W_fc1) + b_fc1)
h_fc1_drop = tf.nn.dropout(h_fc1, keep_prob) # add dropout for prevent over fitting

## func2 layer ##
W_fc2 = weight_variable([1024, 10]) # output 10 = number 0~9 for final result
b_fc2 = bias_variable([10])
prediction = tf.nn.softmax(tf.matmul(h_fc1_drop, W_fc2) + b_fc2)

# the error between prediction and real data
cross_entropy = tf.reduce_mean(-tf.reduce_sum(ys * tf.log(prediction), reduction_indices=[1])) # loss
train_step = tf.train.AdamOptimizer(1e-4).minimize(cross_entropy) # use adam optimizer for increase calculate speed

sess = tf.Session()
init = tf.global_variables_initializer()
sess.run(init)
# for i in range(1000):
#     batch_xs, batch_ys = mnist.train.next_batch(100)
#     sess.run(train_step, feed_dict={xs: batch_xs, ys: batch_ys, keep_prob: 0.5})
#     if i % 50 == 0:
#         print(compute_accuracy(mnist.test.images, mnist.test.labels))


# In[6]:

# plot high dimension data
from sklearn.decomposition import PCA
from sklearn.manifold import TSNE

def pca(X, n_components):
    pca = PCA(n_components = n_components)
    pca.fit(X)
    return pca.transform(X)

def tsne(X, n_components):
    model = TSNE(n_components=n_components, perplexity=40)
    return model.fit_transform(X)

def plot_scatter(x, labels, title, txt = False):
    plt.title(title)
    ax = plt.subplot()
    ax.scatter(x[:,0], x[:,1], c = labels)
    txts = []
    if txt:
        for i in range(10):
            xtext, ytext = np.median(x[labels == i, :], axis=0)
            txt = ax.text(xtext, ytext, str(i), fontsize=24)
            txt.set_path_effects([
                PathEffects.Stroke(linewidth=5, foreground="w"),
                PathEffects.Normal()])
            txts.append(txt)
    plt.show()

    
test_size = 1000
test_data = mnist.test.images[0:test_size, :]
test_label = mnist.test.labels[0:test_size, :]
test_label_index = np.argmax(test_label, axis = 1)


sess = tf.Session()
init = tf.global_variables_initializer()
sess.run(init)

h_conv1Val = sess.run(h_conv1, feed_dict = {xs: test_data})
h_conv1Val_reshape = sess.run(tf.reshape(h_conv1Val, [-1, 28 * 28 * 32]))
h_conv2Val = sess.run(h_conv2, feed_dict = {xs: test_data})
h_conv2Val_reshape = sess.run(tf.reshape(h_conv2Val, [-1, 14 * 14 * 64]))
h_fc1Val = sess.run(h_fc1, feed_dict = {xs: test_data})

result = pca(test_data, 2)
plot_scatter(result, test_label_index, "original with pca")
result = pca(h_conv1Val_reshape, 2)
plot_scatter(result, test_label_index, "layer1 with pca")
result = pca(h_conv2Val_reshape, 2)
plot_scatter(result, test_label_index, "layer2 with pca")
result = pca(h_fc1Val, 2)
plot_scatter(result, test_label_index, "h_fc1 with pca")


# In[8]:

# layer1_tsne = tsne(h_conv1Val_reshape, 2)
# plot_scatter(layer1_tsne, test_label_index, "layer1 with tsne")


result = tsne(test_data, 2)
plot_scatter(result, test_label_index, "original with tsne")
result = tsne(h_conv1Val_reshape, 2)
plot_scatter(result, test_label_index, "layer1 with tsne")
result = tsne(h_conv2Val_reshape, 2)
plot_scatter(result, test_label_index, "layer2 with tsne")
result = tsne(h_fc1Val, 2)
plot_scatter(result, test_label_index, "h_fc1 with tsne")


# In[ ]:



