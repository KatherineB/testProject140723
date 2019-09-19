#!/usr/bin/python
# FileDex_sort.py
# -for sorting

employees = []
with open("filedex_newData.txt","r") as inputFile:
    for line in inputFile:
        employees.append(line)

employees.sort()

with open("filedex_sorted.txt","w") as sortedfile:
    for element in employees:
        print(element, file=sortedfile)



