require('rspec')
require('./lib/title_case')

describe('String#title_case') do
  it('capitalizes the first letter of a word') do
    expect(("beowolf").title_case()).to(eq("Beowolf"))
  end

  it('capitalizes the first letter of all words in a multiple word title') do
    expect(('the color purple').title_case()).to(eq("The Color Purple"))
  end

  it('does not capitalize some special words') do
    expect(('hello world from a an the').title_case()).to(eq("Hello World from a an the"))
  end

  it('always capitalize the first letter of the word of the sentence') do
    expect(('the story is left in the car').title_case()).to(eq('The Story Is Left in the Car'))
  end
end
