#x = float(random.random())
#x = random.random()
#x = float(347.01/3.9)
#print(x)
ts_1 = 2
ts_2 = 3
ts_3 = 1
ts_4 = 1
ts_5 = 3

c_1 = 0
c_2 = 0
c_3 = 0
c_4 = 0
c_5 = 0

correct = 0

g_1 = int(input("Enter Number 1:"))
g_2 = int(input("Enter Number 2:"))
g_3 = int(input("Enter Number 3:"))
g_4 = int(input("Enter Number 4:"))
g_5 = int(input("Enter Number 5:"))

if g_1 == ts_1:
      if g_2 == ts_2:
           c_1 = 1

if g_2 == ts_2:
      if g_1 == ts_1 and g_3 == ts_3:
           c_2 = 1

if g_3 == ts_3:
      if g_2 == ts_2 and g_4 == ts_4:
           c_3 = 1

if g_4 == ts_4:
      if g_3 == ts_3 and g_5 == ts_5:
           c_4 = 1

if g_5 == ts_5:
      if g_4 == ts_4:
           c_5 = 1

correct = c_1 + c_2 + c_3 + c_4 + c_5


print(correct)
