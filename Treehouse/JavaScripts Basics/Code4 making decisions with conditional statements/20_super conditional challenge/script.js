// set up varialbes
var money = 9;
var today = 'Friday'


if ( money >= 100 && today === 'Friday' ) {
  alert("Time to go to the theater");
} else if ( money >= 50 && today === 'Friday' ) {
  alert("Time for a movie and dinner");
} else if ( money > 10 && today === 'Friday' ) {
  alert("Time for a movie");
} else if ( today === 'Friday' && money < 10 ) {
  alert("It's Friday, but I don't have enough money to go out");
} else {
  alert("This isn't Friday. I need to stay home.");
}
