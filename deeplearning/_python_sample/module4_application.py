"""
Algorithm module4 application
"""
import alg_application4_provided
import alg_project4_solution as student

# URLs for data files
PAM50_URL = "http://storage.googleapis.com/codeskulptor-alg/alg_PAM50.txt"
HUMAN_EYELESS_URL = "http://storage.googleapis.com/codeskulptor-alg/alg_HumanEyelessProtein.txt"
FRUITFLY_EYELESS_URL = "http://storage.googleapis.com/codeskulptor-alg/alg_FruitflyEyelessProtein.txt"
CONSENSUS_PAX_URL = "http://storage.googleapis.com/codeskulptor-alg/alg_ConsensusPAXDomain.txt"
WORD_LIST_URL = "http://storage.googleapis.com/codeskulptor-assets/assets_scrabble_words3.txt"

def seq_compare(seq_x,seq_y):
    """
    input : two sequence with same length
    output : same and difference char number and percentage (same,diff,percentage of same char)
    """
    if len(seq_x) != len(seq_y):
        print "error : two sequence must have same length"
    else:
        list_x = list(seq_x)
        list_y = list(seq_y)
        same = 0
        diff = 0
        for i in range(len(list_x)):
            if list_x[i] == list_y[i]:
                same += 1
            else:
                diff += 1
        percentage = float(same)/float(len(list_x))
        result = (same,diff,percentage)
        return result
        
        
####################################################################################################################################################
# question1
"""
human = alg_application4_provided.read_protein(HUMAN_EYELESS_URL)
fruitfly = alg_application4_provided.read_protein(FRUITFLY_EYELESS_URL)
scoringMatrix = alg_application4_provided.read_scoring_matrix(PAM50_URL)
alignment_matrix = student.compute_alignment_matrix(human, fruitfly, scoringMatrix, False)
local_alignment = student.compute_local_alignment(human, fruitfly, scoringMatrix, alignment_matrix)
print local_alignment

score = 875 
human     = 'HSGVNQLGGVFVNGRPLPDSTRQKIVELAHSGARPCDISRILQVSNGCVSKILGRYYETGSIRPRAIGGSKPRVATPEVVSKIAQYKRECPSIFAWEIRDRLLSEGVCTNDNIPSVSSINRVLRNLASEK-QQ'
fluit_fly = 'HSGVNQLGGVFVGGRPLPDSTRQKIVELAHSGARPCDISRILQVSNGCVSKILGRYYETGSIRPRAIGGSKPRVATAEVVSKISQYKRECPSIFAWEIRDRLLQENVCTNDNIPSVSSINRVLRNLAAQKEQQ'
"""

####################################################################################################################################################
# question2
"""
human     = 'HSGVNQLGGVFVNGRPLPDSTRQKIVELAHSGARPCDISRILQVSNGCVSKILGRYYETGSIRPRAIGGSKPRVATPEVVSKIAQYKRECPSIFAWEIRDRLLSEGVCTNDNIPSVSSINRVLRNLASEKQQ'
fluit_fly = 'HSGVNQLGGVFVGGRPLPDSTRQKIVELAHSGARPCDISRILQVSNGCVSKILGRYYETGSIRPRAIGGSKPRVATAEVVSKISQYKRECPSIFAWEIRDRLLQENVCTNDNIPSVSSINRVLRNLAAQKEQQ'
scoringMatrix = alg_application4_provided.read_scoring_matrix(PAM50_URL)
consensus = alg_application4_provided.read_protein(CONSENSUS_PAX_URL)
alignment_matrix = student.compute_alignment_matrix(human, consensus, scoringMatrix, True)
human_global_alignment = student.compute_global_alignment(human, consensus, scoringMatrix, alignment_matrix)
alignment_matrix = student.compute_alignment_matrix(fluit_fly, consensus, scoringMatrix, True)
fluit_fly_global_alignment = student.compute_global_alignment(fluit_fly, consensus, scoringMatrix, alignment_matrix)

print human_global_alignment
print fluit_fly_global_alignment

human
(613, 
'-HSGVNQLGGVFVNGRPLPDSTRQKIVELAHSGARPCDISRILQVSNGCVSKILGRYYETGSIRPRAIGGSKPRVATPEVVSKIAQYKRECPSIFAWEIRDRLLSEGVCTNDNIPSVSSINRVLRNLASEKQQ', 
'GHGGVNQLGGVFVNGRPLPDVVRQRIVELAHQGVRPCDISRQLRVSHGCVSKILGRYYETGSIKPGVIGGSKPKVATPKVVEKIAEYKRQNPTMFAWEIRDRLLAERVCDNDTVPSVSSINRIIR--------')
fluit_fly
(586, 
'-HSGVNQLGGVFVGGRPLPDSTRQKIVELAHSGARPCDISRILQVSNGCVSKILGRYYETGSIRPRAIGGSKPRVATAEVVSKISQYKRECPSIFAWEIRDRLLQENVCTNDNIPSVSSINRVLRNLAAQKEQQ', 
'GHGGVNQLGGVFVNGRPLPDVVRQRIVELAHQGVRPCDISRQLRVSHGCVSKILGRYYETGSIKPGVIGGSKPKVATPKVVEKIAEYKRQNPTMFAWEIRDRLLAERVCDNDTVPSVSSINRIIR---------')

print seq_compare(human_global_alignment[1],human_global_alignment[2])
print seq_compare(fluit_fly_global_alignment[1],fluit_fly_global_alignment[2])
"""

