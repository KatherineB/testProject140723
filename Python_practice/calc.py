import sys

itemList = []
inputString = ""
prevCal = False


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
    length = len(oldList)
    prevPrev = "0"
    prev = "0"
    curr = "0"
    newList = []
    ops = []
             
    while len(oldList) > 0:
        prevPrev = prev
        prev = curr
        curr = oldList.pop(0)

        if removeBrackets(prev).isdigit() == False and removeBrackets(curr).isdigit() == False:
            ops.append(prev)
            
        if curr[0].isdigit() and prev[0].isdigit():

            if prevCal:
                trim1 = removeBrackets(ops.pop())
            else:
                trim1 = removeBrackets(prevPrev)

            trim3 = removeBrackets(curr)
            number = calculate(trim1,prev,trim3)
            newList.pop()
            newList.pop()
            newList.append(number)
            prevCal = True
            curr = number
        else:
            newList.append(curr)
            prevCal = False
    
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


    
