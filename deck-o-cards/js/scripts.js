$(function () {
  var cardValues = ['A',"2","3",'4','5','6','7','8','9','10','J','Q','K'];
  var cardSuits = ["Clubs","Spades","Diamonds","Hearts"];
  var cardDeck = [];
  cardSuits.forEach(function(cardSuit){
    cardValues.forEach(function(cardValue){
      cardDeck.push(cardValue + " of " + cardSuit);
    });
  });
  cardDeck.forEach(function(card){
    document.write("<li>"+card+"</li>");
  });
});



//
// var suits = ['spades', 'hearts', 'clubs', 'diamonds'];
// var ranks = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10,'jack', 'queen', 'king'];
//
// suits.forEach(function(suit) {
//   cards.forEach(function(card) {
//     $('ul').append('<li>' + card + ' of ' + suit + '</li>');
//     // $('#deck').show();
//     // $('.btn').hide();
//   });
// });
