class String
  define_method(:title_case) do
    not_cap = ["a", "and", "the", "an", "but", "or", "on", "in", "with"]
    string_array = self.split(" ")
    string_array.each() do |word|
      string_array[0].capitalize!()
      if !(not_cap.include?(word))
        word.capitalize!()
      end
    end
    string_array.join(" ")
  end
end
