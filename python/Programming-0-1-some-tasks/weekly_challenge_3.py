def get_digits(num):
	digits = []

	while (num != 0):
		digit = num % 10
		digits = [digit] + digits # digits will be in the same order as in the number
		# digits.append(digit) 	  # digtis will be in reverse order 
		num //= 10

	return digits

def sort_digits(digits): # selection sort in ascending order
	size_digits = len(digits)

	for i in range(0, size_digits):
		min_indx = i
		for j in range(i + 1, size_digits):
			if digits[j] < digits[min_indx]:
				min_indx = j
		if min_indx != i:
			temp = digits[i]
			digits[i] = digits[min_indx]
			digits[min_indx] = temp

	return digits

def sort_digits2(digits): # sort in decreasing order
	sorted_digits_dsc = []
	size = len(digits)
	counter = 0

	while counter < size:
		largest_num = 0
		index = 0
		temp_index = 0

		while index < size:
			if digits[index] > largest_num:
				largest_num = digits[index]
				temp_index = index
			index += 1

		digits[temp_index] = 0
		sorted_digits_dsc += [largest_num]
		counter += 1

	return sorted_digits_dsc


def digits_to_number(sorted_digits):
	num = 0

	for digit in sorted_digits:
		num = num * 10 + digit

	return num

def reverse_number(number):
	new_num = 0
	
	while (number != 0):
		 new_num = new_num * 10 + number % 10
		 number //= 10

	return new_num


number = input("Enter a number: ")
number = int(number)

digits = get_digits(number)

sorted_digits_аsc = sort_digits(digits)

smallest_number = digits_to_number(sorted_digits_аsc)
largest_number = reverse_number(smallest_number)

print ("Largest number: ", largest_number)
print ("Smallest number: ", smallest_number)

# version with another sort function
sorted_digits_dsc = sort_digits2(digits)

largest_number2 = digits_to_number(sorted_digits_dsc)
smallest_number2 = reverse_number(largest_number2)

print ("Largest number: ", largest_number2)
print ("Smallest number: ", smallest_number2)
