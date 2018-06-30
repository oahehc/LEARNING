'''
https://www.tensorflow.org/get_started/mnist/beginners
'''
import tensorflow as tf
from tensorflow.examples.tutorials.mnist import input_data # import mnist data

mnist = input_data.read_data_sets('MNIST_data', one_hot=True) # read mnist data

def add_layer(inputs, in_size, out_size, n_layer, activation_function=None):
    layer_name = 'Layer{0}'.format(n_layer)
    with tf.name_scope(layer_name):
        Weights = tf.Variable(tf.random_normal([in_size,out_size]))
        biases = tf.Variable(tf.zeros([1, out_size]) + 0.1)
        Wx_plus_b = tf.matmul(inputs, Weights) + biases
        if activation_function is None:
            outputs = Wx_plus_b
        else:
            outputs = activation_function(Wx_plus_b)
        return outputs
def compute_accuracy(validate_x, validate_y):
    global prediction
    y_pre = sess.run(prediction, feed_dict={xs: validate_x}) # use preduction & validate input to generate predict output
    correct_prediction = tf.equal(tf.argmax(y_pre,1), tf.argmax(validate_y,1)) # compare predict ouput and validate output
    accuracy = tf.reduce_mean(tf.cast(correct_prediction, tf.float32)) # adjust data type then calculate mean
    result = sess.run(accuracy, feed_dict={xs: validate_x, ys: validate_y})
    return result


xs = tf.placeholder(tf.float32,[None, 784], name='x_input') # input data(image) = 28*28 = 784
ys = tf.placeholder(tf.float32,[None, 10], name='y_input') # output data 0~9
prediction = add_layer(xs, 784, 10, n_layer=1, activation_function=tf.nn.softmax) # use softmax
cross_entropy = tf.reduce_mean(-tf.reduce_sum(ys*tf.log(prediction), reduction_indices=[1])) # use cross entropy
train_step = tf.train.GradientDescentOptimizer(0.5).minimize(cross_entropy)
sess = tf.Session()

sess.run(tf.initialize_all_variables())
for i in range(1001):
    batch_xs, batch_ys = mnist.train.next_batch(100) # get 100 data from mnist
    sess.run(train_step, feed_dict={xs: batch_xs, ys: batch_ys})
    if i%50 == 0:
        print(i, compute_accuracy(mnist.test.images, mnist.test.labels)) # use test data to check current accuracy