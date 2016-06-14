var secondsPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;
var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
document.write('There are ' + secondsPerDay + ' seconds in a day.');

var minsPerDay = minsPerHour * hoursPerDay;
document.write('There are ' + minsPerDay + ' minutes in a day.');

var secondsPerYear = secondsPerDay * daysPerWeek * weeksPerYear;
document.write('There are ' + secondsPerYear + ' seconds in a year.');

var yearAlive = 38;
var myYearAliveInSeconds = yearAlive * secondsPerYear;
document.write("I've been alive more than " + myYearAliveInSeconds + " seconds.");
