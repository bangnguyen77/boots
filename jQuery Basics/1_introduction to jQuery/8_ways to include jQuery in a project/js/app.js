$(document).ready(function() {
	$(".warning").hide().show("slow");
});


/* the code below also works:
var myCode = function() {
	$(".warning").hide().show("slow");
}

$(document).ready(myCode);

*/

/* the code below also works:
function myCode() {
  $(".warning").hide().show("slow");
}

$(document).ready(myCode);
*/

/* the code below also works:
$(function () {
  $(".warning").hide().show("slow");
});

*/
