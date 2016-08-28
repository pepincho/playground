## Anonymous functions

# lambda

# Anonymous functions in Rybe are defined by lambda.
# There're three ways to call:

pow = lambda { |a, b| a**b }

pow.call 2, 3
pow[2, 3]
puts pow.(2, 3)

# За нещастие, не може да извиквате така: double(2).
# Това е несъвместимо с изтърваването на скобите при извикването на метод.

double = lambda do |x|
    x * 2
end
# Важи стандартната конвенция за { } и do/end.

# От 1.9 има по-симпатичен синтаксис за ламбди:
say_hi = lambda { puts 'Hi there!' }
double = lambda { |x| x * 2 }
divide = lambda { |a, b|  a / b }

say_hi = -> { puts 'Hi there' }
double = ->(x) { x * 2 }
divide = -> a, b { a / b }


## Blocks

# Всеки метод може да приеме допълнителен аргумент,
# който е "анонимна функция". Може да го извикате от метода с yield:

def twice
  yield
  yield
end

twice { puts 'Ruby rocks!' }

# arguments -----------------

# Блокът може да приема аргументи:

def sequence(first, last, step)
  current = first
  while current < last
    yield current
    current += step
  end
end

sequence(1, 10, 2) { |n| puts n }
# Извежда 1, 3, 5, 7, 9


# values ---------------------

# yield се оценява до стойността на блока:

def calculate
  result = yield(2)
  "The result for 2 is #{result}"
end

calculate { |x| x**2 } # "The result for 2 is 4"

# example ------------------

# Или как можем да напишем filter:

def filter(array)
  result = []
  array.each do |item|
    result << item if yield item
  end
  result
end

filter([1, 2, 3, 4, 5]) { |n| n.odd? } # [1, 3, 5]
# Разбира се, такъв метод в Ruby вече съществува – Enumerable#select.


# #block_given? ---------------------------

# block_given? ще ви каже дали методът е извикан с блок:

def i_can_haz_block
  if block_given?
    puts 'yes'
  else
    puts 'no'
  end
end

i_can_haz_block                  # no
i_can_haz_block { 'something' }  # yes


# & при извикване на метод -------------------

# Ако имате ламбда, която искате да подадете като блок, може да ползвате &:

is_odd = lambda { |n| n.odd? }

filter([1, 2, 3, 4, 5], &is_odd)
filter([1, 2, 3, 4, 5]) { |n| n.odd? }
# Горните са (почти) еквиваленти. Има малка разлика в някои други случаи.


# in a signature

# Ако искате да вземете блока като обект, има начин:

def invoke_with(*args, &block)
  block.call *args
end

invoke_with(1, 2) { |a, b| puts a + b }
# Тук виждате и как може да викате функция като използвате списък,
# вместо позиционни аргументи.


def make_block(&block)
  block
end

doubler = make_block { |n| n * 2 }
doubler.call 2 # 4
