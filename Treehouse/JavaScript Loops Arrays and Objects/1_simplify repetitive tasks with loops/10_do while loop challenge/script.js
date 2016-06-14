var secret
do {
  secret = prompt("What is the secret password?");
} while (secret !== "sesame")
  document.write("You know the secret password. Welcome.");

// codes below also work:
// var secret = prompt("What is the secret password?");
// while ( secret !== "sesame" ) {
//   secret = prompt("What is the secret password?");
// }
// document.write("You know the secret password. Welcome.");
