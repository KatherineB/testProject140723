import random
from array import *

randomNumbers = [0,0,0,0,0]
guesses = array('i',[0,0,0,0,0])
checks = array('i',[0,0,0,0,0])
correct = 0
loops = 0

def doGuesses():
	guesses[0] = int(input("Enter Number:"))
	guesses[1] = int(input("Enter Number:"))
	guesses[2] = int(input("Enter Number:"))
	guesses[3] = int(input("Enter Number:"))
	guesses[4] = int(input("Enter Number:"))

	if guesses[0] == randomNumbers[0]:
	      if guesses[1] == randomNumbers[1]:
		   checks[0] = 1
              else:
                   checks[0] = 0

	if guesses[1] == randomNumbers[1]:
	      if guesses[0] == randomNumbers[0] and guesses[2] == randomNumbers[2]:
		   checks[1] = 1
              else:
                   checks[1] = 0

	if guesses[2] == randomNumbers[2]:
	      if guesses[1] == randomNumbers[1] and guesses[3] == randomNumbers[3]:
		   checks[2] = 1
              else:
                   checks[2] = 0

	if guesses[3] == randomNumbers[3]:
	      if guesses[2] == randomNumbers[2] and guesses[4] == randomNumbers[4]:
		   checks[3] = 1
              else:
                   checks[3] = 0

	if guesses[4] == randomNumbers[4]:
	      if guesses[3] == randomNumbers[3]:
		   checks[4] = 1
              else:
                   checks[4] = 0


	correct = checks[0] + checks[1] + checks[2] + checks[3] + checks[4]


	print "Number of correct partial sequences:",correct


for i in range(0, len(randomNumbers)):
    randomNumbers[i] = random.randint(1,3)

#randomNumbers[0] = random.randint(1,3)
#randomNumbers[1] = random.randint(1,3)
#randomNumbers[2] = random.randint(1,3)
#randomNumbers[3] = random.randint(1,3)
#randomNumbers[4] = random.randint(1,3)

while loops < 6 and correct != 5:
    doGuesses()
    loops += 1

if correct == 5:
    print "YOU WIN !!!  You correctly guessed the sequence!"
else:
    print "Sorry, you didn't guess the sequence correctly this time."

print "The correct sequence was:"

for j in randomNumbers:
     print(j)

