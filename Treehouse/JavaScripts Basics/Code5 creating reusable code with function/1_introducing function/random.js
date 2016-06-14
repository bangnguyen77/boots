
function alertRandom() {
  var randomNumber = Math.floor( Math.random() * 6 ) + 1;
  alert(randomNumber);
}

alertRandom();
alertRandom();
alertRandom();

/* Function expression - this also works
var alertRandom = function () {
  var randomNumber = Math.floor( Math.random() * 6 ) + 1;
  alert(randomNumber);
}

  alertRandom();
*/
