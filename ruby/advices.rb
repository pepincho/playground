## Не се грижете за невалиден вход, ако не е казано изрично

# unless string.nil?
#   # код ...
# end

## string
# Усложнява кода
# Ако string е nil, така или иначе някъде програмата ще се счупи


## String и Enumerable


## My guiding light is Kent Becks rules of Simple Design (източник):
# 1. The code must first be correct (as defined by tests);
# 2. then it should be a clear statement of the design
# (what J.B.Rainsberger calls "no bad names");
# 3. then it should contain no duplication
# (of text, of ideas, or of responsibility);
# 4. and finally it must be the smallest code that meets all of the above.

# It's time to stop refactoring when the code makes a reasonable stab at meeting
# those goals, and when any further changes would add no further benefit.
