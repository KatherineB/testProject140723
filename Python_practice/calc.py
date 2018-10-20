import sys

itemList = []
newList = []
oldList = []
partList = []
partList5 = []
inputString = ""
usableString = ""
interimString5 = ""
result = ""
place = 0
factor = 0

def calculate(op, ex1, ex2):
    #print "in calcul"
   # print op
    #print ex1
    #print ex2
    if op == "add":
        answer = int(ex1) + int(ex2)
        return str(answer)
    elif op == "multiply":
        answer = int(ex1) * int(ex2)
        return str(answer)
    else:
        return "An error has occurred in the calculate function."

def combineSet(oldList):
    place = 0
    factor = 0
    length = len(oldList)
    print len(oldList)
    newList = []
    while place < length-1:
        print place
        if oldList[place].isdigit() and oldList[place+1][0].isdigit():
            print "in if"
            trim1 = removeBrackets(oldList[place-1])
            trim3 = removeBrackets(oldList[place+1])
            number = calculate(trim1,oldList[place],trim3)
            newList.pop()
            newList.append(number)
            factor = factor + 2
            if (place + factor) < length:
                newList.append(oldList[place+factor])        
        else:
            print "in else"
           # print place+factor
           # print len(oldList)
            if (place + factor) < length:
                newList.append(oldList[place+factor])
            
        place = place + 1
    """
    
    place = 0
    factor = 0
    oldList = newList
    length = len(oldList)
    print len(oldList)
    newList = []
    print len(newList)
    while place < length-1:
        print place
        if oldList[place].isdigit() and oldList[place+1][0].isdigit():
            print "in if"
            trim1 = removeBrackets(oldList[place-1])
            trim3 = removeBrackets(oldList[place+1])
            number = calculate(trim1,oldList[place],trim3)
            newList.pop()
            newList.append(number)
            factor = factor + 2print "--- new start ---"
            if (place + factor) < length:
                newList.append(oldList[place+factor])        
        else:
            print "in else"
           # print place+factor
           # print len(oldList)
            if (place + factor) < length:
                newList.append(oldList[place+factor])
            
        place = place + 1
    """
    print "--- new start ---"
    if len(newList) > 1:
        combineSet(newList)
      
    


    print len(newList)
    print newList
    return newList

    """
    answer1 = newList[0]
    print answer1 
    

    print newList
    return newList
    """

def removeBrackets(trim):
    while '(' in trim:
        trim = trim[1:]

    while ')' in trim:
        trim = trim[:-1]
  
    return trim



if len(sys.argv) > 1:
    inputString = sys.argv[1]
    items = inputString.split(' ')
    for item in items:
        itemList.append(item)

    length = len(itemList)

    if length == 1:
        result = int(itemList[0])
    else:
        oldList = itemList
        answer = combineSet(oldList)
        print "Back"
        result = answer
else:
    result = "Please enter an expression to be evaluated."


print "Result is"
print result 



    
