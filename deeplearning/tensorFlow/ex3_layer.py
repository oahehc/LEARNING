'''
add layer with activation function
'''
import tensorflow as tf
import numpy as np
import matplotlib.pyplot as plt

def add_layer(inputs, in_size, out_size, activation_function=None):
    Weights = tf.Variable(tf.random_normal([in_size,out_size])) # generate normal distribution variable with in_size*out_size dimention
    biases = tf.Variable(tf.zeros([1, out_size]) + 0.1) # recommend not use zero as initial biase
    Wx_plus_b = tf.matmul(inputs, Weights) + biases # calculate output
    if activation_function is None:
        outputs = Wx_plus_b # w/o activation function, ouput calculate result
    else:
        outputs = activation_function(Wx_plus_b) # with activation function, calculate ouput by activation_function
    return outputs


# create simulate data
x_data = np.linspace(-1, 1, 300)[:,np.newaxis]
noise = np.random.normal(0, 0.05, x_data.shape) # create noise to simulate real data
y_data = np.square(x_data) - 0.5 + noise # y = x^2 - 0.5

# create layer
xs = tf.placeholder(tf.float32,[None, 1]) # none = no limit => create n*1 matrix
ys = tf.placeholder(tf.float32,[None, 1])
layer1 = add_layer(xs, 1, 10, activation_function=tf.nn.relu)
prediction = add_layer(layer1, 10, 1, activation_function=None)
loss = tf.reduce_mean(tf.reduce_sum(tf.square(ys - prediction), reduction_indices=[1])) # reduction_indices = sum by which degree : https://www.zhihu.com/question/51325408

# train
train_step = tf.train.GradientDescentOptimizer(0.1).minimize(loss)
init = tf.initialize_all_variables()
sess = tf.Session()
sess.run(init)


# plot original data
fig = plt.figure()
ax = fig.add_subplot(1,1,1)
ax.scatter(x_data,y_data)
plt.ion() # keep plot running
plt.show() # block=True

# start running
for i in range(1000):
    sess.run(train_step, feed_dict={xs: x_data, ys: y_data})
    if i%50 == 0:
        print(i, sess.run(loss, feed_dict={xs: x_data, ys: y_data}))
        if len(ax.lines) > 0: # clear previous line
            # ax.lines.remove(lines[0])
            ax.lines.pop(0)
        prediction_value = sess.run(prediction, feed_dict={xs: x_data})
        lines = ax.plot(x_data, prediction_value, 'r-', lw=5) # plot predict data
        plt.pause(0.5)

# keep last plot open
plt.ioff()
plt.show()