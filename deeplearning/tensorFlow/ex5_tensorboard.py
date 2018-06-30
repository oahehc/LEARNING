'''
adjust model in example_3 for create tensorboard
'''
import tensorflow as tf
import numpy as np
import matplotlib.pyplot as plt

def add_layer(inputs, in_size, out_size, n_layer, activation_function=None):
    layer_name = 'Layer{0}'.format(n_layer)
    with tf.name_scope(layer_name): # group layer
        with tf.name_scope('weights'):
            Weights = tf.Variable(tf.random_normal([in_size,out_size]), name='W') # add name for weights
            tf.summary.histogram('weights',Weights) # add histogram for variable
        with tf.name_scope('biases'):
            biases = tf.Variable(tf.zeros([1, out_size]) + 0.1, name='B') # add name for biases
            tf.summary.histogram('biases',biases) # add histogram for variable
        with tf.name_scope('Wx_plus_b'):
            Wx_plus_b = tf.matmul(inputs, Weights) + biases
        if activation_function is None:
            outputs = Wx_plus_b
        else:
            outputs = activation_function(Wx_plus_b)
        tf.summary.histogram('outputs', outputs) # add histogram for variable
        return outputs


# create simulate data
x_data = np.linspace(-1, 1, 300)[:,np.newaxis]
noise = np.random.normal(0, 0.05, x_data.shape) 
y_data = np.square(x_data) - 0.5 + noise 

# create layer
with tf.name_scope('Inputs'): # group input
    xs = tf.placeholder(tf.float32,[None, 1], name='x_input') # add name for input
    ys = tf.placeholder(tf.float32,[None, 1], name='y_input') # add name for input
layer1 = add_layer(xs, 1, 10, n_layer=1, activation_function=tf.nn.relu)
prediction = add_layer(layer1, 10, 1, n_layer=2, activation_function=None)
with tf.name_scope('loss'):
    loss = tf.reduce_mean(tf.reduce_sum(tf.square(ys - prediction), reduction_indices=[1], name='loss_sum'), name='loss_mean') # add name for loss
    tf.summary.scalar('loss', loss) # add event for variable

# train
with tf.name_scope('train_step'):
    train_step = tf.train.GradientDescentOptimizer(0.1).minimize(loss)
init = tf.initialize_all_variables()
sess = tf.Session()
sess.run(init)

merged = tf.summary.merge_all() # merge all event, histogram
writer = tf.summary.FileWriter('logs/', graph=sess.graph) # write graph to logs folder
# open graph: tensorboard --logdir=logs

# start running
for i in range(1001):
    sess.run(train_step, feed_dict={xs: x_data, ys: y_data})
    if i%50 == 0:
        result = sess.run(merged, feed_dict={xs: x_data, ys: y_data}) # need to run merged to create graph
        writer.add_summary(result, i) # add result to writer file