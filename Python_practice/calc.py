import sys

itemList = []
inputString = ""

def calculate(op, ex1, ex2):
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
    newList = []
    prevCal = False

    while place < length-1:
        if place + 1 < length-factor and oldList[place+factor].isdigit() and oldList[place+factor+1][0].isdigit():

            if prevCal:
                newList.pop()
                newList.pop()
                newList.pop()
            else:
                newList.pop()

            trim1 = removeBrackets(oldList[place+factor-1])
            trim3 = removeBrackets(oldList[place+factor+1])
            number = calculate(trim1,oldList[place+factor],trim3)
            
            newList.append(number)
            factor = factor + 2

            if (place) < length-factor:
                if oldList[place+2][0].isdigit():
                    newList.append(oldList[place+factor]) 
                else:
                    newList.append(oldList[place+factor]) 
                    newList.append(oldList[place+factor+1])
                    newList.append(oldList[place+factor+2])

            prevCal = True    

        else:
            if (place) < length-factor:
                newList.append(oldList[place+factor])
            prevCal = False
                   
        place = place + 1
  
    if len(newList) > 1:
        combineSet(newList)
    else:
        print int(newList[0]) 

def removeBrackets(trim):
    while '(' in trim:
        trim = trim[1:]

    while ')' in trim:
        trim = trim[:-1]

    return trim



if len(sys.argv) == 2:
    inputString = sys.argv[1]

    items = inputString.split(' ')
    for item in items:
        itemList.append(item)

    length = len(itemList)

    if length == 1:
        print int(itemList[0])
    else:
        combineSet(itemList)
      
else:
    print "Please enter one appropriate expression to be evaluated."


    
