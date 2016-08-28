#exercise 3
print ("----------------------------------------------------")
print ("Petar")
print ("Is it greater? 5 > -2", 5 > -2)

#exercise 4
print ("----------------------------------------------------")
cars = 100
space_in_a_car = 4.0
drivers = 30
cars_driven = drivers
carpool_capacity = cars_driven * space_in_a_car

print ("We can transport ", carpool_capacity, " people today.")

#exercise 5
print ("----------------------------------------------------")
my_name = 'Petar I. Ivanov'
my_age = 19
my_height = 200
my_weight = 100

print ("Let's talk about %s." % my_name)
print ("He's %d years old." % my_age)

print ("If I add %d, %d, and %d I get %d." 
	% (my_age, my_height, my_weight, my_age + my_height + my_weight))

#exercise 6
print ("----------------------------------------------------")
hilarious = False
joke_evaluation = "Isn't that joke so funny?! %r"
print (joke_evaluation % hilarious)

p = "Petar"
i = "Ivanov"
print (p + i)

#exercise 7
print ("----------------------------------------------------")
print ("Sofia is the capital of %s." % 'Bulgaria')
print ("." * 10)
print ('.' * 10)

end1 = "P"
end2 = "."
end3 = "I"
end4 = "v"
end5 = "a"
end6 = "n"
end7 = "o"
end8 = "v"

print ((end1 + end2), (end3 + end4 + end5 + end6 + end7 + end8))

#exercise 8

formatter = "%r %r %r %r"

print (formatter % (1, 2, 3, 4))
print (formatter % ("one", "two", "three", "four"))
print (formatter % (True, False, False, True))
print (formatter % (formatter, formatter, formatter, formatter))

#exercise 9

days = "Mon Tue Wed Thu Fri Sat Sun"
months = "Jan\nFeb\n.....\nSep"

print ("Here are the days: ", days)
print ("Here are the months: ", months)

print ("""Pesho""")

#exercise 10
print ("----------------------------------------------------")

tabby_cat = "\tI'm tabbled in."
persian_cat = "I'm split \n on a line."
backslash_cat = "I'm \\ a \\ cat."

fat_cat = """
I'll do a list:
\t* one
\t* two
\t* three\n\t* four
"""

print (tabby_cat)
print (persian_cat)
print (backslash_cat)
print (fat_cat)