####################################################################################################################################################
# question3
"""
human = alg_application4_provided.read_protein(HUMAN_EYELESS_URL)
scoringMatrix = alg_application4_provided.read_scoring_matrix(PAM50_URL)
testString = "ACBEDGFIHKMLNQPSRTWVYXZ"
alignment_matrix = student.compute_alignment_matrix(human, testString, scoringMatrix, False)
local_alignment = student.compute_local_alignment(human, testString, scoringMatrix, alignment_matrix)
print local_alignment

(32, 'RMLNGQTG-SW', 'KMLN-QPSRTW')


human = "RMLNGQTGSW"
test = "KMLNQPSRTW"
scoringMatrix = alg_application4_provided.read_scoring_matrix(PAM50_URL)
consensus = alg_application4_provided.read_protein(CONSENSUS_PAX_URL)
alignment_matrix = student.compute_alignment_matrix(human, consensus, scoringMatrix, True)
human_global_alignment = student.compute_global_alignment(human, consensus, scoringMatrix, alignment_matrix)
alignment_matrix = student.compute_alignment_matrix(test, consensus, scoringMatrix, True)
test_global_alignment = student.compute_global_alignment(test, consensus, scoringMatrix, alignment_matrix)

print human_global_alignment
print test_global_alignment
print seq_compare(human_global_alignment[1],human_global_alignment[2])
print seq_compare(test_global_alignment[1],test_global_alignment[2])
(8, 117, 0.064)
(7, 118, 0.056)
"""


####################################################################################################################################################
# question4
import random
def generate_null_distribution(seq_x, seq_y, scoring_matrix, num_trials):
    """
    input : two sequences, scoring matrix and number of trial
    output : dictionary of scoring_distribution
    """
    dict = {}
    test = 1
    seq_list = list(seq_y)
    while test < num_trials:
        # shuffle seq y
        random.shuffle(seq_list)
        rand_y = ''.join(seq_list)
        
        # local alignment of seq_x and rand_y
        alignment_matrix = student.compute_alignment_matrix(seq_x, rand_y, scoring_matrix, False)
        local_alignment = student.compute_local_alignment(seq_x, rand_y, scoring_matrix, alignment_matrix)
        
        # add score to dict
        dict[test] = local_alignment[0]
        
        # update test time
        test += 1

    return dict   

