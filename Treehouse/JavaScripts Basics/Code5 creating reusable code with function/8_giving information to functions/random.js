function getRandomNumber() {
  var randomNumber = Math.floor( Math.random() * 6 ) + 1;
  return randomNumber;
}

/*
console.log( getRandomNumber(6) );
console.log( getRandomNumber(100) );
console.log( getRandomNumber(10000) );
console.log( getRandomNumber(2) );
*/

function getArea(width, length, unit) {
  var area = width * length;
  return area + " " + unit;
}
console.log(getArea(10,20, 'sq ft'));
