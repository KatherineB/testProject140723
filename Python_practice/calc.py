import sys

itemList = []
newArray = []
oldArray = []
partList = []
partList5 = []
inputString = ""
usableString = ""
interimString5 = ""
result = ""
place = 0
factor = 0

def process(op, ex1, ex2):
    partList = []
    setJoined = ' '.join([op, ex1, ex2])
    setTrimmed = setJoined[1:-1]
    parts = setTrimmed.split(' ')
    for part in parts:
        partList.append(part)

    if partList[0] == "add":
        return int(partList[1]) + int(partList[2])
    elif partList[0] == "multiply":
        return int(partList[1]) * int(partList[2])
    else:
        return "An error has occurred. Please try again."

def combineSet(oldArray,length):
    place = 0
    print "in function"
    print len(oldArray)
    newArray = []
    while place < length:
        if oldArray[place].isdigit() and oldArray[place+1][:-1].isdigit():
            number = process(oldArray[place-1],oldArray[place],oldArray[place+1])
            print "in if"
            numberFormatted = ''.join([str(number),")"])
            newArray.pop()
            newArray.append(numberFormatted)
            factor = factor + 2
            if place + factor < length:
                newArray.append(oldArray[place+factor])
        else:
            if place + factor < length:
                newArray.append(oldArray[place+factor])
            print "in else"
        place = place + 1
   
    return newArray
"""
def calculate1(usableString):
    partList = []
    parts = usableString.split(' ')
    for part in parts:
        partList.append(part)

    if partList[0] == "add":
        return int(partList[1]) + int(partList[2])
    elif partList[0] == "multiply":oldArray = newArray
        return int(partList[1]) * int(partList[2])
    else:
        return "An error has occurred. Please try again."
"""

"""
def calculate2(interimString5):
    parts = interimString5.split(' ')
    for part in parts:
        partList5.append(part)

    try:
        x = int(partList5[1])newArray.append(oldArray[place+factor])
    except ValueError:
        xSingle = False
        ySingle = True

    try:
        y = int(partList5[4])
    except ValueError:
        xSingle = True
        ySingle = False
[:-1]
    if xSingle == False:
            xJoined = ' '.join([partList5[1], partList5[2], partList5[3]])
            xTrimmed = xJoined[1:-1]
            x = calculate3(xTrimmed)
[:-1]
    if ySingle == False:
            yJoined = ' '.join([partList5[2], partList5[3], partList5[4]])
            yTrimmed = yJoined[1:-1]
            y = calculate3(yTrimmed)
[:-1]
    usable = ' '.join([partList5[0], str(x), str(y)])

    result = calculate1(usable)

    return result
"""


if len(sys.argv) > 1:
    inputString = sys.argv[1]

trimmedString = inputString[1:-1]

items = trimmedString.split(' ')
for item in items:
    itemList.append(item)

length = len(itemList)

oldArray = itemList


"""
while place < length:
    if itemList[place].isdigit():
        ex1 = itemList[place]
        place = place + 1
    else:
        ex1 = process(itemList[place],itemList[place+1],itemList[place+2])
        place = place + 3

    if itemList[place].isdigit():
        ex2 = itemList[place]
        place = place + 1
    else:
        ex2 = process(itemList[place],itemList[place+1],itemList[place+2])
        place = place + 3
"""

while len(oldArray) > 1:
    newArray = combineSet(length,length)

#print number

#print len(newArray)
"""
print newArray[0]
print newArray[1]
print newArray[2]
print newArray[3]
print newArray[4]
"""

"""
print op1
print ex1
print ex2
"""

"""
if len(itemList) == 1:
    result = itemList[0]
elif len(itemList) == 3:
    usableString = inputString[1:-1]
    result = calculate1(usableString)
elif len(itemList) == 5:
    interimString5 = inputString[1:-1]
    result = calculate2(interimString5)
elif len(itemList) == 7:
    interimString7 = inputString[1:-1]
    result = calculate2(interimString7)
else:
    result = "Syntax Error. Please try again."
 """  

print result 



    
