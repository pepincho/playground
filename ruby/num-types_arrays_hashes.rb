# Низове (String)
# Числа – цели (Fixnum) и с плаваща запетая (Float)
# Булеви стойности (истина и лъжа) – TrueClass, FalseClass
# Нищото – NilClass

# Има още видове числа
# Много големи цели числа – Bignum (core)
# Числа с голяма точност – BigDecimal (stdlib)

# Рационални числа – Rational
# Създават се с Rational(a, b) или с литерален синтаксис (само в 2.1): 0.1r

# Комплексни числа – Complex
Complex(1)           # (1+0i)
Complex(2, 3)        # (2+3i)
Complex('0.3-0.5i')  # (0.3-0.5i)
Complex('2/3+3/4i')  # ((2/3)+(3/4)*i)

## #to_s и #inspect
# Един обект се обръща до низ с #to_s. Има и друг вариант, #inspect,
# който го обръща до текстов низ,
# изглеждащ като ruby код. Целта е инспектиране.

# puts(something) извежда something.to_s
# p(something) извежда something.inspect

# хилядите значения на диез
# В рамките на един ред, всичко след # е коментар
# В контекст на документация, означава инстанционен метод — #puts, Array#inject
# В низ с двойни кавички, предшества интерполация – "The answer: #{40 + 2}"


## Arrays ------------------------------->

# Класът се казва Array - има литерален синтаксис
# Дефинират се така: [1, 2, 3, 4]
# Хетерогенни: [18, :female, 'Burgas']
# Напълно mutable
# Могат да се влагат, както всички колекции
# Неограничен, нестатичен размер
# Пазят референции, а не копия към елементите си
# Имплементирани са като C масив

# Индексиране

numbers = [:zero, :one, :two]
puts numbers[1] # :one
puts numbers[10]  # nil
puts numbers[-1]  # :two

numbers[5] = :five
numbers[5]   # :five
numbers      # [:zero, :one, :two, nil, nil, :five]

# fetch
# Array#fetch хвърля грешка или връща друга стойност,
# при индексиране извън обема на масива:
# ползва се рядко

# numbers = [:zero, :one, :two]

# numbers.fetch(1)            # :one

# numbers.fetch(10)           # error: IndexError
# numbers.fetch(10) { |n| puts "#{n} isn't in array" } # вместо IndexError, се изпълнява кодът между { }

# numbers.fetch(10, :dunno)   # :dunno
# numbers[10] or :dunno       # като предното, ама не точно


numbers = [3, 1, 2, 4]
numbers.length  # 4
numbers.size    # 4
numbers.sort    # [1, 2, 3, 4]
numbers.reverse # [4, 2, 1, 3]
numbers[1..2]   # [1, 2]
# sort и reverse връщат нов масив, без да променят numbers

# ------------

#include? ви казва дали масив съдържа даден елемент.
prime_digits = [2, 3, 5, 7]

prime_digits.include? 2    # true
prime_digits.include? 4    # false
# Внимание: линейно търсене. Подходящо за малки списъци.

# ------------

[:a, :b, :c] + [:d, :e]             # [:a, :b, :c, :d, :e]
[:a, :b, :c, :b, :a] - [:b, :c, :d] # [:a, :a]
[:a, :b, :c] & [:b, :c, :d]         # [:b, :c]
[:a, :b, :c] | [:b, :c, :d]         # [:a, :b, :c, :d]
# & и | конкатенират списъците и премахват повторенията.

# В Ruby има множества, които са по-удачни в повечето случаи.

# ------------
puts('-' * 40)
# мутиране

numbers = [1, 2, 3]

numbers << 4
p numbers   # [1, 2, 3, 4]

numbers.insert 0, :zero
p numbers   # [:zero, 1, 2, 3, 4]

result = numbers.delete_at(0)
p result    # :zero
p numbers   # [1, 2, 3, 4]

# ------------
puts('-' * 40)


stack = [1, 2, 3]

stack.push 4
p stack         # [1, 2, 3, 4]

top = stack.pop
p stack         # [1, 2, 3]
p top           # 4
#shift и #unshift са аналогични, но работят с началото на масива.


# ------------
puts('-' * 40)

