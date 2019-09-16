#!/usr/bin/python
# FileDex_sort.py
# -for sorting

employees = []
with open("filedex_newData.txt","r") as inputFile:
    for line in inputFile:
        # print(line)
        employees.append(line)
		
print(employees[0])

employees.sort()

print(employees[0])



