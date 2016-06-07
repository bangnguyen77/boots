
var suits = ['spades', 'hearts', 'clubs', 'diamonds'];
var ranks = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10,'jack', 'queen', 'king'];

suits.forEach(function(suit) {
  cards.forEach(function(card) {
    $('ul').append('<li>' + card + ' of ' + suit + '</li>');
  });
});
