"""
Algorithm module4 project
"""
def build_scoring_matrix(alphabet, diag_score, off_diag_score, dash_score):
    """
    input : alphabet and score for three type
    return : scoring matrix
    scoring_matrix[row_char][col_char]
    """
    alphabetlist = list(alphabet)
    alphabetlist.append("-")
    scoring_matrix = {}
    for indexi in range(len(alphabetlist)):
        row = {}
        for indexj in range(len(alphabetlist)):
            if(alphabetlist[indexj]=="-" or alphabetlist[indexi]=="-"):
                row[alphabetlist[indexj]] = dash_score
            elif(alphabetlist[indexj] == alphabetlist[indexi]):
                row[alphabetlist[indexj]] = diag_score
            else:
                row[alphabetlist[indexj]] = off_diag_score
        scoring_matrix[alphabetlist[indexi]] = row
        
    return scoring_matrix

    
    
    
def compute_alignment_matrix(seq_x, seq_y, scoring_matrix, global_flag = True):
    """
    Compite Global Alignment Scores/Compite Local Alignment Scores
    input : two sequeces, scoring, flag for global or local
    output : alignment_matrix for max score in each subsequence
    alignment_matrix[row][col]
    """
    # setting for global or local
    if(global_flag == True):
        checkval = -float("inf")
    else:
        checkval = 0
        
    # set initial matrix    
    seq_x = list(seq_x)
    seq_y = list(seq_y)
    alignment_matrix = []
    for indexi in range(len(seq_x)+1):
        row = []
        for indexj in range(len(seq_y)+1):
            row.append(0)
        alignment_matrix.append(row)
    
    # set data for x=0 and y=0
    for indexi in range(len(seq_x)+1):
        for indexj in range(len(seq_y)+1):
            if(indexi==0 and indexj==0):
                alignment_matrix[indexi][indexj] = 0
            elif(indexi==0):
                alignment_matrix[indexi][indexj] = max((alignment_matrix[indexi][indexj-1] + scoring_matrix["-"][seq_y[indexj-1]]),checkval)
            elif(indexj==0):
                alignment_matrix[indexi][indexj] = max((alignment_matrix[indexi-1][indexj] + scoring_matrix[seq_x[indexi-1]]["-"]),checkval)
    
    # calculate and update content by dynamic programming 
    for indexi in range(1,len(seq_x)+1):
        for indexj in range(1,len(seq_y)+1):
            match = max((alignment_matrix[indexi-1][indexj-1] + scoring_matrix[seq_x[indexi-1]][seq_y[indexj-1]]),checkval)
            dashx = max((alignment_matrix[indexi][indexj-1] + scoring_matrix["-"][seq_y[indexj-1]]),checkval)
            dashy = max((alignment_matrix[indexi-1][indexj] + scoring_matrix[seq_x[indexi-1]]["-"]),checkval)
            alignment_matrix[indexi][indexj] = max(match,dashx,dashy)    
    return alignment_matrix
    
    
    
def compute_global_alignment(seq_x, seq_y, scoring_matrix, alignment_matrix):
    """
    Compute Alignment
    input: two sequence, scoring and alignment matrix
    output: (score, align_x, align_y)
    """
    # set initial 
    seq_x = list(seq_x)
    seq_y = list(seq_y)
    align_x = []
    align_y = []
    numx = len(seq_x)
    numy = len(seq_y)
    score = alignment_matrix[numx][numy]
    while numx!=0 and numy!=0:
        if alignment_matrix[numx][numy] == alignment_matrix[numx-1][numy-1] + scoring_matrix[seq_x[numx-1]][seq_y[numy-1]]:
            align_x.insert(0,seq_x[numx-1])
            align_y.insert(0,seq_y[numy-1])
            numx -= 1
            numy -= 1
        elif alignment_matrix[numx][numy] == alignment_matrix[numx][numy-1] + scoring_matrix["-"][seq_y[numy-1]]:
            align_x.insert(0,"-")
            align_y.insert(0,seq_y[numy-1])
            numy -= 1
        elif alignment_matrix[numx][numy] == alignment_matrix[numx-1][numy] + scoring_matrix[seq_x[numx-1]]["-"]:
            align_x.insert(0,seq_x[numx-1])
            align_y.insert(0,"-")
            numx -= 1
        else:
            print "error to find at (",numx,",",numy,")"
            break
    while numx!=0:
        align_x.insert(0,seq_x[numx-1])
        align_y.insert(0,"-")
        numx -= 1
    while numy!=0:
        align_x.insert(0,"-")
        align_y.insert(0,seq_y[numy-1])
        numy -= 1
        
    result = (score,''.join(align_x),''.join(align_y)) # convert list to string
    return result
    
    
    
