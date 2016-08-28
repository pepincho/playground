# exercise 11
name = input("What's your name? ") # take the name from the keyboard
print ("Your name is {}".format(name))

# exercise 15
file_again = input("Type the filename again: > ") # read the file's name from the keyboard

txt_again = open(file_again) # open the file
print (txt_again.read()) # print the file's content

# exercise 16
print ("Opening the file...")
target_name = input("Type the filename: > ")

target_txt = open(target_name, "r+")

print ("Now I'm going to ask you for three lines.")

line1 = input("line 1: ")
line2 = input("line 2: ")
line3 = input("line 3: ")

print ("I'm going to write these to the file.")

target_txt.write(line1)
target_txt.write("\n")
target_txt.write(line2)
target_txt.write("\n")
target_txt.write(line3)
target_txt.write("\n")

print ("And finally, we close it.")
target_txt.close()

# exerckse 17, read from a file and write in another file
from os.path import exists
from_file = input("From file: > ")
to_file = input("To file: > ")

in_file = open(from_file)
indata = in_file.read()

print ("The input file is {} bytes long.".format(len(indata)))
print ("Does the output file exist? {}".format(exists(to_file)))

out_file = open(to_file, 'w')
out_file.write(indata)

print ("Alright, all done.")

out_file.close()
in_file.close()

# exercise 18
def print_two(*args):
	arg1, arg2 = args
	print ("arg1: %r, arg2: %r" % (arg1, arg2))

def print_two_again(arg1, arg2):
    print ("arg1: %r, arg2: %r" % (arg1, arg2))

def print_none():
    print ("I got nothin'.")

print_two("Zed","Shaw")
print_two_again("Zed","Shaw")
print_none()

# exercise 20
def print_all(f):
	print (f.read())

def rewind(f):
	f.seek(0)

def print_a_line(line_count, f):
	print (line_count, f.readline())

file_name = input("File name: > ")
current_file = open(file_name)

print ("First let's print the whole file:\n")

print_all(current_file)

print ("Now let's rewind, kind of like a tape.")

print (rewind(current_file))

print ("Let's print three lines:")

current_line = 1
print_a_line(current_line, current_file)

current_line = current_line + 1
print_a_line(current_line, current_file)

current_line = current_line + 1
print_a_line(current_line, current_file)
