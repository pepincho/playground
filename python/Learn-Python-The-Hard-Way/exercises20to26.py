# # exercise 24
# def secret_formula(started):
# 	jelly_beans = started * 500
# 	jars = jelly_beans / 1000
# 	crates = jars / 100
# 	return jelly_beans, jars, crates

# start_point = 10000
# beans, jars, crates = secret_formula(start_point)

# print ("With a starting point of: %d" % start_point)
# print ("We'd have %d beans, %d jars, and %d crates." % (beans, jars, crates))

# start_point = start_point / 10

# print ("We can also do that this way:")
# print ("We'd have %d beans, %d jars, and %d crates." % secret_formula(start_point))

# exercise 25
def break_words(stuff):
	"""This function will break up words for us."""
	words = stuff.split(' ')
	return words

def sort_words(words):
	"""Sorts the words."""
	return sorted(words)

def print_first_word(words):
	"""Prints the first word after popping it off."""
	word = words.pop(0) # pop function delete the element
	print (word)

def print_last_word(words):
	"""Prints the last word after popping it off."""
	word = words.pop(-1) # pop function delete the element
	print (word)

def sort_sentence(sentence):
	"""Takes in a full sentence and returns the sorted words."""
	words = break_words(sentence)
	return sort_words(words)

def print_first_and_last(sentence):
	"""Prints the first and last words of the sentence."""
	words = break_words(sentence)
	print_first_word(words)
	print_last_word(words)

def print_first_and_last_sorted(sentence):
	"""Sorts the words then prints the first and last one."""
	words = sort_sentence(sentence)
	print_first_word(words)
	print_last_word(words)

sentence = "All good things come to those who wait."

words = break_words(sentence)
print ("The words are: {}".format(words))

sorted_words = sort_words(words)
print ("The sorted words are: {}".format(sorted_words))

print ("Words are: {}".format(words))

# These two functions will delete the words from the list ( words )
# pop function delete the element
print_first_word(words)
print_last_word(words)

print ("Words are: {}".format(words))
