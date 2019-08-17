letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

dict = ['camp', 'damp', 'lamp', 'like', 'lime', 'limp', 'ramp', ]

print(letters[10])
print(letters[3])
print(letters[19])

firstWord = "damp"
lastWord = "like"

def tryNewWord1(firstWord):   
    newWordEnd = firstWord[1:]
    newWord = findNewWord1(newWordEnd)
    
def tryNewWord2(firstWord):  
    newWordStart = firstWord[0:1]
    newWordEnd = firstWord[2:]
    newWord = findNewWord1(newWordStart, newWordEnd)

def findNewWord1(end):
    for i in range(26): 
        maybe = letters[i] + end
        print(maybe)
        if maybe in dict:
            print( maybe, "found in dictionary")
			
tryNewWord1(firstWord)
