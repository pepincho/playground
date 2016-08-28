def fibonacci(n)
    return 1 if n == 1
    return 1 if n == 2

    fibonacci(n - 1) + fibonacci(n - 2)
end

def lucas(n)
    return 2 if n == 1
    return 1 if n == 2

    lucas(n - 1) + lucas(n - 2)
end

def summed(n)
    fibonacci(n) + lucas(n)
end

def series(type, n)
    case type
    when "fibonacci" then fibonacci(n)
    when "lucas" then lucas(n)
    when "summed" then summed(n)
    end
end


puts series("fibonacci", 15)
puts series("lucas", 15)
puts series("summed", 15)

##  other solution ----------------------------

# http://mathforum.org/library/drmath/view/51448.html
PHI = (1 + Math.sqrt(5)) / 2

def fibonacci(n)
  ((PHI**n - (-PHI)**(-n)) / Math.sqrt(5)).round
end

def lucas(n)
  (PHI**(n - 1) + (1 - PHI)**(n - 1)).round
end

def series(name, n)
  case name
    when "fibonacci" then fibonacci(n)
    when "lucas" then lucas(n)
    when "summed" then lucas(n) + fibonacci(n)
  end
end

##  other solution ----------------------------

class SumOfPreviousTwoRecursiveSeries
  def initialize(first_element, second_element)
    @series_holder = Hash.new {
      |hash,key| hash[key] = hash[key - 1] + hash[key - 2]
    }
    @series_holder[1], @series_holder[2] = first_element, second_element
  end
  def get_by_index(n)
    @series_holder[n]
  end
end

class Fibonacci
  def get_by_index(n)
    SumOfPreviousTwoRecursiveSeries.new(1, 1).get_by_index(n)
  end
end

class Lucas
  def get_by_index(n)
    SumOfPreviousTwoRecursiveSeries.new(2, 1).get_by_index(n)
  end
end

class Summed
  def get_by_index(n)
    Fibonacci.new.get_by_index(n) + Lucas.new.get_by_index(n)
  end
end

def series(name, n)
  Object.const_get(name.capitalize).new.get_by_index(n)
end
