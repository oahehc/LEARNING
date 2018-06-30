from __future__ import print_function
import numpy as np
import tensorflow as tf
from six.moves import cPickle as pickle

pickle_file = 'notMNIST.pickle'

# load dataset
with open(pickle_file, 'rb') as f:
    save = pickle.load(f)
    train_dataset = save['train_dataset']
    train_labels = save['train_labels']
    valid_dataset = save['valid_dataset']
    valid_labels = save['valid_labels']
    test_dataset = save['test_dataset']
    test_labels = save['test_labels']
    del save  # hint to help gc free up memory

# format adjust
image_size = 28
num_labels = 10
def reformat(dataset, labels):
    dataset = dataset.reshape((-1, image_size * image_size)).astype(np.float32)
    # Map 1 to [0.0, 1.0, 0.0 ...], 2 to [0.0, 0.0, 1.0 ...]
    labels = (np.arange(num_labels) == labels[:,None]).astype(np.float32)
    return dataset, labels
train_dataset, train_labels = reformat(train_dataset, train_labels)
valid_dataset, valid_labels = reformat(valid_dataset, valid_labels)
test_dataset, test_labels = reformat(test_dataset, test_labels)

def accuracy(predictions, labels):
    return (100.0 * np.sum(np.argmax(predictions, 1) == np.argmax(labels, 1)) / predictions.shape[0])


# PROBLEM1: apply L2 regularization, reference: http://www.cnblogs.com/hellocwh/p/5527141.html
## linear model
batch_size = 128
graph = tf.Graph()
with graph.as_default():
    # Input data. For the training data, we use a placeholder that will be fed
    # at run time with a training minibatch.
    tf_train_dataset = tf.placeholder(tf.float32, shape=(batch_size, image_size * image_size))
    tf_train_labels = tf.placeholder(tf.float32, shape=(batch_size, num_labels))
    tf_valid_dataset = tf.constant(valid_dataset)
    tf_test_dataset = tf.constant(test_dataset)
    # initial weight, biase
    weights = tf.Variable(tf.truncated_normal([image_size * image_size, num_labels]))
    biases = tf.Variable(tf.zeros([num_labels]))
    # Training computation.
    logits = tf.matmul(tf_train_dataset, weights) + biases
    # apply L2 regularization
    beta = 0.001 # define by ourself
    l2_loss = tf.nn.l2_loss(weights)
    loss = tf.reduce_mean(tf.nn.softmax_cross_entropy_with_logits(labels=tf_train_labels, logits=logits)) + beta*l2_loss
    optimizer = tf.train.GradientDescentOptimizer(0.5).minimize(loss)
    # Predictions for the training, validation, and test data.
    train_prediction = tf.nn.softmax(logits)
    valid_prediction = tf.nn.softmax(tf.matmul(tf_valid_dataset, weights) + biases)
    test_prediction = tf.nn.softmax(tf.matmul(tf_test_dataset, weights) + biases)

num_steps = 3001
with tf.Session(graph=graph) as session:
    tf.global_variables_initializer().run()
    print("Initialized")
    for step in range(num_steps):
        # Pick a random offset (let offset+batch_size < train_labels size)
        offset = (step * batch_size) % (train_labels.shape[0] - batch_size)
        # Generate a minibatch.
        batch_data = train_dataset[offset:(offset + batch_size), :]
        batch_labels = train_labels[offset:(offset + batch_size), :]
        # Prepare a dictionary telling the session where to feed the minibatch.
        # The key of the dictionary is the placeholder node of the graph to be fed,
        # and the value is the numpy array to feed to it.
        feed_dict = {tf_train_dataset : batch_data, tf_train_labels : batch_labels}
        _, l, predictions = session.run([optimizer, loss, train_prediction], feed_dict=feed_dict)
        if (step % 500 == 0):
            print("Minibatch loss at step %d: %f" % (step, l))
            print("Minibatch accuracy: %.1f%%" % accuracy(predictions, batch_labels))
            print("Validation accuracy: %.1f%%" % accuracy(valid_prediction.eval(), valid_labels))
    print("Test accuracy: %.1f%%" % accuracy(test_prediction.eval(), test_labels))
## original result
# Minibatch loss at step 3000: 1.017092
# Minibatch accuracy: 73.4%
# Validation accuracy: 74.4%
# Test accuracy: 84.8%
## new result
# Minibatch loss at step 3000: 0.916161
# Minibatch accuracy: 74.2%
# Validation accuracy: 78.5%
# Test accuracy: 88.2%

