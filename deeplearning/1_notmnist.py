# IMPORT MODULE
from __future__ import print_function # to bring the print function from Python 3 into Python 2.6+.
import matplotlib.pyplot as plt # plot data for visualize
import numpy as np # for operate data
import os # check path and file
import sys # print data wo buffer
import tarfile # extract file
from IPython.display import display, Image # display image
from scipy import ndimage # read image file
from sklearn.linear_model import LogisticRegression # excute logistic regression
from six.moves.urllib.request import urlretrieve # download data by url
from six.moves import cPickle as pickle # save data to dist
%matplotlib inline # Config the matplotlib backend as plotting inline in IPython

# DOWNLOAD IMAGE
url = 'http://commondatastorage.googleapis.com/books1000/'
last_percent_reported = None
data_root = '.' # Change me to store data elsewhere
def download_progress_hook(count, blockSize, totalSize):
    """Report download progress."""
    global last_percent_reported
    percent = int(count * blockSize * 100 / totalSize)
    if last_percent_reported != percent:
        if percent % 5 == 0:
            sys.stdout.write("%s%%" % percent) # print wo buffering, can be changed to print('xxx', flush=true)
            sys.stdout.flush()
    else:
        sys.stdout.write(".")
        sys.stdout.flush()
    last_percent_reported = percent
        
def maybe_download(filename, expected_bytes, force=False):
    """Download a file if not present, and make sure it's the right size."""
    dest_filename = os.path.join(data_root, filename) # setting file path
    if force or not os.path.exists(dest_filename): # check is file path exist
        print('Attempting to download:', filename) 
        filename, _ = urlretrieve(url + filename, dest_filename, reporthook=download_progress_hook)
        print('\nDownload Complete!')
    statinfo = os.stat(dest_filename)
    if statinfo.st_size == expected_bytes: # check download file size
        print('Found and verified', dest_filename)
    else:
        raise Exception('Failed to verify ' + dest_filename + '. Can you get to it with a browser?')
    return dest_filename

train_filename = maybe_download('notMNIST_large.tar.gz', 247336696)
test_filename = maybe_download('notMNIST_small.tar.gz', 8458043)


# EXTRACT DOWNLOAD FILE
num_classes = 10
np.random.seed(133)
def maybe_extract(filename, force=False):
    root = os.path.splitext(os.path.splitext(filename)[0])[0]  # remove .tar.gz
    if os.path.isdir(root) and not force: # check if dir is exist
        print('%s already present - Skipping extraction of %s.' % (root, filename))
    else:
        print('Extracting data for %s. This may take a while. Please wait.' % root)
        tar = tarfile.open(filename) # extract file
        sys.stdout.flush()
        tar.extractall(data_root)
        tar.close()
    data_folders = [
        os.path.join(root, d) for d in sorted(os.listdir(root))
        if os.path.isdir(os.path.join(root, d))] # check dir number in target folder, should have 10 dir from A to J
    if len(data_folders) != num_classes:
        raise Exception('Expected %d folders, one per class. Found %d instead.' % (num_classes, len(data_folders)))
    print(data_folders)
    return data_folders

train_folders = maybe_extract(train_filename)
# ['./notMNIST_large/A', './notMNIST_large/B', './notMNIST_large/C', './notMNIST_large/D', './notMNIST_large/E', './notMNIST_large/F', './notMNIST_large/G', './notMNIST_large/H', './notMNIST_large/I', './notMNIST_large/J']
test_folders = maybe_extract(test_filename)
# ['./notMNIST_small/A', './notMNIST_small/B', './notMNIST_small/C', './notMNIST_small/D', './notMNIST_small/E', './notMNIST_small/F', './notMNIST_small/G', './notMNIST_small/H', './notMNIST_small/I', './notMNIST_small/J']


# PROBLEM_1 : display image which are download and extract before
# for file in os.listdir("./notMNIST_small/B"):
#     print(file)
Image("./notMNIST_small/B/SGFsYnN0YXJrZSBQaWNhLnR0Zg==.png")
currentDisplay = 0
maxDisplay = 20
path = "./notMNIST_small/I"
for file in os.listdir(path):
    filePath = path +'/'+ file
    print(filePath)
    img = Image(filePath)
    display(img)
    currentDisplay += 1
    if currentDisplay > maxDisplay:
        break


# convert dataset into a 3D array (image index, x, y)
image_size = 28  # Pixel width and height.
pixel_depth = 255.0  # Number of levels per pixel.
def load_letter(folder, min_num_images):
    """Load the data for a single letter label."""
    image_files = os.listdir(folder)
    dataset = np.ndarray(shape=(len(image_files), image_size, image_size), dtype=np.float32) # create 3D array for each letter (image_num * 28 * 28)
    print(folder)
    num_images = 0
    for image in image_files:
        image_file = os.path.join(folder, image)
        try:
            image_data = (ndimage.imread(image_file).astype(float) - pixel_depth / 2) / pixel_depth # read image and normalize
            if image_data.shape != (image_size, image_size): # check image size
                raise Exception('Unexpected image shape: %s' % str(image_data.shape))
            dataset[num_images, :, :] = image_data
            num_images = num_images + 1
        except IOError as e:
            print('Could not read:', image_file, ':', e, '- it\'s ok, skipping.')
    dataset = dataset[0:num_images, :, :] # ???
    if num_images < min_num_images: # check final loading image number
        raise Exception('Many fewer images than expected: %d < %d' %(num_images, min_num_images))
    print('Full dataset tensor:', dataset.shape)
    print('Mean:', np.mean(dataset))
    print('Standard deviation:', np.std(dataset))
    return dataset
        
