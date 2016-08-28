def calculate_coins(sum):
	result = {}
	coins = [100, 50, 20, 10, 5, 2, 1]
	counter_coins = 0

	for coin in coins:
		counter_coins = sum // coin

		result[coin] = counter_coins

		sum = sum - counter_coins * coin

	return result


sum = input("Enter a coin: ")
sum_float = float(sum)
sum_int = round(sum_float * 100)

print (calculate_coins(sum_int))