## 2-layer neural network
batch_size = 128
graph = tf.Graph()
with graph.as_default():
    # Input data. For the training data, we use a placeholder that will be fed
    # at run time with a training minibatch.
    tf_train_dataset = tf.placeholder(tf.float32, shape=(batch_size, image_size * image_size))
    tf_train_labels = tf.placeholder(tf.float32, shape=(batch_size, num_labels))
    tf_valid_dataset = tf.constant(valid_dataset)
    tf_test_dataset = tf.constant(test_dataset)
    # layer1: 784 => 1024 + relu
    node_num = 1024
    weights1 = tf.Variable(tf.truncated_normal([image_size * image_size, node_num]))
    biases1 = tf.Variable(tf.zeros([node_num]))
    layer1 = tf.nn.relu(tf.matmul(tf_train_dataset, weights1) + biases1)
    # layer2 : 1024 => 10
    weights2 = tf.Variable(tf.truncated_normal([node_num, num_labels]))
    biases2 = tf.Variable(tf.zeros([num_labels]))
    logits = tf.matmul(layer1, weights2) + biases2

    # apply L2 regularization
    beta = 0.001 # define by ourself
    l2_loss = tf.nn.l2_loss(weights1) + tf.nn.l2_loss(weights2)
    loss = tf.reduce_mean(tf.nn.softmax_cross_entropy_with_logits(labels=tf_train_labels, logits=logits)) + beta*l2_loss
    optimizer = tf.train.GradientDescentOptimizer(0.5).minimize(loss)
    # Predictions for the training, validation, and test data.
    train_prediction = tf.nn.softmax(logits)
    valid_prediction = tf.nn.softmax(tf.matmul(tf.nn.relu(tf.matmul(tf_valid_dataset, weights1) + biases1), weights2) + biases2)
    test_prediction = tf.nn.softmax(tf.matmul(tf.nn.relu(tf.matmul(tf_test_dataset, weights1) + biases1), weights2) + biases2)

num_steps = 3001
with tf.Session(graph=graph) as session:
    tf.global_variables_initializer().run()
    print("Initialized")
    for step in range(num_steps):
        offset = (step * batch_size) % (train_labels.shape[0] - batch_size)
        batch_data = train_dataset[offset:(offset + batch_size), :]
        batch_labels = train_labels[offset:(offset + batch_size), :]
        feed_dict = {tf_train_dataset : batch_data, tf_train_labels : batch_labels}
        _, l, predictions = session.run([optimizer, loss, train_prediction], feed_dict=feed_dict)
        if (step % 500 == 0):
            print("hidden layer loss at step %d: %f" % (step, l))
            print("hidden layer accuracy: %.1f%%" % accuracy(predictions, batch_labels))
            print("Validation accuracy: %.1f%%" % accuracy(valid_prediction.eval(), valid_labels))
    print("Test accuracy: %.1f%%" % accuracy(test_prediction.eval(), test_labels))
## original result
# hidden layer loss at step 3000: 0.218230
# hidden layer accuracy: 98.4%
# Validation accuracy: 80.3%
# Test accuracy: 88.3%
## new result
# hidden layer loss at step 3000: 15.506224
# hidden layer accuracy: 100.0%
# Validation accuracy: 82.8%
# Test accuracy: 90.9%


#PROBLEM2: overfitting
batch_size = 128
graph = tf.Graph()
with graph.as_default():
    # Input data. For the training data, we use a placeholder that will be fed
    # at run time with a training minibatch.
    tf_train_dataset = tf.placeholder(tf.float32, shape=(batch_size, image_size * image_size))
    tf_train_labels = tf.placeholder(tf.float32, shape=(batch_size, num_labels))
    tf_valid_dataset = tf.constant(valid_dataset)
    tf_test_dataset = tf.constant(test_dataset)
    # layer1: 784 => 1024 + relu
    node_num = 1024
    weights1 = tf.Variable(tf.truncated_normal([image_size * image_size, node_num]))
    biases1 = tf.Variable(tf.zeros([node_num]))
    layer1 = tf.nn.relu(tf.matmul(tf_train_dataset, weights1) + biases1)
    # layer2 : 1024 => 10
    weights2 = tf.Variable(tf.truncated_normal([node_num, num_labels]))
    biases2 = tf.Variable(tf.zeros([num_labels]))
    logits = tf.matmul(layer1, weights2) + biases2
    loss = tf.reduce_mean(tf.nn.softmax_cross_entropy_with_logits(labels=tf_train_labels, logits=logits))
    optimizer = tf.train.GradientDescentOptimizer(0.5).minimize(loss)
    # Predictions for the training, validation, and test data.
    train_prediction = tf.nn.softmax(logits)
    valid_prediction = tf.nn.softmax(tf.matmul(tf.nn.relu(tf.matmul(tf_valid_dataset, weights1) + biases1), weights2) + biases2)
    test_prediction = tf.nn.softmax(tf.matmul(tf.nn.relu(tf.matmul(tf_test_dataset, weights1) + biases1), weights2) + biases2)

