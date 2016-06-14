function getRandomNumber (upper, lower) {
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
}

console.log(getRandomNumber(2, 5));
console.log(getRandomNumber(23, 45));
