def rotateNumber(n):
    nString = str(n)
    length = len(nString)
    #print(n, "is a", length, "digit number")
    print(nString)
    first = nString[0:1]
    rest = nString[1:]
    print(first)
    print(rest)
    newString = rest + first
    print(newString)
    return int(newString)

def checkIfPrime(n):
    isPrime = True
    print("Checking to see if", n, "is a prime number")
    x = int(n/2)
    i = 2
    print(x)
    while i < x and isPrime == True:
        if n % i == 0:
            print(i, "divides evenly into", n)
            isPrime = False
        i = i + 1
    return isPrime

def checkIfCircularPrime(n):
    nRot = n
    isCircPrime = True
    nString = str(n)
    length = len(nString)
    i = 1
    while i < length and isCircPrime == True:
        isPrime = checkIfPrime(nRot) 
        if isPrime:
            nRot = rotateNumber(nRot)
        else:
            isCircPrime = False
        i = i + 1    #i++ gives invalid syntax error, check
    return isCircPrime

def start():
    circPrimesFound = []
    for i in range(11,20):        
        isCircPrime = checkIfCircularPrime(i)
        if isCircPrime:
            circPrimesFound.append(i)
    return circPrimesFound
    
circPrimesList = start()
print(circPrimesList)

#rNum = rotateNumber(197)
#print(rNum)


    	


   
#status = checkIfPrime(24)
#print(status)