# reduce training dataset size, to display overfitting result
train_dataset_small = train_dataset[:1000, :]
train_labels_small = train_labels[:1000, :]
num_steps = 3001
with tf.Session(graph=graph) as session:
    tf.global_variables_initializer().run()
    print("Initialized")
    for step in range(num_steps):
        offset = (step * batch_size) % (train_labels_small.shape[0] - batch_size)
        batch_data = train_dataset_small[offset:(offset + batch_size), :]
        batch_labels = train_labels_small[offset:(offset + batch_size), :]
        feed_dict = {tf_train_dataset : batch_data, tf_train_labels : batch_labels}
        _, l, predictions = session.run([optimizer, loss, train_prediction], feed_dict=feed_dict)
        if (step % 500 == 0):
            print("hidden layer loss at step %d: %f" % (step, l))
            print("hidden layer accuracy: %.1f%%" % accuracy(predictions, batch_labels))
            print("Validation accuracy: %.1f%%" % accuracy(valid_prediction.eval(), valid_labels))
    print("Test accuracy: %.1f%%" % accuracy(test_prediction.eval(), test_labels))
# hidden layer loss at step 3000: 0.000000
# hidden layer accuracy: 100.0%
# Validation accuracy: 76.8%
# Test accuracy: 83.3%

#PROBLEM3: Dropout
batch_size = 128
graph = tf.Graph()
with graph.as_default():
    # Input data. For the training data, we use a placeholder that will be fed
    # at run time with a training minibatch.
    tf_train_dataset = tf.placeholder(tf.float32, shape=(batch_size, image_size * image_size))
    tf_train_labels = tf.placeholder(tf.float32, shape=(batch_size, num_labels))
    tf_valid_dataset = tf.constant(valid_dataset)
    tf_test_dataset = tf.constant(test_dataset)
    # layer1: 784 => 1024 + relu
    node_num = 1024
    weights1 = tf.Variable(tf.truncated_normal([image_size * image_size, node_num]))
    biases1 = tf.Variable(tf.zeros([node_num]))
    layer1 = tf.nn.relu(tf.matmul(tf_train_dataset, tf.nn.dropout(weights1, 0.5)) + biases1) # apply dropout at layer1 for training data
    # layer2 : 1024 => 10
    weights2 = tf.Variable(tf.truncated_normal([node_num, num_labels]))
    biases2 = tf.Variable(tf.zeros([num_labels]))
    logits = tf.matmul(layer1, weights2) + biases2
    loss = tf.reduce_mean(tf.nn.softmax_cross_entropy_with_logits(labels=tf_train_labels, logits=logits))
    optimizer = tf.train.GradientDescentOptimizer(0.5).minimize(loss)
    # Predictions for the training, validation, and test data.
    train_prediction = tf.nn.softmax(logits)
    valid_prediction = tf.nn.softmax(tf.matmul(tf.nn.relu(tf.matmul(tf_valid_dataset, weights1) + biases1), weights2) + biases2)
    test_prediction = tf.nn.softmax(tf.matmul(tf.nn.relu(tf.matmul(tf_test_dataset, weights1) + biases1), weights2) + biases2)