def compute_local_alignment(seq_x, seq_y, scoring_matrix, alignment_matrix):
    """
    Compute Alignment
    input: two sequence, scoring and alignment matrix
    output: (score, align_x, align_y)
    """
    #get max number for multiple dimention list
    score = max(map(max,alignment_matrix))
    
    #get index for max score and revise seqx and seqy
    seq_x = list(seq_x)
    seq_y = list(seq_y)
    maxindex = [(index, row.index(score)) for index, row in enumerate(alignment_matrix) if score in row]
    seq_x = seq_x[0:maxindex[0][0]:1]
    seq_y = seq_y[0:maxindex[0][1]:1]    

    # set initial 
    align_x = []
    align_y = []
    numx = len(seq_x)
    numy = len(seq_y)
    while numx!=0 and numy!=0:
        if alignment_matrix[numx][numy] == 0:
            break
        elif alignment_matrix[numx][numy] == alignment_matrix[numx-1][numy-1] + scoring_matrix[seq_x[numx-1]][seq_y[numy-1]]:
            align_x.insert(0,seq_x[numx-1])
            align_y.insert(0,seq_y[numy-1])
            numx -= 1
            numy -= 1
        elif alignment_matrix[numx][numy] == alignment_matrix[numx][numy-1] + scoring_matrix["-"][seq_y[numy-1]]:
            align_x.insert(0,"-")
            align_y.insert(0,seq_y[numy-1])
            numy -= 1
        elif alignment_matrix[numx][numy] == alignment_matrix[numx-1][numy] + scoring_matrix[seq_x[numx-1]]["-"]:
            align_x.insert(0,seq_x[numx-1])
            align_y.insert(0,"-")
            numx -= 1
        else:
            print "error to find at (",numx,",",numy,")"
            break
    while numx!=0:
        if alignment_matrix[numx][numy] == 0:
            break
        else:
            align_x.insert(0,seq_x[numx-1])
            align_y.insert(0,"-")
            numx -= 1
    while numy!=0:
        if alignment_matrix[numx][numy] == 0:
            break
        else:
            align_x.insert(0,"-")
            align_y.insert(0,seq_y[numy-1])
            numy -= 1
        
    result = (score,''.join(align_x),''.join(align_y)) # convert list to string
    return result
    
    

###############################################################################################
"""
test zone
"""
def printDictMatrix(matrix):
    """
    input : matrix by dict
    oupt : print dict data by matrix appearance
    """
    indexs = matrix.keys()
    print " ",
    print matrix.keys()
    for i in range(len(matrix)):
        print indexs[i],
        print matrix[indexs[i]].values()
def printListMatrix(matrix):
    """
    input : matrix by dict
    oupt : print list data by matrix appearance
    """
    for i in range(len(matrix)):
        print matrix[i]
        
     
"""   
alphabet = set(["A","C","T","G"])
diag_score = 6
off_diag_score = 2
dash_score = -4
scoring_matrix = build_scoring_matrix(alphabet, diag_score, off_diag_score, dash_score)
print "scoring_matrix"
print scoring_matrix
printDictMatrix(scoring_matrix)
print

seq_x = "ATG"
seq_y = "ACG"
global_flag = False
alignment_matrix = compute_alignment_matrix(seq_x, seq_y, scoring_matrix, global_flag)
print "alignment_matrix"
print alignment_matrix
printListMatrix(alignment_matrix)
print

global_alignment = compute_global_alignment(seq_x, seq_y, scoring_matrix, alignment_matrix)
print global_alignment
print


local_alignment = compute_local_alignment(seq_x, seq_y, scoring_matrix, alignment_matrix)
print local_alignment
print
"""










