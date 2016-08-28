word = "oat"
breakfast = word
dinner = word

word.insert(0, 'g')

puts breakfast

puts('-' * 40)

puts("shut up".upcase())

puts("wonderful".sub("wonder", "color"))

num = 3.14
puts(num.floor)

puts(24.gcd 56)

puts("wonderful".sub "wonde", "colo")

puts('-' * 40)

favourite = "Chunky bacon" # local variable
Tax = "20%" # const variable
$important = "Money" # global variable

# There are also @name and @@name variables.

puts('-' * 40)

# Key words:

# alias   and    BEGIN   begin     break
# case    class  def     defined?  do
# else    elsif  END     end       ensure
# false   for    if      in        module
# next    nil    not     or        redo
# rescue  retry  return  self      super
# then    true   undef   self      super
# when    while  yield

puts('-' * 40)

# Types

# Цели числа
0
1729
-271
1_000_000
0377        # осмични
0b0100_0010 # двоични
0xDEADBEEF  # шестнадесетични

# Числа с плаваща запетая
0.0
3.14
-273.15
1.22e28
1_000.001

# Hashes
a = {'one' => 1, "two" => 2}
puts(a)

# Regular expressions
b = /(bb)|([^b]{2})/
puts(b)

# Areas
c = 2..6
puts(c)
d = 'a'...'z'
puts(d)

# Anonymous functions
e = lambda { |x| x ** 2 }
puts(e)
f = -> x { x ** 2 }
puts(f)

# Objects
# Person.new

puts('-' * 40)

puts 'Chunky bacon, I say!'
puts "Who is John Galt?"
puts "We're the knights who say \"Ni!\""
puts '\'0 freddled gruntbugly\' he begun'
puts 'This text contains\nno newlines'
puts "This text contains\none newline"

puts('-' * 40)

# Text operations

puts "%s bacon" % "Chunky"

text = "Chanky"
text[2] = "u"
text << " bacon"
puts text

"bacon\n".chop            # "bacon"
"bacon".chop              # "baco"
"bacon\n".chomp           # "bacon"
"bacon".chomp             # "bacon"
"Goodbye".include? 'oo'   # true
"Danube".length           # 6
"oat".insert 0, 'bl'      # "bloat"
"bloat".sub "bl", "m"     # "moat"
"bacon".upcase            # "BACON"
"BaCoN".downcase          # "bacon"

puts('-' * 40)

# Symbols - special type in Ruby

# :something, :other, :larodi
# Сходен на низ — immutable и интерниран
# Различни приложения

# Interpolation
# Работи при двойни кавички, не работи при единични

character = "Arthur"
answer = 42
puts "#{character} had it: #{answer}"

puts('-' * 40)

# Operators

# **  ~   /   %    +    -    &
# <<  >>  |   ^    >    <    >=   <=   <=>
# &&  ||  !   and  or   not  ||=  &&=
# =   +=  -=  *=   /=   %=   **=  >>=  <<=
# ^=  &=  |=  ..   ...  defined?

# nil = false
# false = false
# everything else is true
# 0, "" and [] are true

puts "foo" <=> "bar" # 1
puts "perl" < "ruby" # true
puts 20 > 20 # false
puts 5 <= 5 # true

puts('-' * 40)

# In ruby there are four operators for equality

# one == two
# one === two
# one.eql? two
# one.equal? two

# == and equal?
one = 'chunky bacon'
two = 'chunky bacon'
# one == two           # true
# one.equal? two       # false

# "интерниране"
one, two = 42, 42
# one == two      # true
# one.equal? two  # true

# Същото важи и за символи.

# q = "42"
# v = "42"
q, v = 'c', 'c'
puts q == v # true
puts q.equal? v # false

puts('-' * 40)

# Key word - IF

# if hungry? and sad?
#   eat_chocolate
#   listen_to_music
#   go :outside
# end

# if hungry?
#   eat
# else
#   drink
# end

# if hungry?
#   eat
# elsif thirsty?
#   drink
# else
#   philosophize
# end

# Each condition is an expression
age = 15
classification = if age < 13
                   'young person'
                 elsif age < 20
                   'teenager'
                 else
                   'old dude'
                 end
puts classification

# order = if hungry? then 'food' else 'coffee' end
# puts order

# unless is like a if not

# unless tired?
#   go_out_and_run
# end

puts('-' * 40)

# If we don't know something for Ruby we search in:
    # ri -> locally
    # Ruby-doc
    # APIDock
    # Google/Bing

# :name символ и е immutable, и се интернира.
# "name" е низ


"Ivan is here: #{0 == false}" # "Ivan is here: false"

010 + 010 > 1.7e1 # false

# Извеждате текст на екрана - някои грешки
# Резултат от функция е изразът, който е последен в нея,
# или този, който се връща чрез return
# Не очакваме нещо да се изписва на екрана
# Така резултатът може да бъде обработван допълнително

# Методите с ! променят обекта - това не е препоръчително
# String не е immutable
