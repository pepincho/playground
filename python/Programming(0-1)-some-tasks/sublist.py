def sublist(list1, list2):

	size_list1 = len(list1)
	size_list2 = len(list2)

	is_sublist = False
	counter = 0
	indx2 = 0
	temp_indx2 = 0
	
	while indx2 < size_list2:
		indx1 = 0
		if list2[indx2] == list1[indx1]:
			temp_indx2 = indx2
			indx1 += 1
			temp_indx2 += 1
			counter += 1
			while indx1 < size_list1 and temp_indx2 < size_list2:
				if list2[temp_indx2] == list1[indx1]:
					counter += 1
					indx1 += 1
					temp_indx2 += 1
				else:
					indx1 = 0
					counter = 0
					break

		indx2 += 1

		if counter >= size_list1:
			is_sublist = True
			break

	if is_sublist:
		return True
	else:
		return False
	

print (sublist(["Python"], ["Python", "Django"]))

print (sublist(["Python", "Django"], ["Django", "Python"]))

print (sublist([1,2], [1, 0, 1, 2, 2]))

print (sublist(["Django", "Python"], ["Python", "Django"]))

print (sublist(["Django", "Python"], ["Python", "Django", "Python"]))

print (sublist([1, 3, 2], [1, 3, 1, 1, 3, 2]))
