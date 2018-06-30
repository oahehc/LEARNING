'''
operate data by session
'''
import tensorflow as tf

# matrix1 = tf.constant([[3,3]])
# matrix2 = tf.constant([[2],[2]])
# product = tf.matmul(matrix1,matrix2) # matrix multiply, like np.dot(m1,m2)

# with tf.Session() as sess: # use with for auto close sesson, sess.close()
#     result = sess.run(product)
#     print(result)


'''
variable
'''
# state = tf.Variable(0, name='counter') # def var with name and initial value=0
# print(state.name) # counter:0
# one = tf.constant(1)

# new_value = tf.add(state, one) # add variable and constant
# update = tf.assign(state, new_value)
# init = tf.initialize_all_variables() # initial variable
# with tf.Session() as sess:
#     sess.run(init) # execute init
#     for _ in range(3):
#         sess.run(update) # execute update 3 time
#         print(sess.run(state)) # print state variable


'''
placeholder for create function
'''
input1 = tf.placeholder(tf.float32)
input2 = tf.placeholder(tf.float32)
output = input1 * input2 # create multiply function
with tf.Session() as sess:
    print(sess.run(output, feed_dict={input1: [7.], input2: [2.]}))

