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
        for (var i = 0; i < questions[questionNumber].questionText.length; i++) {
            $('.question-span').text(questions[questionNumber].questionText[i]);
        }

        for (var i = 0; i < questions[questionNumber].answers.length; i++) {
            $(".answer-ctr").append("<div class=\"answers\">" + questions[questionNumber].answers[i] + "</div>");
            $(questions.answered).hide();
        }


        //selecting answer
        $('.answers').click(function() {
            var selected = $('.answers').index(this);
            
            //console.log("answer #" + (selected + 1) + " has been clicked" );
            if (selected == questions[player.answered].correct) {
                console.log("answer #" + (selected + 1) + " is the correct answer!");
                player.score++
            } else {
                console.log("answer #" + (selected + 1) + " is the wrong answer.");
            }
            
            player.answered++;
            if (player.answered < questions.length){
                showScore();
                showQuestion(player.answered)
            } else {
              $('.quiz-ctr').hide();
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
$('.score-value').text(player.score + " out of " + questions.length);
$('#answered').text("Question number " + (1 + player.answered) + " out of " + questions.length);
}


// The actual questions and answers in arrays
questions[0] = new Question(
  ["Test question #1"],
  ["answer 1", "correct answer 2", "answer 3", "answer 4"],
  1,
  "Explanation for why it's correct."
);

questions[1] = new Question(
  ["Test question #2"],
  ["answer 1", "answer 2", "correct answer 3", "answer 4"],
  2,
  "Explanation for why it's correct."
);

questions[2] = new Question(
  ["Test question #3"],
  ["correct answer 1", "answer 2", "answer 3", "answer 4"],
  0,
  "Explanation for why it's correct."
);

questions[3] = new Question(
  ["Test question #4"],
  ["answer 1", "correct answer 2", "answer 3", "answer 4"],
  1,
  "Explanation for why it's correct."
);

questions[4] = new Question(
  ["Test question #5"],
  ["answer 1", "answer 2", "answer 3", "correct answer 4"],
  3,
  "Explanation for why it's correct."
);
    