def maybe_pickle(data_folders, min_num_images_per_class, force=False):
    dataset_names = []
    for folder in data_folders:
        set_filename = folder + '.pickle' # use filename.pickle for dataset name
        dataset_names.append(set_filename)
        if os.path.exists(set_filename) and not force:
            print('%s already present - Skipping pickling.' % set_filename)
        else:
            print('Pickling %s.' % set_filename)
            dataset = load_letter(folder, min_num_images_per_class) # translate image data to 3D array
        try:
            with open(set_filename, 'wb') as f: # save data to file
            pickle.dump(dataset, f, pickle.HIGHEST_PROTOCOL)
        except Exception as e:
            print('Unable to save data to', set_filename, ':', e)
    return dataset_names

train_datasets = maybe_pickle(train_folders, 45000)
# ['./notMNIST_large/A.pickle', './notMNIST_large/B.pickle', './notMNIST_large/C.pickle', './notMNIST_large/D.pickle', './notMNIST_large/E.pickle', './notMNIST_large/F.pickle', './notMNIST_large/G.pickle', './notMNIST_large/H.pickle', './notMNIST_large/I.pickle', './notMNIST_large/J.pickle']
test_datasets = maybe_pickle(test_folders, 1800)
# ['./notMNIST_small/A.pickle', './notMNIST_small/B.pickle', './notMNIST_small/C.pickle', './notMNIST_small/D.pickle', './notMNIST_small/E.pickle', './notMNIST_small/F.pickle', './notMNIST_small/G.pickle', './notMNIST_small/H.pickle', './notMNIST_small/I.pickle', './notMNIST_small/J.pickle']


# PROBLEM_2 : plot image dataset
with open('./notMNIST_small/A.pickle', 'rb') as f:
    try:  
        imageDataset = pickle.load(f)
        # print(imageDataset[0])
        plotArray = imageDataset[0]
        plt.imshow(plotArray)
        plt.show()
    except EOFError: 
        print(None)

# PROBLEM_3 : check data balanced across classes
def showDatasetSize(datasets):
    for dataset in datasets:
        print(dataset, os.stat(dataset).st_size)
showDatasetSize(train_datasets)
showDatasetSize(test_datasets)


# clone data from dataset
def make_arrays(nb_rows, img_size):
    if nb_rows:
        dataset = np.ndarray((nb_rows, img_size, img_size), dtype=np.float32) # create 3D array base on input size for dataset
        labels = np.ndarray(nb_rows, dtype=np.int32) # create array base on input size for data labels
    else:
        dataset, labels = None, None
    return dataset, labels

def merge_datasets(pickle_files, train_size, valid_size=0):
    num_classes = len(pickle_files)
    valid_dataset, valid_labels = make_arrays(valid_size, image_size)
    train_dataset, train_labels = make_arrays(train_size, image_size)
    vsize_per_class = valid_size // num_classes
    tsize_per_class = train_size // num_classes
        
    start_v, start_t = 0, 0
    end_v, end_t = vsize_per_class, tsize_per_class
    end_l = vsize_per_class+tsize_per_class
    for label, pickle_file in enumerate(pickle_files): # go through .pickle file
        try:
            with open(pickle_file, 'rb') as f:
                letter_set = pickle.load(f)
                np.random.shuffle(letter_set) # shuffle the letters to have random validation and training set
                if valid_dataset is not None: # clone valid data from dataset
                    valid_letter = letter_set[:vsize_per_class, :, :] # clone 0 ~ per_class data
                    valid_dataset[start_v:end_v, :, :] = valid_letter
                    valid_labels[start_v:end_v] = label # set label for record class (0~9 = A~J)
                    start_v += vsize_per_class
                    end_v += vsize_per_class
                        
                train_letter = letter_set[vsize_per_class:end_l, :, :] # clone training data from dataset, clone next range
                train_dataset[start_t:end_t, :, :] = train_letter
                train_labels[start_t:end_t] = label
                start_t += tsize_per_class
                end_t += tsize_per_class
        except Exception as e:
            print('Unable to process data from', pickle_file, ':', e)
            raise
    return valid_dataset, valid_labels, train_dataset, train_labels
            
train_size = 200000
valid_size = 10000
test_size = 10000
valid_dataset, valid_labels, train_dataset, train_labels = merge_datasets(train_datasets, train_size, valid_size)
_, _, test_dataset, test_labels = merge_datasets(test_datasets, test_size)
print('Training:', train_dataset.shape, train_labels.shape)
print('Validation:', valid_dataset.shape, valid_labels.shape)
print('Testing:', test_dataset.shape, test_labels.shape)

