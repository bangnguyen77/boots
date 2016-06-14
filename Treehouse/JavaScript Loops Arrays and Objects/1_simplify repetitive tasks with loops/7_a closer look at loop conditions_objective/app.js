var secret = prompt("What is the secret password?");
while (secret !== "sesame") {
  secret = prompt("Wrong answer! Try again.");
}
document.write("You know the secret password. Welcome.");
