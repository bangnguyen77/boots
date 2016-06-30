require('capybara/rspec')
require('./app')
Capybara.app = Sinatra::Application
set(:show_exceptions, false)

describe('the title case path', {:type => :feature}) do
  it('processes the user entry and returns it title cased') do
    visit('/') # In plain English, the spec reads: visit the '/' route,
    fill_in('title', :with => 'green eggs and ham') # fill in the 'title' field with the text 'green eggs and ham',
    click_button('Send') # click the 'Send' button
    expect(page).to have_content('Green Eggs and Ham') 
  end
end
