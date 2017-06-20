import re

###### Task 9

input = "asd-12sdf45-56asdf100"
# input = "-12dsa1"

reg_str = re.split("(?:[A-Za-z]+)|(-[0-9]+)", input)

result = sum([int(x) for x in reg_str if x != None and x != ''])

print(result)
######
