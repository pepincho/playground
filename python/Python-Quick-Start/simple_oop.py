# simple fibonacci series
# the sum of two elemets defines the next set
class Fibonacci():
	#constructor method
	#self is a reference to the object
	#in this case self will refer to the "f" object that is generated
	def __init__(self, a, b):
		self.a = a
		self.b = b
	#generator function that generates an iterator
	def series(self):
		while (True):
			yield(self.b)
			self.a, self.b = self.b, self.a + self.b

f = Fibonacci(0, 1)
for r in f.series():
	if r > 100: break
	print(r, end = ' ')