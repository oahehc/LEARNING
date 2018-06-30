import alg_application4_provided
import alg_project4_solution as student

import string
alphabet = list(string.ascii_lowercase) + list(string.ascii_uppercase)
scoring_matrix = student.build_scoring_matrix(alphabet, 2, 1, 0)

def check_spelling(checked_word, dist, word_list):
    """
    input: word, target distance, and word list
    output: return a subset of word list which the distance between input word < target distance
    """
    result = set()
    x = len(checked_word)
    for item in word_list:
        y = len(item)
        if abs(x-y)<=dist:
            alignment_matrix = student.compute_alignment_matrix(checked_word, item, scoring_matrix, True)
            score = max(map(max,alignment_matrix))
            if (x+y-score)<=dist:
                result = result.union(set([item]))
    return result
    

WORD_LIST_URL = "http://storage.googleapis.com/codeskulptor-assets/assets_scrabble_words3.txt"
word_list = alg_application4_provided.read_words(WORD_LIST_URL)

import time, itertools 		
tStart = time.time() 	
a = check_spelling("humble", 1, word_list)
tStop = time.time()
print (tStop - tStart) 
print a	

tStart = time.time() 	
b = check_spelling("firefly", 2, word_list)
tStop = time.time() 	
print (tStop - tStart) 
print b