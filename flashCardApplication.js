// Import the full list of questions
var q = require('./questions.js');

// Store the list of question in the 'questions' variable
var questions = q.questions;

// The array to store the questions
var questionsArr = [];

// Populate the questions array
for (var i = 0; i < questions.length; i++) {
	console.log(questions[i].full);
	console.log(questions[i].cloze);
	console.log('-------------------------------------');
}
