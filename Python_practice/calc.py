"""
S-Expression Calculator

This project is designed to accept a command line argument that consists of a mathematical expression that includes positive integers to be added or multiplied. It prints out the result of the calculations.

Expressions to be input must have an operation and two positive integers enclosed in brackets. Any number can be replaced by another set of brackets enclosing an operation and two numbers.

Examples of acceptable input are:

26

"(add 3 5)"

"(multiply (add 4 5) 8)"

"(add (add 7 (multiply 5 3)) (multiply (add 3 2) (add 8 2)))"

"""
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
        print("Error in calculate() function. Please check that your input is properly formatted and try again")

def combineSet(oldList):
    """
This is the function that does the manipulation of the string of operators and numbers. Beginning at the start of the list of pieces of the string, it takes the list, element by element and transfers it to the end of a new list. While transfering, it performs the operations where there is an operator and two numbers consecutively placed. The process is repeated until the list is reduced to one element which is the result of the calculations.
    """
    length = len(oldList)
    prevPrev = "0"
    prev = "0"
    curr = "0"
    newList = []
    # stores operations when there are nested statement
    ops = []   
    stop = False
             
    while len(oldList) > 0:
        prevPrev = prev
        prev = curr
        curr = oldList.pop(0)

        try:
            # checks for consecutive operations and stores the one not used for later
            if removeBrackets(prev).isdigit() == False and removeBrackets(curr).isdigit() == False:
                ops.append(prev)
            
            # checks for two conseutive numbers
            if curr[0].isdigit() and prev[0].isdigit():

                # checks if must use most recently taken operator from old list or one from the ops list
                if prevCal:
                    trim1 = removeBrackets(ops.pop())
                else:
                    trim1 = removeBrackets(prevPrev)

                trim3 = removeBrackets(curr)
                number = calculate(trim1,prev,trim3)
                # elements already placed on new list must be removed when an operation gets performed
                newList.pop()
                newList.pop()
                newList.append(number)
                # prevCal keeps track of when there are operators waiting in the ops list
                prevCal = True
                curr = number
            else:
                newList.append(curr)
                prevCal = False

        except:
            print('Error in the combineSet() function. Please check that your input is properly formatted and try again.')
            stop = True
    
    try:
        if stop == False:
            if len(newList) > 1:
                combineSet(newList)
            else:
                print(int(newList[0]))

    except:
        print('Error in combineSet() function recursion. Please check that your input is properly formatted and try again.')

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
        print(int(itemList[0]))
    else:
        combineSet(itemList)
      
else:
    print("Please enter one appropriate expression to be evaluated.")


    
