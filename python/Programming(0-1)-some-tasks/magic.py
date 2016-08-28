def magic_square(square):

	size_square = len(square)
	is_magic = True

	wanted_sum = 0
	
	for index in range(0, size_square):
		wanted_sum += square[0][index]

	for row in range(0, size_square):
		current_sum = 0
		for col in range(0, size_square):
			current_sum += square[row][col]
		if current_sum != wanted_sum:
			is_magic = False
			break

	for col in range(0, size_square):
		current_sum = 0
		for row in range(0, size_square):
			current_sum += square[row][col]
		if current_sum != wanted_sum:
			is_magic = False
			break

	current_sum = 0
	row = 0
	col = 0

	while row < size_square and col < size_square:
		current_sum += square[row][col]
		row += 1
		col += 1

	if current_sum != wanted_sum:
		is_magic = False

	current_sum = 0
	row = 0
	col = size_square - 1

	while row < size_square and col >= 0:
		current_sum += square[row][col]
		row += 1
		col -= 1

	if current_sum != wanted_sum:
		is_magic = False

	return is_magic

square1 = [ [23, 28, 21], [22, 24, 26], [27, 20, 25] ]
square2 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]

print (magic_square(square1))
print (magic_square(square2))
