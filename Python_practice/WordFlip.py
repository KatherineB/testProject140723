letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

dict = ['camp', 'damp', 'lamp', 'like', 'lime', 'limp','lump', 'ramp', ]

#print(letters[10])
#print(letters[3])
#print(letters[19])

firstWord = "damp"
lastWord = "like"

def tryNewWord1(firstWord):   
    newWordEnd = firstWord[1:]
    newWord = findNewWord1(newWordEnd)
    
def tryNewWord2(firstWord):  
    newWordStart = firstWord[0:1]
    newWordEnd = firstWord[2:]
    newWord = findNewWord1(newWordStart, newWordEnd)

#def findNewWord1(end):
    #for i in range(26): 
       # maybe = letters[i] + end
        #print(maybe)
        #if maybe in dict and lastWord[0:1] == maybe[0:1]:
            #print(maybe[0:1])
            #print( maybe, "is best prospect")
			
def findWord2(firstWord):
    currentWordEnd = firstWord[1:]
    wordsFound = 0
    prospectFound = False
    for i in range(26): 
        maybe = letters[i] + currentWordEnd
        #print(maybe)
        if maybe in dict and lastWord[0:1] == maybe[0:1]:    
            wordsFound = wordsFound + 1
            prospectFound = True	
            prospect = maybe			
            print(wordsFound, " words found")
            print(prospectFound, "that prospect has been found")
            print( maybe, "is best prospect")
    if prospectFound:
        result = prospect
    else:
        result = "none"
    print("lastword=", lastWord)
    print(lastWord[0:1])
    return result
	
def findWord3(word2):
    currentWordStart = word2[0:1]
    currentWordEnd = word2[2:]
    wordsFound = 0
    prospectFound = False
    for i in range(26): 
        maybe = currentWordStart + letters[i] + currentWordEnd
        #print(maybe)
        if maybe in dict and lastWord[1:2] == maybe[1:2]:    
            wordsFound = wordsFound + 1
            prospectFound = True	
            prospect = maybe			
            print(wordsFound, " words found")
            print(prospectFound, "that prospect has been found")
            print( maybe, "is best prospect")
    if prospectFound:
        result = prospect
    else:
        result = "none"
    print("lastword=", lastWord)
    print(lastWord[0:1])
    print(lastWord[1:2])
    return result
			
			
#tryNewWord1(firstWord)

word2 = findWord2(firstWord)

print(word2)

print("---------------------")

word3 = findWord3(word2)

print(word3)



