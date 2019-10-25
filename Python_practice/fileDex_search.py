#!/usr/bin/python
# FileDex_search.py
# -for searching

#inputFile = open("datafile.txt","r")

lastName = input("Enter last name of person: ")
 
with open("filedex_sortdone.txt","r") as inputFile:
    for line in inputFile:
        if lastName in line:
            print(line)
