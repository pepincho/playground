def format_string(text, width)
  # 1) Remove spaces from begining and the end
  # and save the text value in a new variable just in case
  format_text = text.strip

  # 2) Replace the multiple spaces with just one
  format_text = format_text.gsub(/\s+/, ' ')

  # 3) Make all letters uppercase
  format_text.upcase! # note

  # 4) Add spaces in the begining and end if the string is too short.
  # The number of space on both sides must be either equal or one more on the right side
  text_length = format_text.length
  if text_length < width
    remaining = width - text_length
    left = (remaining / 2).floor
    right = remaining - left

    format_text = (' ' * left) + format_text + (' ' * right)
  end

  # 5) We're done. Return the result
  return format_text # note
end

# best answer
def format_string_2(string, width)
  string.strip.squeeze(' ').upcase.center(width)
end

