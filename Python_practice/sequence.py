#
# Sequence Guessing Game
# ----------------------
# A sequence of five numbers from 1 to 3 is chosen at random.  The player must try to guess them.
# The player inputs five numbers, one by one, to make a guess. Instead of counting the number of 
# correct numbers in correct positions, the game counts the number of correct partial sequences   
# and displays that number as a result.  A partial sequence is any number, the number before it 
# and the number after it in the order that they were entered by the player.  For first and last 
# numbers in a guess of five numbers, just the number and the number before or after it counts.  
# Thus partial sequences can contain either two or three numbers.

import random
from array import *

randomNumbers = [0,0,0,0,0]
guesses = array('i',[0,0,0,0,0])
checks = array('i',[0,0,0,0,0])
correct = 0
info = 0
play = 1
inputNumber = 0
i = 0;


def doGuesses():
    counter = 0
  
    while counter < 5:
        inputNumber = int(input("Enter Number:"))
        if inputNumber < 4 and inputNumber > 0 and inputNumber != "":
             guesses[i] = inputNumber
             counter += 1
        else:
             print "Please enter a number from 1 to 3"     

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

    return correct


def runGame():
    loops = 0
    again = "y"
    correct = 0;

    for i in range(0, len(randomNumbers)):
        randomNumbers[i] = random.randint(1,3)
 
    while loops < 6 and correct != 5:
        for i in range(0, len(checks)):
            checks[i] = 0
        loops += 1
        print "Enter set ", loops, " of guesses for five number sequence:"
        correct = doGuesses()    

    if correct == 5:
        print "YOU WIN !!!  You correctly guessed the sequence!"
    else:
        print "Sorry, you didn't guess the sequence correctly this time."

    print "The correct sequence was:"

    for j in randomNumbers:
        print(j)

def showHowToPlay():
    print ""
    print "A sequence of five numbers from 1 to 3 is chosen at random."
    print "The player must try to guess them.  The player inputs five" 
    print "numbers, one by one, to make a guess.  Instead of counting" 
    print "the number of correct numbers in correct positions, the game" 
    print "counts the number of correct partial sequences and displays"
    print "that number as a result.  A partial sequence is any number,"
    print "the number before it and the number after it in the order"
    print "that they were entered by the player.  For first and last"
    print "numbers in a guess of five numbers, just the number and"
    print "the number before or after it counts. Thus partial sequences"
    print "can contain either two or three numbers."
    print ""

while play == 1:
    info = raw_input("Display instructions? (y/n)")
    if info == "y" or info == "Y":
        showHowToPlay()
    runGame()

    again = raw_input("Play again? (y/n)")
    if again == "y" or again == "Y":
        play = 1
    else:
       play = 0;
   
