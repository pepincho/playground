# print all prime numbers in a range with a generator function in python

#that is an utility function
def isprime(n):
    if n == 1:
        return False
    for x in range(2, n):
        if n % x == 0:
            return False
    else:
        return True

#generator function is used in the for loop as an iterator
#this function return an iterator object
def primes(n = 1):
    while (True):
        if isprime(n): yield n #yield makes tihs a generator
        n += 1

#for loop use primes function as an iterator
for n in primes():
    if n > 100: break
    print(n)
