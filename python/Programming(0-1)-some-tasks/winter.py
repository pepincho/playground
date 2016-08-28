def winter_is_coming(seasons):
	counter_summer = 0
	counter_spring = 0
	
	if "winter" in seasons:
		for season in seasons:
			if season == "winter":
				counter_summer = 0
				counter_spring = 0
			else:
				if season == "summer":
					counter_summer += 1
				else:
					counter_spring += 1

		if counter_summer != 0 and counter_spring != 0 and counter_summer + counter_spring >= 5:
			return True
		else:
			return False
	else:
		print ("There is no winter in the seasons, so we can not check is winter coming.")
		return False


seasons = ["winter", "summer", "summer", "summer", "spring", "spring"]
seasons2 = ["winter", "summer", "winter", "spring", "spring", "spring", "spring", "spring", "spring"]
seasons3 = ["summer", "spring", "summer", "summer", "spring"]

print ("Is winter coming: ", winter_is_coming(seasons))
print ("Is winter coming: ", winter_is_coming(seasons2))
print ("Is winter coming: ", winter_is_coming(seasons3))
