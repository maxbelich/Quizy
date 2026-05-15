let questions = [
  {
    question: "What does HTML stand for?",
    answer_1: "Hyper Trainer Marking Language",
    answer_2: "Hyper Text Markup Language",
    answer_3: "Home Tool Markup Language",
    answer_4: "Hyper Transfer Markdown Language",
    right_answer: 2,
  },

  {
    question: "Which method adds an element to the end of an array?",
    answer_1: "push()",
    answer_2: "pop()",
    answer_3: "shift()",
    answer_4: "slice()",
    right_answer: 1,
  },

  {
    question: "What does document.getElementById() return?",
    answer_1: "A CSS class",
    answer_2: "An HTML element",
    answer_3: "An array",
    answer_4: "A number",
    right_answer: 2,
  },

  {
    question: "Which loop runs at least once?",
    answer_1: "for",
    answer_2: "while",
    answer_3: "foreach",
    answer_4: "do while",
    right_answer: 4,
  },

  {
    question: "What does event.stopPropagation() do?",
    answer_1: "Deletes the event",
    answer_2: "Hides the element",
    answer_3: "Stops event bubbling",
    answer_4: "Ends the function",
    right_answer: 3,
  },

  {
    question: "Which symbol is used for comments in JavaScript?",
    answer_1: "//",
    answer_2: "##",
    answer_3: "<!-- -->",
    answer_4: "**",
    right_answer: 1,
  },

  {
    question: "Which keyword creates a variable in JavaScript?",
    answer_1: "make",
    answer_2: "int",
    answer_3: "let",
    answer_4: "create",
    right_answer: 3,
  },

  {
    question: "What does CSS stand for?",
    answer_1: "Creative Style Sheets",
    answer_2: "Cascading Style Sheets",
    answer_3: "Computer Styled Sections",
    answer_4: "Colorful Style Syntax",
    right_answer: 2,
  },

  {
    question: "Which operator checks both value and type in JavaScript?",
    answer_1: "=",
    answer_2: "==",
    answer_3: "!=",
    answer_4: "===",
    right_answer: 4,
  },

  {
    question: "What is the result of 2 + '2' in JavaScript?",
    answer_1: "4",
    answer_2: "22",
    answer_3: "NaN",
    answer_4: "undefined",
    right_answer: 2,
  },
];

let currentQuestion = 0;

function init() {
  document.getElementById("all_questions").innerHTML = questions.length;
  showCurrentQuestion();
}

function showCurrentQuestion() {
  let question = questions[currentQuestion];
  document.getElementById("questionText").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer_1"];
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1);

  let rightAnswer = `answer_${question["right_answer"]}`;

  if (selectedQuestionNumber == question["right_answer"]) {
    document.getElementById(selection).parentNode.classList.add("bg-success");
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document.getElementById(rightAnswer).parentNode.classList.add("bg-success");
  }
}

