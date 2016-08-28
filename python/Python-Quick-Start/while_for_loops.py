# simple fibonacci series with while
# thu sum of two elements defines the next set
a, b = 0, 1
while b < 50:
    print(b)
    a, b = b, a + b
    # a = b
    # b = a + b
print("Done.")

# read the lines from the file with for loop
fh = open('lines.txt')
for line in fh.readlines():
    print(line, end = '')
print("Done.")