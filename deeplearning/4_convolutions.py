# These are all the modules we'll be using later. Make sure you can import them
# before proceeding further.
from __future__ import print_function
import numpy as np
import tensorflow as tf
from six.moves import cPickle as pickle
from six.moves import range

# load pickle file which created in exercise 1
pickle_file = 'notMNIST.pickle'
with open(pickle_file, 'rb') as f:
    save = pickle.load(f)
    train_dataset = save['train_dataset']
    train_labels = save['train_labels']
    valid_dataset = save['valid_dataset']
    valid_labels = save['valid_labels']
    test_dataset = save['test_dataset']
    test_labels = save['test_labels']
    del save  # hint to help gc free up memory
    print('Training set', train_dataset.shape, train_labels.shape)
    print('Validation set', valid_dataset.shape, valid_labels.shape)
    print('Test set', test_dataset.shape, test_labels.shape)
# Training set (200000, 28, 28) (200000,)
# Validation set (10000, 28, 28) (10000,)
# Test set (10000, 28, 28) (10000,)

image_size = 28
num_labels = 10  # a ~ j
num_channels = 1  # grayscale


def reformat(dataset, labels):
    dataset = dataset.reshape(
        (-1, image_size, image_size, num_channels)).astype(np.float32)
    labels = (np.arange(num_labels) == labels[:, None]).astype(np.float32)
    return dataset, labels


train_dataset, train_labels = reformat(train_dataset, train_labels)
valid_dataset, valid_labels = reformat(valid_dataset, valid_labels)
test_dataset, test_labels = reformat(test_dataset, test_labels)
print('Training set', train_dataset.shape, train_labels.shape)
print('Validation set', valid_dataset.shape, valid_labels.shape)
print('Test set', test_dataset.shape, test_labels.shape)
# Training set (200000, 28, 28, 1) (200000, 10)
# Validation set (10000, 28, 28, 1) (10000, 10)
# Test set (10000, 28, 28, 1) (10000, 10)

# check how many max prediction match answer


def accuracy(predictions, labels):
    return (100.0 * np.sum(np.argmax(predictions, 1) == np.argmax(labels, 1)) / predictions.shape[0])


