import sys

itemList = []
partList = []
partList5 = []
inputString = ""
usableString = ""
interimString5 = ""
result = ""

def calculate3(usableString):
    partList = []
    parts = usableString.split(' ')
    for part in parts:
        partList.append(part)

    if partList[0] == "add":
        return int(partList[1]) + int(partList[2])
    elif partList[0] == "multiply":
        return int(partList[1]) * int(partList[2])
    else:
        return "An error has occurred. Please try again."

def calculate5(interimString5):
    parts = interimString5.split(' ')
    for part in parts:
        partList5.append(part)

    try:
        x = int(partList5[1])
    except ValueError:
        xSingle = False
        ySingle = True

    try:
        y = int(partList5[4])
    except ValueError:
        xSingle = True
        ySingle = False

    if xSingle == False:
            xJoined = ' '.join([partList5[1], partList5[2], partList5[3]])
            xTrimmed = xJoined[1:-1]
            x = calculate3(xTrimmed)

    if ySingle == False:
            yJoined = ' '.join([partList5[2], partList5[3], partList5[4]])
            yTrimmed = yJoined[1:-1]
            y = calculate3(yTrimmed)

    usable = ' '.join([partList5[0], str(x), str(y)])

    result = calculate3(usable)

    return result



if len(sys.argv) > 1:
    inputString = sys.argv[1]

items = inputString.split(' ')
for item in items:
    itemList.append(item)

if len(itemList) == 1:
    result = itemList[0]
elif len(itemList) == 3:
    usableString = inputString[1:-1]
    result = calculate3(usableString)
elif len(itemList) == 5:
    interimString5 = inputString[1:-1]
    result = calculate5(interimString5)
elif len(itemList) == 7:
    result = itemList[6]
else:
    result = "Syntax Error. Please try again."
    
print result 



    
