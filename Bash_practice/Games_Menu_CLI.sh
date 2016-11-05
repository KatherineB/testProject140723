#!/bin/bash

echo " "
echo " "

echo "================================================"	
echo " C O M M A N D   L I N E   G A M E S    M E N U"
echo "================================================"
echo "1. Letters Three"
echo "2. Random Jump"
echo "3. Sequence"
echo "4. Exit"
echo " "
read -p "Enter the number of the game that you wish to play or 4 to exit: " pick

echo " "
echo " "

case $pick in
        1)
            ./lettersThree
            ;;
        2)
            ./randomjump.pl
            ;;
        3)
            python ./sequence.py
            ;;
        4)
            exit 0
            ;;
        *) 
            echo invalid option
            ;;
esac