"""
human = alg_application4_provided.read_protein(HUMAN_EYELESS_URL)
fruitfly = alg_application4_provided.read_protein(FRUITFLY_EYELESS_URL)
scoringMatrix = alg_application4_provided.read_scoring_matrix(PAM50_URL)
score_distribution = generate_null_distribution(human, fruitfly, scoringMatrix, 1000)

print score_distribution
print score_distribution.keys()
print score_distribution.values()

value = [49, 50, 51, 48, 48, 53, 50, 51, 52, 56, 51, 46, 51, 42, 46, 69, 47, 44, 58, 57, 49, 86, 56, 59, 47, 60, 38, 50, 44, 45, 41, 48, 67, 50, 49, 60, 49, 42, 64, 48, 45, 49, 48, 51, 44, 52, 51, 42, 54, 58, 54, 48, 55, 47, 43, 44, 51, 50, 46, 48, 44, 59, 68, 49, 59, 49, 60, 48, 55, 49, 38, 50, 47, 45, 51, 43, 63, 52, 58, 58, 43, 52, 56, 58, 50, 68, 46, 55, 59, 53, 45, 55, 40, 48, 56, 47, 54, 41, 50, 56, 57, 52, 49, 41, 66, 43, 49, 59, 65, 49, 50, 55, 64, 47, 64, 49, 45, 59, 49, 62, 52, 48, 48, 55, 40, 54, 50, 50, 44, 55, 64, 44, 49, 53, 49, 54, 52, 55, 51, 67, 59, 70, 43, 56, 49, 44, 52, 53, 43, 53, 54, 53, 43, 49, 50, 45, 53, 54, 47, 44, 45, 50, 44, 53, 53, 50, 46, 52, 46, 56, 63, 50, 55, 54, 54, 52, 53, 58, 44, 41, 45, 74, 44, 49, 47, 48, 47, 46, 60, 56, 52, 45, 49, 42, 51, 53, 47, 63, 42, 56, 61, 50, 56, 47, 48, 46, 48, 48, 45, 44, 42, 48, 45, 44, 45, 49, 49, 49, 57, 64, 50, 48, 45, 47, 52, 45, 52, 46, 78, 48, 47, 59, 58, 57, 54, 50, 53, 48, 50, 43, 48, 49, 50, 49, 67, 60, 48, 49, 63, 48, 44, 60, 51, 66, 54, 50, 65, 56, 53, 47, 50, 53, 48, 57, 46, 45, 47, 52, 49, 52, 53, 46, 50, 63, 50, 43, 61, 52, 52, 50, 54, 48, 52, 52, 47, 56, 45, 45, 49, 48, 50, 46, 45, 50, 46, 43, 45, 62, 43, 65, 52, 53, 51, 51, 55, 64, 51, 50, 61, 53, 45, 61, 52, 61, 46, 51, 50, 83, 44, 41, 48, 68, 52, 54, 45, 64, 52, 51, 48, 43, 53, 49, 45, 50, 57, 53, 74, 51, 57, 61, 45, 48, 59, 52, 47, 67, 50, 44, 58, 47, 44, 44, 53, 49, 45, 74, 48, 47, 57, 55, 54, 50, 72, 52, 63, 57, 54, 48, 61, 50, 56, 50, 57, 52, 56, 46, 47, 50, 48, 78, 70, 57, 48, 59, 51, 43, 55, 53, 49, 50, 46, 54, 55, 41, 47, 51, 55, 51, 49, 43, 65, 64, 57, 53, 44, 50, 56, 66, 49, 60, 58, 49, 61, 55, 48, 44, 59, 48, 56, 48, 45, 51, 57, 43, 48, 50, 50, 47, 54, 47, 52, 61, 60, 45, 58, 45, 59, 49, 43, 43, 55, 39, 42, 48, 46, 59, 58, 62, 48, 41, 54, 47, 52, 49, 54, 53, 56, 45, 49, 51, 54, 45, 48, 62, 56, 48, 47, 65, 42, 43, 43, 64, 52, 69, 49, 52, 46, 45, 60, 46, 52, 46, 55, 46, 50, 53, 45, 44, 44, 50, 56, 49, 61, 52, 52, 61, 43, 48, 61, 49, 49, 49, 41, 56, 57, 46, 53, 57, 58, 67, 46, 48, 57, 48, 48, 51, 52, 58, 48, 46, 53, 50, 55, 60, 46, 50, 56, 50, 51, 43, 47, 49, 51, 66, 52, 44, 51, 46, 56, 57, 52, 52, 54, 54, 59, 61, 67, 66, 48, 52, 54, 50, 44, 47, 56, 58, 48, 59, 46, 54, 49, 58, 48, 54, 43, 46, 51, 71, 51, 45, 51, 45, 56, 57, 48, 49, 53, 56, 59, 44, 49, 56, 47, 46, 55, 44, 55, 50, 45, 46, 52, 58, 53, 53, 52, 46, 67, 46, 43, 53, 61, 49, 50, 58, 52, 48, 52, 49, 52, 53, 55, 54, 58, 59, 45, 47, 54, 52, 51, 52, 51, 43, 46, 58, 47, 42, 58, 54, 54, 52, 51, 55, 57, 48, 49, 46, 45, 47, 48, 42, 54, 48, 55, 47, 56, 52, 39, 57, 58, 44, 43, 64, 57, 58, 57, 43, 61, 46, 53, 53, 49, 55, 49, 46, 55, 56, 45, 57, 53, 57, 50, 60, 76, 50, 42, 60, 56, 47, 54, 53, 51, 79, 45, 54, 56, 56, 47, 56, 56, 54, 50, 54, 66, 63, 71, 42, 67, 51, 55, 60, 45, 52, 56, 50, 57, 61, 45, 49, 45, 49, 53, 46, 43, 63, 54, 48, 49, 48, 54, 55, 51, 45, 58, 51, 45, 66, 52, 55, 47, 63, 46, 50, 52, 45, 47, 50, 47, 45, 57, 63, 50, 53, 46, 45, 52, 54, 39, 54, 48, 52, 53, 60, 54, 64, 46, 61, 57, 46, 53, 45, 48, 48, 43, 52, 42, 65, 45, 63, 47, 65, 47, 50, 49, 46, 56, 52, 48, 43, 48, 64, 45, 50, 47, 45, 44, 45, 49, 57, 49, 53, 45, 58, 53, 57, 50, 44, 56, 58, 55, 57, 51, 42, 41, 51, 48, 44, 52, 45, 56, 55, 48, 55, 54, 54, 47, 47, 74, 46, 50, 45, 52, 47, 46, 67, 65, 55, 63, 73, 51, 59, 47, 55, 51, 51, 43, 52, 63, 55, 45, 51, 61, 50, 48, 44, 73, 49, 46, 49, 47, 56, 41, 59, 46, 77, 56, 54, 50, 50, 51, 69, 53, 50, 52, 53, 52, 56, 52, 47, 49, 58, 52, 51, 49, 42, 45, 45, 55, 52, 42, 42, 55, 57, 47, 55, 59, 57, 66, 86, 45, 53, 50, 46, 61, 57, 50, 50, 47, 48, 53, 48,59, 56, 52, 50, 44, 52, 48, 50, 54, 47, 48, 47, 45, 63, 58, 61, 45, 62, 46, 45, 56, 44, 63, 41, 51, 50, 53, 45, 48, 68, 46, 57, 55, 48, 45, 54, 44, 61, 40, 48, 65, 55, 46, 54, 50, 56, 48, 63, 50, 56, 46, 49, 40, 53, 68, 54, 53, 52, 58, 41, 47, 54, 47, 44, 42, 54, 48, 52, 57, 57, 47, 45, 52, 50, 60, 55, 44, 61, 49, 66, 50, 45, 44, 51, 46, 59, 54, 48, 48, 52, 59, 55, 61, 52, 56, 58, 64, 53, 45]
from collections import Counter
print Counter(value)

Counter = {48: 74, 50: 72, 52: 69, 45: 66, 49: 62, 47: 53, 46: 52, 53: 49, 54: 49, 51: 46, 56: 45, 55: 41, 44: 38, 57: 36, 43: 30, 58: 29, 59: 23, 61: 23, 42: 18, 63: 16, 60: 15, 64: 13, 41: 12, 65: 9, 66: 9, 67: 9, 62: 5, 68: 5, 40: 4, 74: 4, 39: 3, 69: 3, 38: 2, 70: 2, 71: 2, 73: 2, 78: 2, 86: 2, 72: 1, 76: 1, 77: 1, 79: 1, 83: 1}
print Counter.keys()
print Counter.values()

import matplotlib.pyplot as plt

xaxis = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 76, 77, 78, 79, 83, 86]
yaxis = [2, 3, 4, 12, 18, 30, 38, 66, 52, 53, 74, 62, 72, 46, 69, 49, 49, 41, 45, 36, 29, 23, 15, 23, 5, 16, 13, 9, 9, 9, 5, 3, 2, 2, 1, 2, 4, 1, 1, 2, 1, 1,2]

fig, ax = plt.subplots()
rects1 = ax.bar(xaxis, yaxis, 0.35, color='r')


# add some text for labels, title and axes ticks
ax.set_xlabel('Scores')
ax.set_ylabel('total trials')
ax.set_title('generate_null_distribution')


def autolabel(rects):
    # attach some text labels
    for rect in rects:
        height = rect.get_height()
        ax.text(rect.get_x() + rect.get_width()/2., 1.05*height,
                '%d' % int(height),
                ha='center', va='bottom')

autolabel(rects1)

plt.show()
"""


