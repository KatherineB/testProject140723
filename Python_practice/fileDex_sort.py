#!/usr/bin/python
# FileDex_sort.py
# -for sorting

employees = []
with open("filedex_newData.txt","r") as inputFile:
    for line in inputFile:
        employees.append(line)

employees.sort()

with open("filedex_sorted.txt","w") as sortedfile:   
    i = 0
    while i < len(employees):
        if i < len(employees) - 1:
            employees[i] = employees[i][:-1] #remove newline chars without losing final } from last line
        print(employees[i], file=sortedfile)
        i += 1