# create model
batch_size = 16  # data number for each traning
patch_size = 5
depth = 16
num_hidden = 64
graph = tf.Graph()
with graph.as_default():
    # Input data.
    tf_train_dataset = tf.placeholder(tf.float32, shape=(
        batch_size, image_size, image_size, num_channels))  # input = 16, 28*28, 1
    tf_train_labels = tf.placeholder(tf.float32, shape=(
        batch_size, num_labels))  # result = 16, 10
    # transfer valid data to tf constant
    tf_valid_dataset = tf.constant(valid_dataset)
    # transfer test data to tf constant
    tf_test_dataset = tf.constant(test_dataset)

    # Variables.
    # layer1 : 28*28*1 -> 14*14*16
    # use truncated normal distribution for weight, zero for biases
    # patch = 5*5, depth 1->16, stride 2, same padding 
    layer1_weights = tf.Variable(tf.truncated_normal(
        [patch_size, patch_size, num_channels, depth], stddev=0.1))
    layer1_biases = tf.Variable(tf.zeros([depth]))
    # layer2 : 14*14*16 -> 7*7*16
    # use truncated normal distribution for weight, 1.0 for biases
    # patch = 5*5 depth 16->16, stride 2, same padding 
    layer2_weights = tf.Variable(tf.truncated_normal([patch_size, patch_size, depth, depth], stddev=0.1))
    layer2_biases = tf.Variable(tf.constant(1.0, shape=[depth]))
    # layer3 : 7*7*16 -> 64(num_hidden)
    # size / 4 because 2 convolution with stride 2 & same padding
    layer3_weights = tf.Variable(tf.truncated_normal([image_size // 4 * image_size // 4 * depth, num_hidden], stddev=0.1))
    layer3_biases = tf.Variable(tf.constant(1.0, shape=[num_hidden]))
    # layer4 (for classify) : 64 -> 10
    layer4_weights = tf.Variable(tf.truncated_normal([num_hidden, num_labels], stddev=0.1))
    layer4_biases = tf.Variable(tf.constant(1.0, shape=[num_labels]))

    # Model.
    def model(data):
        # stride 2 with same padding
        conv = tf.nn.conv2d(data, layer1_weights, [1, 2, 2, 1], padding='SAME')
        hidden = tf.nn.relu(conv + layer1_biases)
        # stride 2 with same padding
        conv = tf.nn.conv2d(hidden, layer2_weights, [1, 2, 2, 1], padding='SAME')
        hidden = tf.nn.relu(conv + layer2_biases)
        shape = hidden.get_shape().as_list() # http://stackoverflow.com/questions/40666316/how-to-get-tensorflow-tensor-dimensions-shape-as-int-values
        reshape = tf.reshape(hidden, [shape[0], shape[1] * shape[2] * shape[3]]) # flatter data
        hidden = tf.nn.relu(tf.matmul(reshape, layer3_weights) + layer3_biases)
        return tf.matmul(hidden, layer4_weights) + layer4_biases

    # Training computation.
    logits = model(tf_train_dataset)
    loss = tf.reduce_mean(tf.nn.softmax_cross_entropy_with_logits(
        labels=tf_train_labels, logits=logits))

    # Optimizer.
    optimizer = tf.train.GradientDescentOptimizer(0.05).minimize(loss)

    # Predictions for the training, validation, and test data.
    train_prediction = tf.nn.softmax(logits)
    valid_prediction = tf.nn.softmax(model(tf_valid_dataset))
    test_prediction = tf.nn.softmax(model(tf_test_dataset))


num_steps = 1001
with tf.Session(graph=graph) as session:
    tf.global_variables_initializer().run()
    print('Initialized')
    for step in range(num_steps):
        offset = (step * batch_size) % (train_labels.shape[0] - batch_size)
        batch_data = train_dataset[offset:(offset + batch_size), :, :, :]
        batch_labels = train_labels[offset:(offset + batch_size), :]
        feed_dict = {tf_train_dataset: batch_data, tf_train_labels: batch_labels}
        _, l, predictions = session.run([optimizer, loss, train_prediction], feed_dict=feed_dict)
        if (step % 50 == 0):
            print('Minibatch loss at step %d: %f' % (step, l))
            print('Minibatch accuracy: %.1f%%' % accuracy(predictions, batch_labels))
            print('Validation accuracy: %.1f%%' % accuracy(valid_prediction.eval(), valid_labels))
    print('Test accuracy: %.1f%%' % accuracy(test_prediction.eval(), test_labels))




# Problem 1 : Replace the strides by a max pooling operation (nn.max_pool()) of stride 2 and kernel size 2.
batch_size = 4  # data number for each traning
patch_size = 5
depth = 4
num_hidden = 32
graph = tf.Graph()
with graph.as_default():
    # Input data.
    tf_train_dataset = tf.placeholder(tf.float32, shape=(batch_size, image_size, image_size, num_channels))  # input = 16, 28*28, 1
    tf_train_labels = tf.placeholder(tf.float32, shape=(batch_size, num_labels))  # result = 16, 10
    # transfer valid data to tf constant
    tf_valid_dataset = tf.constant(valid_dataset)
    # transfer test data to tf constant
    tf_test_dataset = tf.constant(test_dataset)

    # Variables.
    # layer1 : 
    # use truncated normal distribution for weight, zero for biases
    layer1_weights = tf.Variable(tf.truncated_normal(
        [patch_size, patch_size, num_channels, depth], stddev=0.1))
    layer1_biases = tf.Variable(tf.zeros([depth]))
    # layer2 : 
    # use truncated normal distribution for weight, 1.0 for biases
    layer2_weights = tf.Variable(tf.truncated_normal([patch_size, patch_size, depth, depth], stddev=0.1))
    layer2_biases = tf.Variable(tf.constant(1.0, shape=[depth]))
    # layer3 :
    # size / 4 because 2 convolution with stride 2 & same padding
    layer3_weights = tf.Variable(tf.truncated_normal([image_size // 4 * image_size // 4 * depth, num_hidden], stddev=0.1))
    layer3_biases = tf.Variable(tf.constant(1.0, shape=[num_hidden]))
    # layer4 (for classify) : 
    layer4_weights = tf.Variable(tf.truncated_normal([num_hidden, num_labels], stddev=0.1))
    layer4_biases = tf.Variable(tf.constant(1.0, shape=[num_labels]))

    # Model.
    def model(data):
        # stride 2 with same padding
        print('ORIGINAL', data.shape);
        conv = tf.nn.conv2d(data, layer1_weights, [1, 1, 1, 1], padding='SAME')
        print('LAYER1 conv', conv.shape);
        conv_pool = tf.nn.max_pool(conv, ksize=[1, 2, 2, 1], strides=[1, 2, 2, 1], padding='SAME')
        print('LAYER1 pooling', conv_pool.shape);
        hidden = tf.nn.relu(conv_pool + layer1_biases)
        # stride 2 with same padding
        conv = tf.nn.conv2d(hidden, layer2_weights, [1, 1,1, 1], padding='SAME')
        conv_pool = tf.nn.max_pool(conv, ksize=[1, 2, 2, 1], strides=[1, 2, 2, 1], padding='SAME')
        hidden = tf.nn.relu(conv_pool + layer2_biases)
        shape = hidden.get_shape().as_list() # http://stackoverflow.com/questions/40666316/how-to-get-tensorflow-tensor-dimensions-shape-as-int-values
        reshape = tf.reshape(hidden, [shape[0], shape[1] * shape[2] * shape[3]]) # flatter data
        hidden = tf.nn.relu(tf.matmul(reshape, layer3_weights) + layer3_biases)
        return tf.matmul(hidden, layer4_weights) + layer4_biases

    # Training computation.
    logits = model(tf_train_dataset)
    loss = tf.reduce_mean(tf.nn.softmax_cross_entropy_with_logits(labels=tf_train_labels, logits=logits))

    # Optimizer.
    optimizer = tf.train.GradientDescentOptimizer(0.05).minimize(loss)

    # Predictions for the training, validation, and test data.
    train_prediction = tf.nn.softmax(logits)
    valid_prediction = tf.nn.softmax(model(tf_valid_dataset))
    test_prediction = tf.nn.softmax(model(tf_test_dataset))

num_steps = 501
with tf.Session(graph=graph) as session:
    tf.global_variables_initializer().run()
    print('Initialized')
    for step in range(num_steps):
        offset = (step * batch_size) % (train_labels.shape[0] - batch_size)
        batch_data = train_dataset[offset:(offset + batch_size), :, :, :]
        batch_labels = train_labels[offset:(offset + batch_size), :]
        feed_dict = {tf_train_dataset: batch_data, tf_train_labels: batch_labels}
        _, l, predictions = session.run([optimizer, loss, train_prediction], feed_dict=feed_dict)
        if (step % 50 == 0):
            print('Minibatch loss at step %d: %f' % (step, l))
            print('Minibatch accuracy: %.1f%%' % accuracy(predictions, batch_labels))
            print('Validation accuracy: %.1f%%' % accuracy(valid_prediction.eval(), valid_labels))
    print('Test accuracy: %.1f%%' % accuracy(test_prediction.eval(), test_labels))