####################################################################################################################################################
# question5
value = [49, 50, 51, 48, 48, 53, 50, 51, 52, 56, 51, 46, 51, 42, 46, 69, 47, 44, 58, 57, 49, 86, 56, 59, 47, 60, 38, 50, 44, 45, 41, 48, 67, 50, 49, 60, 49, 42, 64, 48, 45, 49, 48, 51, 44, 52, 51, 42, 54, 58, 54, 48, 55, 47, 43, 44, 51, 50, 46, 48, 44, 59, 68, 49, 59, 49, 60, 48, 55, 49, 38, 50, 47, 45, 51, 43, 63, 52, 58, 58, 43, 52, 56, 58, 50, 68, 46, 55, 59, 53, 45, 55, 40, 48, 56, 47, 54, 41, 50, 56, 57, 52, 49, 41, 66, 43, 49, 59, 65, 49, 50, 55, 64, 47, 64, 49, 45, 59, 49, 62, 52, 48, 48, 55, 40, 54, 50, 50, 44, 55, 64, 44, 49, 53, 49, 54, 52, 55, 51, 67, 59, 70, 43, 56, 49, 44, 52, 53, 43, 53, 54, 53, 43, 49, 50, 45, 53, 54, 47, 44, 45, 50, 44, 53, 53, 50, 46, 52, 46, 56, 63, 50, 55, 54, 54, 52, 53, 58, 44, 41, 45, 74, 44, 49, 47, 48, 47, 46, 60, 56, 52, 45, 49, 42, 51, 53, 47, 63, 42, 56, 61, 50, 56, 47, 48, 46, 48, 48, 45, 44, 42, 48, 45, 44, 45, 49, 49, 49, 57, 64, 50, 48, 45, 47, 52, 45, 52, 46, 78, 48, 47, 59, 58, 57, 54, 50, 53, 48, 50, 43, 48, 49, 50, 49, 67, 60, 48, 49, 63, 48, 44, 60, 51, 66, 54, 50, 65, 56, 53, 47, 50, 53, 48, 57, 46, 45, 47, 52, 49, 52, 53, 46, 50, 63, 50, 43, 61, 52, 52, 50, 54, 48, 52, 52, 47, 56, 45, 45, 49, 48, 50, 46, 45, 50, 46, 43, 45, 62, 43, 65, 52, 53, 51, 51, 55, 64, 51, 50, 61, 53, 45, 61, 52, 61, 46, 51, 50, 83, 44, 41, 48, 68, 52, 54, 45, 64, 52, 51, 48, 43, 53, 49, 45, 50, 57, 53, 74, 51, 57, 61, 45, 48, 59, 52, 47, 67, 50, 44, 58, 47, 44, 44, 53, 49, 45, 74, 48, 47, 57, 55, 54, 50, 72, 52, 63, 57, 54, 48, 61, 50, 56, 50, 57, 52, 56, 46, 47, 50, 48, 78, 70, 57, 48, 59, 51, 43, 55, 53, 49, 50, 46, 54, 55, 41, 47, 51, 55, 51, 49, 43, 65, 64, 57, 53, 44, 50, 56, 66, 49, 60, 58, 49, 61, 55, 48, 44, 59, 48, 56, 48, 45, 51, 57, 43, 48, 50, 50, 47, 54, 47, 52, 61, 60, 45, 58, 45, 59, 49, 43, 43, 55, 39, 42, 48, 46, 59, 58, 62, 48, 41, 54, 47, 52, 49, 54, 53, 56, 45, 49, 51, 54, 45, 48, 62, 56, 48, 47, 65, 42, 43, 43, 64, 52, 69, 49, 52, 46, 45, 60, 46, 52, 46, 55, 46, 50, 53, 45, 44, 44, 50, 56, 49, 61, 52, 52, 61, 43, 48, 61, 49, 49, 49, 41, 56, 57, 46, 53, 57, 58, 67, 46, 48, 57, 48, 48, 51, 52, 58, 48, 46, 53, 50, 55, 60, 46, 50, 56, 50, 51, 43, 47, 49, 51, 66, 52, 44, 51, 46, 56, 57, 52, 52, 54, 54, 59, 61, 67, 66, 48, 52, 54, 50, 44, 47, 56, 58, 48, 59, 46, 54, 49, 58, 48, 54, 43, 46, 51, 71, 51, 45, 51, 45, 56, 57, 48, 49, 53, 56, 59, 44, 49, 56, 47, 46, 55, 44, 55, 50, 45, 46, 52, 58, 53, 53, 52, 46, 67, 46, 43, 53, 61, 49, 50, 58, 52, 48, 52, 49, 52, 53, 55, 54, 58, 59, 45, 47, 54, 52, 51, 52, 51, 43, 46, 58, 47, 42, 58, 54, 54, 52, 51, 55, 57, 48, 49, 46, 45, 47, 48, 42, 54, 48, 55, 47, 56, 52, 39, 57, 58, 44, 43, 64, 57, 58, 57, 43, 61, 46, 53, 53, 49, 55, 49, 46, 55, 56, 45, 57, 53, 57, 50, 60, 76, 50, 42, 60, 56, 47, 54, 53, 51, 79, 45, 54, 56, 56, 47, 56, 56, 54, 50, 54, 66, 63, 71, 42, 67, 51, 55, 60, 45, 52, 56, 50, 57, 61, 45, 49, 45, 49, 53, 46, 43, 63, 54, 48, 49, 48, 54, 55, 51, 45, 58, 51, 45, 66, 52, 55, 47, 63, 46, 50, 52, 45, 47, 50, 47, 45, 57, 63, 50, 53, 46, 45, 52, 54, 39, 54, 48, 52, 53, 60, 54, 64, 46, 61, 57, 46, 53, 45, 48, 48, 43, 52, 42, 65, 45, 63, 47, 65, 47, 50, 49, 46, 56, 52, 48, 43, 48, 64, 45, 50, 47, 45, 44, 45, 49, 57, 49, 53, 45, 58, 53, 57, 50, 44, 56, 58, 55, 57, 51, 42, 41, 51, 48, 44, 52, 45, 56, 55, 48, 55, 54, 54, 47, 47, 74, 46, 50, 45, 52, 47, 46, 67, 65, 55, 63, 73, 51, 59, 47, 55, 51, 51, 43, 52, 63, 55, 45, 51, 61, 50, 48, 44, 73, 49, 46, 49, 47, 56, 41, 59, 46, 77, 56, 54, 50, 50, 51, 69, 53, 50, 52, 53, 52, 56, 52, 47, 49, 58, 52, 51, 49, 42, 45, 45, 55, 52, 42, 42, 55, 57, 47, 55, 59, 57, 66, 86, 45, 53, 50, 46, 61, 57, 50, 50, 47, 48, 53, 48,59, 56, 52, 50, 44, 52, 48, 50, 54, 47, 48, 47, 45, 63, 58, 61, 45, 62, 46, 45, 56, 44, 63, 41, 51, 50, 53, 45, 48, 68, 46, 57, 55, 48, 45, 54, 44, 61, 40, 48, 65, 55, 46, 54, 50, 56, 48, 63, 50, 56, 46, 49, 40, 53, 68, 54, 53, 52, 58, 41, 47, 54, 47, 44, 42, 54, 48, 52, 57, 57, 47, 45, 52, 50, 60, 55, 44, 61, 49, 66, 50, 45, 44, 51, 46, 59, 54, 48, 48, 52, 59, 55, 61, 52, 56, 58, 64, 53, 45]
average = sum(value)/len(value)