# reduce training dataset size, to display overfitting result
train_dataset_small = train_dataset[:1000, :]
train_labels_small = train_labels[:1000, :]
num_steps = 3001
with tf.Session(graph=graph) as session:
    tf.global_variables_initializer().run()
    print("Initialized")
    for step in range(num_steps):
        offset = (step * batch_size) % (train_labels_small.shape[0] - batch_size)
        batch_data = train_dataset_small[offset:(offset + batch_size), :]
        batch_labels = train_labels_small[offset:(offset + batch_size), :]
        feed_dict = {tf_train_dataset : batch_data, tf_train_labels : batch_labels}
        _, l, predictions = session.run([optimizer, loss, train_prediction], feed_dict=feed_dict)
        if (step % 500 == 0):
            print("hidden layer loss at step %d: %f" % (step, l))
            print("hidden layer accuracy: %.1f%%" % accuracy(predictions, batch_labels))
            print("Validation accuracy: %.1f%%" % accuracy(valid_prediction.eval(), valid_labels))
    print("Test accuracy: %.1f%%" % accuracy(test_prediction.eval(), test_labels))
# hidden layer loss at step 3000: 0.000000
# hidden layer accuracy: 100.0%
# Validation accuracy: 74.9%
# Test accuracy: 86.4%


#PROBLEM4: get the best performance you can using a multi-layer model
batch_size = 128
graph = tf.Graph()
num_steps = 3001
keep_prob = 0.7
decay_rate = 0.95
learning_rate = 0.5
with graph.as_default():
    # Input data. For the training data, we use a placeholder that will be fed
    # at run time with a training minibatch.
    tf_train_dataset = tf.placeholder(tf.float32, shape=(batch_size, image_size * image_size))
    tf_train_labels = tf.placeholder(tf.float32, shape=(batch_size, num_labels))
    tf_valid_dataset = tf.constant(valid_dataset)
    tf_test_dataset = tf.constant(test_dataset)
    # layer1: 784 => 1024 + relu
    node_num = 1024
    weights1 = tf.Variable(tf.truncated_normal([image_size * image_size, node_num]))
    biases1 = tf.Variable(tf.zeros([node_num]))
    layer1 = tf.nn.relu(tf.matmul(tf_train_dataset, tf.nn.dropout(weights1, keep_prob)) + biases1) # apply dropout at layer1 for training data
    # layer2 : 1024 => 10
    weights2 = tf.Variable(tf.truncated_normal([node_num, num_labels]))
    biases2 = tf.Variable(tf.zeros([num_labels]))
    logits = tf.matmul(layer1, weights2) + biases2
    loss = tf.reduce_mean(tf.nn.softmax_cross_entropy_with_logits(labels=tf_train_labels, logits=logits))
    
    # apply learning rate decay
    global_step = tf.Variable(0)
    learning_rate = tf.train.exponential_decay(learning_rate=learning_rate, global_step=global_step, decay_steps=num_steps, decay_rate=decay_rate)
    optimizer = tf.train.GradientDescentOptimizer(learning_rate).minimize(loss, global_step=global_step)
    
    # Predictions for the training, validation, and test data.
    train_prediction = tf.nn.softmax(logits)
    valid_prediction = tf.nn.softmax(tf.matmul(tf.nn.relu(tf.matmul(tf_valid_dataset, weights1) + biases1), weights2) + biases2)
    test_prediction = tf.nn.softmax(tf.matmul(tf.nn.relu(tf.matmul(tf_test_dataset, weights1) + biases1), weights2) + biases2)

# reduce training dataset size, to display overfitting result
with tf.Session(graph=graph) as session:
    tf.global_variables_initializer().run()
    print("Initialized")
    for step in range(num_steps):
        offset = (step * batch_size) % (train_labels.shape[0] - batch_size)
        batch_data = train_dataset[offset:(offset + batch_size), :]
        batch_labels = train_labels[offset:(offset + batch_size), :]
        feed_dict = {tf_train_dataset : batch_data, tf_train_labels : batch_labels}
        _, l, predictions = session.run([optimizer, loss, train_prediction], feed_dict=feed_dict)
        if (step % 500 == 0):
            print("hidden layer loss at step %d: %f" % (step, l))
            print("hidden layer accuracy: %.1f%%" % accuracy(predictions, batch_labels))
            print("Validation accuracy: %.1f%%" % accuracy(valid_prediction.eval(), valid_labels))
    print("Test accuracy: %.1f%%" % accuracy(test_prediction.eval(), test_labels))
# hidden layer loss at step 3000: 14.532293
# hidden layer accuracy: 83.6%
# Validation accuracy: 80.6%
# Test accuracy: 88.4%