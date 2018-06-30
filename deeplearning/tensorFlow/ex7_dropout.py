'''
use dropout to prevent overfitting
'''
import tensorflow as tf
from sklearn.datasets import load_digits
from sklearn.cross_validation import train_test_split
from sklearn.preprocessing import LabelBinarizer
# load data
digits = load_digits()
X = digits.data
y = digits.target
y = LabelBinarizer().fit_transform(y)
X_train, X_test, y_train, y_test = train_test_split(X,y,test_size=.3)

def add_layer(inputs, in_size, out_size, n_layer, activation_function=None):
    layer_name = 'Layer{0}'.format(n_layer)
    with tf.name_scope(layer_name):
        Weights = tf.Variable(tf.random_normal([in_size,out_size]))
        biases = tf.Variable(tf.zeros([1, out_size]) + 0.1)
        Wx_plus_b = tf.matmul(inputs, Weights) + biases
        Wx_plus_b = tf.nn.dropout(Wx_plus_b, keep_prob) # dropout result
        if activation_function is None:
            outputs = Wx_plus_b
        else:
            outputs = activation_function(Wx_plus_b)
        tf.summary.histogram('outputs', outputs)
        return outputs

keep_prob = tf.placeholder(tf.float32) # set dropout percentage
xs = tf.placeholder(tf.float32,[None, 64]) # input data(image) = 8*8
ys = tf.placeholder(tf.float32,[None, 10]) # output data 0~9

# create layer
L1 = add_layer(xs, 64, 50, n_layer=1, activation_function=tf.nn.tanh)
prediction = add_layer(L1, 50, 10, n_layer=2, activation_function=tf.nn.softmax)

cross_entropy = tf.reduce_mean(-tf.reduce_sum(ys*tf.log(prediction), reduction_indices=[1]))
tf.summary.scalar('loss', cross_entropy)
train_step = tf.train.GradientDescentOptimizer(0.6).minimize(cross_entropy)
sess = tf.Session()
merged = tf.summary.merge_all()
sess.run(tf.global_variables_initializer())

# write graph to logs folder
train_writer = tf.summary.FileWriter('logs/train', graph=sess.graph)
test_writer = tf.summary.FileWriter('logs/test', graph=sess.graph)

# start trainning
for i in range(501):
    sess.run(train_step, feed_dict={xs:X_train,ys:y_train,keep_prob:0.5}) # dropout 50% result for prevent overfitting
    if i%50 == 0:
        train_result = sess.run(merged, feed_dict={xs:X_train, ys:y_train,keep_prob:1})
        test_result = sess.run(merged, feed_dict={xs:X_test, ys:y_test,keep_prob:1})
        train_writer.add_summary(train_result, i)
        test_writer.add_summary(test_result, i)
