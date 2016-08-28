from random import randint, shuffle

def generate_test(count):
	names = ["Ivo", "Maria", "Anetta", "Philip", "Rado", "Gergana"]

	result = []

	for name in names:
		result = result + [name] * randint(1, count)

	shuffle(result)

	return result

def get_people_count(activity):
	activity_copy = copy_activity(activity)
	counter = 0
	size_activity = len(activity)

	for i in range(0, size_activity):
		for j in range(i + 1, size_activity):
			 if activity_copy[i] == activity_copy[j]:
			 	activity_copy[j] = "*"

	for i in range(0, size_activity):
		if activity_copy[i] != "*":
			counter += 1

	return activity, counter

def copy_activity(activity):
	size_activity = len(activity)
	activity_copy = []

	for i in range(0, size_activity):
		activity_copy.append(activity[i])

	return activity_copy


activity5 = generate_test(5)
activity4 = generate_test(4)
activity3 = generate_test(3)
activity7 = generate_test(2)

print (get_people_count(activity5))
print (get_people_count(activity4))
print (get_people_count(activity3))
print (get_people_count(activity7))
