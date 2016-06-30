require('sinatra')
require('sinatra/reloader')
require('./lib/title_case')
also_reload('lib/**/*.rb')

get('/') do
  erb(:index) # we'll need an .erb file named 'index' that will be served when a get request is made to our app
end

get('/title') do
  @title = params.fetch('title').title_case()
  erb(:title) # the page to display the title cased phrase
end