def randomize(dataset, labels):
    permutation = np.random.permutation(labels.shape[0]) # create random order array base on dateset size
    shuffled_dataset = dataset[permutation,:,:] # base on order, shuffle original data
    shuffled_labels = labels[permutation]
    return shuffled_dataset, shuffled_labels
train_dataset, train_labels = randomize(train_dataset, train_labels)
test_dataset, test_labels = randomize(test_dataset, test_labels)
valid_dataset, valid_labels = randomize(valid_dataset, valid_labels)

# PROBLEM_4
print('Training:', train_dataset.shape, train_labels.shape)
print('Validation:', valid_dataset.shape, valid_labels.shape)
print('Testing:', test_dataset.shape, test_labels.shape)



pickle_file = os.path.join(data_root, 'notMNIST.pickle') # create file to save data which been processing(clone + shuffle)
try:
    f = open(pickle_file, 'wb')
    save = {
        'train_dataset': train_dataset,
        'train_labels': train_labels,
        'valid_dataset': valid_dataset,
        'valid_labels': valid_labels,
        'test_dataset': test_dataset,
        'test_labels': test_labels,
        }
    pickle.dump(save, f, pickle.HIGHEST_PROTOCOL)
    f.close()
except Exception as e:
    print('Unable to save data to', pickle_file, ':', e)
    raise

statinfo = os.stat(pickle_file) # check data size
print('Compressed pickle size:', statinfo.st_size)


# PROBLEM_5 : check overlap data
def checkOverlap(datasetA, labelA, datasetB, labelB):
    # print('setA:', datasetA.shape, labelA.shape)
    # print('setB:', datasetB.shape, labelB.shape)
    overlapAmount = 0
    for indexA, classA in enumerate(labelA):
        for indexB, classB in enumerate(labelB):
            if classA == classB:
                if np.array_equal(datasetA[indexA],datasetB[indexB]):
                    overlapAmount += 1
                    plt.imshow(datasetA[indexA])
                    plt.show()
                    print(classA,indexA,indexB,overlapAmount)
    return overlapAmount

f = open(os.path.join(data_root, 'notMNIST.pickle'), 'rb')
data_new = pickle.load(f)
print('TEST_VALID:')
overlap_test_valid = checkOverlap(data_new['test_dataset'], data_new['test_labels'], data_new['valid_dataset'], data_new['valid_labels'])
print('TEST_TRAIN:')
overlap_test_train = checkOverlap(data_new['test_dataset'], data_new['test_labels'], data_new['train_dataset'], data_new['train_labels'])
print('VALID_TRAIN:')
overlap_valid_train = checkOverlap(data_new['valid_dataset'], data_new['valid_labels'], data_new['train_dataset'], data_new['train_labels'])


# PROBLEM_5(OPTIONS) : ???
# - What about near duplicates between datasets? (images that are almost identical)
# - Create a sanitized validation and test set, and compare your accuracy on those in subsequent assignments.


# PROBLEM_6 : use logistic regression to training model
f = open(os.path.join(data_root, 'notMNIST.pickle'), 'rb')
data_new = pickle.load(f)
# use training data to train model
# Training: (20000, 28, 28) (20000,)
# Validation / Testing: (1000, 28, 28) (1000,)
train_dataset_new = data_new['train_dataset'].reshape(20000,784)
lr = LogisticRegression()
lr.fit(train_dataset_new, data_new['train_labels'])

test_dataset_new = data_new['test_dataset'].reshape(1000,784)
# test training result
for index in range(30):
    testResult = lr.predict_proba(test_dataset_new[index].reshape(1, -1))
    answerIndex = data_new['test_labels'][index]
    resultProp = np.around(testResult[0][answerIndex], decimals=5)
    # print('answer', data_new['test_labels'][index])
    print('result prop', resultProp)
    if resultProp < 0.6:
        print('prop arr',np.around(testResult[0], decimals=3))
        plt.imshow(data_new['test_dataset'][index])
        plt.show()
    print('-----')

# check total loss for training result
from sklearn.metrics import log_loss
test_dataset_new = data_new['test_dataset'].reshape(1000,784)
testResult = lr.predict_proba(test_dataset_new)
loss = log_loss(data_new['test_labels'],testResult)
print(loss)
valid_dataset_new = data_new['valid_dataset'].reshape(1000,784)
validResult = lr.predict_proba(valid_dataset_new)
loss = log_loss(data_new['valid_labels'],validResult)
print(loss)

# check score
test_dataset_new = data_new['test_dataset'].reshape(1000,784)
score = lr.score(test_dataset_new, data_new['test_labels'])
print('test score: ',score)
valid_dataset_new = data_new['valid_dataset'].reshape(1000,784)
score = lr.score(valid_dataset_new, data_new['valid_labels'])
print('valid score: ',score)