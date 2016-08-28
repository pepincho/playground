## Methods

# definition -------------------------

# Degining it with the keyword def.
# The result of the function is the last expression evaluated,
# if no return sometime earlier.

def factorial(n)
  if n == 1
    1
  else
    factorial(n - 1) * n
  end
end
# In ruby there is no tail recursion optimization. This code eats stack.

# In ruby there's no such thing as "global function"
# def always defines method in some class
# If def is not in the class definition, it goes like a private method to Object
# puts is an example of this and the methods that you define in irb
# The definition of methods in Object is appropriate only for short scripts
# Beyond them, the definition of methods in Object is a terribly bad style


class Array
  def fourty_second
    self[41]
  end
end

list     = []
list[41] = 'The Universe'

list.fourty_second # "The Universe"

# we can use return to exit the function
def includes?(array, element)
  array.each do |item|
    return true if item == element
  end
  false
end
# we can simply use array.include?(element)


# default arguments -------------------------

def order(drink, size = "large")
    "A #{size} #{drink}, please!"
end

puts order "tea"              # "A large tea, please!"
puts order "coffee", "small"  # "A small coffee, please!"

# The Default arguments can be any expression
# "Any expression" includes a call to another function
# They're evaluated on each call
# Complex expressions for the default arguments are bad style


# variable number of arguments
# Methods in ruby can take a variable number of arguments.
# The parameter is indicated by * and calling the function
# it containts a list of arguments

def say_hi(name, *drinks)
  "Hi, I am #{name} and I enjoy: #{drinks.join(', ')}"
end

puts say_hi 'Mityo', 'coffee', 'tea', 'water' # Hi, I am Mityo and I enjoy: coffee, tea, water

# there can be only one such parameter in the function
def something(*a, b, c)
end

def something(a, *b, c)
end

# methods and hashes ---------------------

def order(drink, preferences)
  "#{drink} with size: #{preferences[:size]} and syrup: #{preferences[:syrup]}"
end
# when the last argumet in a hash we can skip the curly braces around it
order('Latte', {:size => 'grande', :syrup => 'hazelnut'})
order 'Latte', :size => 'grande', :syrup => 'hazelnut'
order 'Latte', {:size => 'grande', :syrup => 'hazelnut'}
puts order 'Latte', size: 'grande', syrup: 'hazelnut' # Ruby 1.9+



def order(drink, preferences = {})
end

order 'Latte'
order 'Latte', size: 'grande', syrup: 'hazelnut'
# In thay way, preferences is optional and we don't need to submit it
# if we don't have preferences

puts '-' * 40

# Псевдо-keyword arguments -----------------------
# недостатъци
# Този "трик" с хешовете се ползва много, понякога прекалено много.
# Той има и ред недостатъци:

# За да ползвате стойност, трябва да я достъпите през променлива (например preferences[:size])
# Задаването на стойности по подразбиране е криво и може да се прави само в тялото на метода
# Например така: preferences[:size] ||= 'grande'
# Или така: preferences = {size: 'grande', syrup: 'hazelnut'}.merge(preferences)
# Проверката за задължителни keyword args става пак ръчно
# Проверката дали някой не ви е подал "излишни" и непознати ключови думи за аргументи – пак ръчно


# Истински keyword arguments
# Горните недостатъци и нуждата водят до появата на истински keyword arguments в Ruby 2.0


def order(drink, size: 'grande', syrup: nil)
  message = "You ordered a #{size} #{drink}"
  message << " with a #{syrup} syrup" if syrup
  message
end

# puts order
order 'Latte'                       # "You ordered a grande Latte"
order 'Latte', syrup: 'hazelnut'    # "You ordered a grande Latte with a hazelnut syrup"
# order 'Latte', filling: 'chocolate' # error: ArgumentError

puts '-' * 40

# Задължителни keyword arguments --------------------------

def order(drink:, size: 'grande', syrup: nil)
    message = "You ordered a #{size} #{drink}"
    message << " with a #{syrup} syrup" if syrup
    message
end

puts order drink: 'Latte'                    # "You ordered a grande Latte"
puts order syrup: 'hazelnut', drink: 'Latte' # "You ordered a grande Latte with a hazelnut syrup"
# puts order                                   # error: ArgumentError: missing keyword: drink

def bam(f_name:, l_name:, age: 19)
    msg = "My name is #{f_name} #{l_name}"
    msg << " and I'm #{age} years old"
    msg
end

puts bam(f_name: "Petar", l_name: "Ivanov")

puts '-' * 40

# **kwargs ----------------------

def order(drink:, size: 'grande', **options)
  message = "You ordered a #{size} #{drink}"
  message << " with these options: #{options.inspect}" unless options.empty?
  message
end

order drink: 'Latte'
# You ordered a grande Latte
order syrup: 'hazelnut', drink: 'Latte'
# You ordered a grande Latte with these options: {:syrup=>"hazelnut"}
puts 'Latte', syrup: 'chocolate', fruit: 'banana'
# order
# error: ArgumentError: missing keyword: drink

puts '-' * 40

# Истински keyword arguments ----------------------
# advantages

# Ако има стойност по подразбиране, тя се задава редом с дефиницията на метода
# Ползвате стойността на аргумента директно, няма нужда от отделна променлива
# Непознати ключови думи, подадени като аргументи, предизвикват грешка
# Липсващи и задължителни ключови думи за аргументи също предизвикват грешка


# predicates -------------------

# Името на метод може да завършва на ?.
# Това се ползва за методи, които връщат лъжа или истина (предикати):

def even?(n)
  n % 2 == 0
end

even? 2
even? 3
# Това е само конвенция.

# two versions --------------

# Името на метод може да завършва на !.
# Това се ползва, когато методът има две версии с различно поведение:

numbers = [4, 1, 3, 2, 5, 0]

numbers.sort   # връща нов списък
numbers.sort!  # променя списъка на място
# В случая, "по-опасният" метод завършва на удивителна.

# Ако имате само една версия на метод с такова име, не слагайте удивителна.