[1, 2, 3].join("-")        # "1-2-3"
[1, 2, 3].permutation      # сещате се какво връща
[1, 2].product([3, 4])     # [[1, 3], [1, 4], [2, 3], [2, 4]]
[[1, 2], [3, 4]].transpose # [[1, 3], [2, 4]]
[1, 2, 3, 4].shuffle       # разбърква масива произволно


# ------------
puts('-' * 40)

# последната запетая
# Може да оставите запетая след последния елемент на масива. Така редовете се разместват по-лесно. Важи и за хешове.

songs = [
  'My Favorite Things',
  'Alabama',
  'A Love Supreme',
]

# ------------
puts('-' * 40)


# Има специален синтаксис за масив от думи.

p %w(chunky bacon)     == ['chunky', 'bacon']
p %w[a b c]            == ['a', 'b', 'c']
p %w{cool stuff}       == ['cool', 'stuff']
p %w<coffee tea water> == ['coffee', 'tea', 'water']
p %w|foo bar|          == ['foo', 'bar']
p %w@foo bar@          == ['foo', 'bar']
# Може да използвате различни видове символи,
# които да ограждат думите от масива:

# ! @ # $ * - _
# Този списък от символи е непълен.

# ------------
puts('-' * 40)

## Array#slice -----------------

# Всички списъци имат метод slice
#{ }"Операторът" за индексиране [] е всъщност метод на Array,
# който е синоним на slice
# Може да приема индекс, област (range), както и индекс плюс брой елементи
# Следователно може да връща един елемент или цял подмасив
# Методът-setter []= от своя страна позволява
# и да променяте въпросните отрязъци от масива

numbers = [1, 2, 3, 4, 5, 6]

numbers[0..2]   # [1, 2, 3]
numbers[-3..-1] # [4, 5, 6]
numbers[1, 1]   # [2]

numbers[0..2] = [:wat]

numbers         # [:wat, 4, 5, 6]

p numbers[0]
p numbers[1]

# ------------
puts('-' * 40)

# Iteration --------------

# Итерира се с #each, както всичко останало в Ruby:

primes = [2, 3, 5, 7, 11]

primes.each { |n| puts n }

primes.each do |n|
  puts n
end

# Sidenote: for --------------

# В Ruby има оператор for
# Вътрешно вика #each
# Намираме го за ужасно лош стил
# По-голяма част от community-то също

# ------------

# "Къдрави скоби" и do/end

# По конвенция, фигурни скоби се ползват, когато целият блок е на един ред
# do/end се ползва, когато блокът е няколко реда
# Това е конвенцията, която ще спазваме ние

# ------------
puts('-' * 40)

## Hashes --------------------------->

# Важна част в програмирането на Ruby
# Майсторското овладяване е задължително!
# Още: хеш таблици, асоциативен списък, речник, map

# Класът е Hash, но има и литерален синтаксис – {}
# Дефинират се така: {1 => :one, 2 => :two}
# Ключовете трябва да могат да се хешират: числа, низове, символи, списъци
# По възможност, ключовете трябва да са immutable
# От Ruby 1.9 насам редът на ключовете се запазва


# индексиране

numbers = {:one => :eins, :two => :zwei}

numbers[:one]     # :eins
numbers[:three]   # nil

numbers[:three] = :drei

numbers[:three]                     # :drei
numbers.fetch(:four, :keine_ahnung) # :keine_ahnung
# numbers.fetch(:four)                # error: KeyError

# ------------
puts('-' * 40)

# Iteration

numbers = {:one => :eins, :two => :zwei}
numbers.keys    # [:one, :two]
numbers.values  # [:eins, :zwei]

numbers.each { |pair| puts pair }
numbers.each { |key, value| puts key, value }

# ------------
puts('-' * 40)


numbers = {1 => 2, 3 => 4}

numbers.has_key?(:three) # false
numbers.size             # 2
numbers.invert           # {2=>1, 4=>3}
numbers.merge({5 => 6})  # {1=>2, 3=>4, 5=>6}
numbers.to_a             # [[1, 2], [3, 4]]
Hash[1, 2, 3, 4]         # {1=>2, 3=>4}


# Долните два реда произвеждат еднакви хешове.
# Второто е 1.9+ синтаксис и ще предпочитаме него по конвенция (когато може):

{:one => 1, :two => 2}
{one: 1, two: 2}


# -----------------
# Списъци и хешове -------------------------------------

# И като цяло всичко, що може да се обхожда (т.е. е Enumerable)

