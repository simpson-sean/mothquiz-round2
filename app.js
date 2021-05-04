import { countsAsYes } from "./utils.js";

//Declare constants
const quizButton = document.getElementById('quiz-button1')
const userResults = document.getElementById('user-results')



//state



//events

quizButton.addEventListener('click', () => {
    
    //Presents Quiz Welcome Message
    alert('Welcome to Moth Quiz!');

    //Confirms if User wants to take quiz
    const wantsQuiz = confirm('Are you sure?');
        if (wantsQuiz === false) {
            return;
        }
    //Collects Users First and Last name    
    const firstName = prompt('What is your first name?');
    const lastName = prompt('What is your last name?');

    //Sets Users base score
    let userScore = 0;
    
    //Asks Questions and Collects Answers
    const userAnswer1 = prompt('Is a moth the same as a butterfly?');
        if (!countsAsYes(userAnswer1)) {
            userScore = userScore + 1;
        }
    const userAnswer2 = prompt('Are moths nocturnal?');
        if(countsAsYes(userAnswer2)) {
            userScore = userScore + 1;
        }
    const userAnswer3 = prompt('Are moths like spiders?');
        if(!countsAsYes(userAnswer3)) {
            userScore = userScore + 1;
        }
    
    
   userResults.textContent = `Good job, ${firstName} ${lastName}! You got ${userScore} out of 3!`;





});