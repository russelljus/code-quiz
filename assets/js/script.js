// Add question array here
var questions = [
    {
      title: "How do you reference your JavaScript page in your html file?:",
      options: ["<script src=filenamehere></script>", "<link rel= href=filenamehere>", "You don't need to!", "./filenamehere"],
      answer: "<script src=filenamehere></script>"
    },
    {
      title: "How do you begin a for loop?",
      options: ["i=1-9", "(0<i<9)", "(i=0;i<9;i++)", "i++=i<9"],
      answer: "(i=0;i<9;i++)"
    },
    {
      title: "How do you create a comment in JavaScript?",
      options: ["//comment here", "<!--comment here-->", "|comment here|", " /comment here\ "],
      answer: "//comment here"
    },
    {
      title: "Does JavaScript depend on case sensitive language",
      options: ["Yes", "No", "Only on Tuesdays", "Definitely not"],
      answer: "Yes"
    }, 
    // change this quesiton below 
    {   
        title: "How do you create a comment in JavaScript?",
        options: ["//comment here", "<!--comment here-->", "|comment here|", " /comment here\ "],
        answer: "//comment here"
      },
]
var questionIndex = 0;  // question indexes that may keep track quiz state and time 
var time = questions.length * 15;
var timerId;
// Golbal variable that connect our js functions with our Html classes & Ids
var questionsElement = document.getElementById("questions");
var timerElement = document.getElementById("time");
var choicesElement= document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtnElement = document.getElementById("start");
var initialsElement = document.getElementById("initials");
var feedbackElement = document.getElementById("feedback");

// Start function that hides start screen, removes hide class from functions and starts timer
function timeIncement(){
    time = time -1
    timerElement.textContent = time
    if(time <= 0){console.log("Quiz is over")}
}
function QuizStart(){
    var startScreen = document.getElementById("start-screen")
    startScreen.setAttribute("class","hide")
    questionsElement.removeAttribute("class")
    timerId = setInterval(timeIncement,1000)
    timerElement.textContent = time
    // Grab question function 
    GrabQuestion()

}
// function that displays questions and creates buttons based on question answers
 function GrabQuestion(){
     //  question object from array
  var currentQuestion = questions[questionIndex];
 
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.title;
  // clear out any old question choices
  choicesElement.innerHTML = "";
  // loop over choices
  currentQuestion.options.forEach(function(option, i) {
    // create new button for each choice
    var choiceButton= document.createElement("button");
    choiceButton.setAttribute("class", "choice");
    choiceButton.setAttribute("value", option);
    choiceButton.textContent = i + 1 + ". " + option;
    // attach click event listener to each choice
    // choiceButton.onclick = questionClick;
    // display on the page
    choicesElement.appendChild(choiceButton);
  });
 }   
// function to check if answer is correct or not

// Quiz end function that stops timer with a clear interval, hides question screen, removes hide from end screen 

// function to save high scores 

// click events that link buttons with above functions 
startBtnElement.onclick = QuizStart