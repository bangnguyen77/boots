var name;
var questionTracker = 1;
var antScore = 0;
var moonScore = 0;
var mtEvScore = 0;
var trenchScore = 0;

// Back-end logic
var evalQuestion= function(questionID) {
  var questionValue = $("input:radio[name="+questionID+"]:checked").val();
  if (questionValue === "ant") antScore++;
  if (questionValue === "trench") trenchScore++;
  if (questionValue === "mtEv") mtEvScore++;
  if (questionValue === "moon") moonScore++;
}

var nextQuestion = function() {
  $("#q"+(questionTracker)).hide();
  questionTracker++;
  $("#q"+questionTracker).fadeIn();
  if (questionTracker>5) displayResults();
}

var displayResults = function() {
  var resultString;
  var resultStringAppend;
  if (name) {
    resultStringAppend = "Hey, "+name+", y"
  } else {
    resultStringAppend = "Y"
  }
  if (antScore>trenchScore && antScore>moonScore && antScore>mtEvScore) {
    resultString=resultStringAppend+"ou might enjoy a relaxing cruise to the barren and frozen shores of Antarctica!";
  } else if (trenchScore>antScore && trenchScore>mtEvScore && trenchScore>moonScore) {
    resultString=resultStringAppend+"ou should take a trip to the abyssal depths of the Mariana Trench!";
  } else if (mtEvScore>moonScore && mtEvScore>trenchScore && mtEvScore>antScore) {
    resultString=resultStringAppend+"ou should follow in the footsteps of Jon Krakauer and hike on up to the summit of Mt. Everest!";
  } else {
    resultString=resultStringAppend+"ou might need a bigger suitcase. It's a pretty long haul to your ideal vacation destination: the moon!";
  }
  $("#results").text(resultString);
  $("#results").fadeIn();
}

// Front-end logic
$(document).ready(function(){
  // intro form script
  $("form#intro").submit(function(event){
    event.preventDefault();
    name = $("#name").val();
    $(this).hide();
    $("form#q1").fadeIn();
  });
  // quiz script

  $("form.question").submit(function(event){
    event.preventDefault();
    evalQuestion(this.id);
    nextQuestion();
  });
});