import math
sd = 0
for item in value:
    sd += math.pow((item - average), 2)
sd = math.pow((sd/len(value)),0.5)

score = 875 
z_score = (score-average)/sd
"""
51
7.00886040124
117.565474675
"""


####################################################################################################################################################
# question8

"""
"""
import string
alphabet = list(string.ascii_lowercase) + list(string.ascii_uppercase)
scoring_matrix = student.build_scoring_matrix(alphabet, 2, 1, 0)

def check_spelling(checked_word, dist, word_list):
    """
    input: word, target distance, and word list
    output: return a subset of word list which the distance between input word < target distance
    """
    result = set()
    for item in word_list:
        alignment_matrix = student.compute_alignment_matrix(checked_word, item, scoring_matrix, True)
        global_alignment = student.compute_global_alignment(checked_word, item, scoring_matrix, alignment_matrix)
        """
        print word_list[index]
        print alignment_matrix
        print global_alignment
        """
        if (len(checked_word)+len(item)-global_alignment[0])<=dist:
            result = result.union(set([item]))
    return result
    

WORD_LIST_URL = "http://storage.googleapis.com/codeskulptor-assets/assets_scrabble_words3.txt"
word_list = alg_application4_provided.read_words(WORD_LIST_URL)
a = check_spelling("humble", 1, word_list)
b = check_spelling("firefly", 2, word_list)
print a
print b

set(['bumble', 'humbled', 'tumble', 'humble', 'rumble', 'humbler', 'humbles', 'fumble', 'humbly', 'jumble', 'mumble'])
set(['firefly', 'tiredly', 'freely', 'fireclay', 'direly', 'finely', 'firstly', 'liefly', 'fixedly', 'refly', 'firmly'])