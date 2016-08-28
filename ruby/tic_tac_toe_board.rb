def element_to_symbol(element)
    case(element)
        when nil then return "   "
        when :x  then return " x "
        when :o  then return " o "
    end
end

def render_tic_tac_toe_board_to_ascii_2(board)
    index = 0
    rendered_board = "|"

    begin
        rendered_board = rendered_board + element_to_symbol(board[index]) + "|"

        if ((index + 1) % 3 == 0 and index < 8)
            rendered_board = rendered_board + "\n" + "|"
        end

        index += 1

    end while (index <= 8)

end

tic_tac_toe_board = [
  nil, nil, :x,
  :o,  nil, :x,
  :o,  :x,  :o,
]


def render_tic_tac_toe_board_to_ascii_3(board)
  board.each_slice(3).to_a.map { |elem|  row_to_string(elem) }.join("\n")
end

def row_to_string(row)
  "|" + row.map {|elem| " " +  (elem ? elem.to_s : " ")  + " "}.join("|") + "|"
end


def render_tic_tac_toe_board_to_ascii_4(board)
    board.map{ |element| element.nil? ? " " : element.to_s}.each_slice(3).to_a.
    map{ |element| element.join(" | ").insert(0,"| ") + " |\n"}.join.strip
end


def render_tic_tac_toe_board_to_ascii_5(board)
  symbol_map = {nil => "   ", :o => " o ", :x => " x "}
  board.each_slice(3).inject("") do |output, row|
    output += "|" + row.map { |symbol| symbol_map[symbol] } * "|" + "|\n"
  end.rstrip
end
