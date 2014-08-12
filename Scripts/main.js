var questions = Array();
var player;

$(document).ready(function() {
    console.log("hello world");
    //Setting Up Game
    $('.start-ctr').show();
    $('.quiz-ctr').hide();
    $('.result-ctr').hide();

    // Button to Start Quiz
    $('.start-button').click(function() {
        console.log("Game Started");
        $('.start-ctr').hide();
        $('.quiz-ctr').show();
        $('.result-ctr').hide();

        player = new Player();

        showScore();
        showQuestion(player.answered);
    });


    // show question and answers
    function showQuestion(questionNumber) {
        var questionItem = $("<div class='question' id='question-" + questionNumber + "'></div>");

        //for (var i = 0; i < questions[questionNumber].questionText.length; i++) {
            questionItem.append(questions[questionNumber].questionText);
        //}

        for (var i = 0; i < questions[questionNumber].answers.length; i++) {
            questionItem.append("<div class=\"answers\">" + questions[questionNumber].answers[i] + "</div>");
           //$(questions.answered).hide();
        }
        $("#quiz-ctr").append(questionItem)

        //selecting answer
        $('.answers').click(function() {
            var selected = $(this).index();

            $('#question-' + (player.answered)).hide();

            if (selected == questions[player.answered].correct) {
                console.log("answer #" + (selected + 1) + " is the correct answer!");
                player.score++
                //flashing green background on correct
                $('#wrapper').css("background", "green");
                  setTimeout(function(){
                  $('#wrapper').css("background", "black");
                  }, 200);

            } else {
                console.log("answer #" + (selected + 1) + " is the wrong answer.");
                //flashing red background on correct
                $('#wrapper').css("background", "red");
                  setTimeout(function(){
                  $('#wrapper').css("background", "black");
                  }, 200);

            }
            
            //checking if it's the last question
            player.answered++;
            if (player.answered < questions.length){
                showScore();
                showQuestion(player.answered)
                //$('#question-' + player.answered).show();
            } else {
              $('.quiz-ctr').hide();
              $('.score-value').hide();
              $('.result-ctr').show();
              showScore();
            }
            //show next question until it's on the last one
            
            
        });

    }
});

// Question Object: includes question, answer choices, correct answer (by index), and an explanation
function Question(questionText, answers, correct, explanation) {
    this.questionText = questionText;
    this.answers = answers;
    this.correct = correct;
    this.explanation = explanation;
}

// Player object for starting game
function Player() {
    this.score = 0;
    this.answered = 0;
}

// Show Score as user progresses through quiz (class is ".score-value")
function showScore () {
$('.score-value').text("Total: " + player.score + " points");
$('.score-value2').text("Your Score: " + player.score + " points of a possible 5");
$('#answered').text("Question number " + (1 + player.answered) + " out of " + questions.length);
}


// The actual questions and answers in arrays
questions[0] = new Question(
  ["According to the CDC, which of the following is the \"perfect\" way to purify contaminated water for drinking?"],
  ["Boiling the water for 1 full minute.", "Filtering the water through a coffee filter.", "Distilling the water, collecting vapor and cooling it again.", "None of the above."],
  3,
  "None of these methods is perfect. The best solution is to use all of them. Start with a filter to remove large debris, then boil the water to kill microbes and bacteria, and then distill if possible to remove heavy metals and other contaminants. "
);

questions[1] = new Question(
  ["According to the CDC, which of these is the best place to look for clean water during the zombie apocalypse?"],
  ["Standing puddles", "Open containers", "Your home's hot water tank", "An ocean"],
  2,
  "Your home's hot water heater is filled with tap water that is safe to drink. Standing water outdoors should be avoided at all costs. Any water found outdoors should be treated, even if it's from a moving stream. Saltwater for the ocean should only be consumed after it has been distilled and the salt has been removed. "
);

questions[2] = new Question(
  ["According to the CDC, which of the following is the best food to consume during a disaster with no power and limited water supply?"],
  ["Saltine crackers", "Bacon", "Canned foods with high water content", "Zombie leftovers"],
  2,
  "Canned foods are safe, stay fresh without refrigeration, and can be carried with you. Foods with high fat, protein  and salt content should be avoided when your water supply is low. These foods force the body to use more water for digestion. Zombie leftovers should always be avoided, regardless of your water supply."
);

questions[3] = new Question(
  ["According to the CDC, which of the following food items can be stored indefinitely during the zombie apocalypse?"],
  ["Powdered Milk", "Canned Fruits", "Peanut Butter", "Dried Pasta"],
  3,
  "Powered milk is only safe for six months, canned fruits and peanut butter are safe for up to a year, but dried pasta can be stored indefinitely if kept in a cool, dry, sealed container."
);

questions[4] = new Question(
  ["According to the CDC, how long can perishable foods be left out at room temperature?"],
  ["30 minutes", "2 hours", "4 hours", "24 hours"],
  1,
  "Explanation for why it's correct."
);
    