// Init with first question
let currentQuestion = socData[0];

function createAnswerHTML(answerText) {
    const urlMatch = answerText.match(/(https?:\/\/[^\s]+)/);
    if (!urlMatch) return answerText;

    const url = urlMatch[0];
    const label = answerText.replace(url, '').replace(/:\s*$/, '').trim();

    return `<a href="${url}">${label}</a>`;
}


// Question handler function
const displayQuestion = (questionData) => {

    // Display question text
    document.getElementById("question").textContent = questionData.question;

    // Button A
    const answerABtn = document.getElementById("answerABtn");
    if (questionData.answerA) {
        const answerHTML = createAnswerHTML(questionData.answerA);
        answerABtn.innerHTML = answerHTML;
        answerABtn.onclick = () => handleAnswer(questionData.idNextQuestionA);
    } else {
        answerABtn.style.display = 'none'; 
    }

    // Button B
    const answerBBtn = document.getElementById("answerBBtn");
    if (questionData.answerB) {
        const answerHTML = createAnswerHTML(questionData.answerB);
        answerBBtn.innerHTML = answerHTML;
        answerBBtn.onclick = () => handleAnswer(questionData.idNextQuestionB);
    } else {
        answerBBtn.style.display = 'none'; 
    }
};



// Handle answer button click
const handleAnswer = (idNextQuestion) => {
    // find next question via id tag
    const nextQuestion = socData.find(q => q.id === idNextQuestion);
    if (nextQuestion) {
        currentQuestion = nextQuestion;

        // Show the next question when nextQuestion value
        displayQuestion(nextQuestion); 
    }
}

// Start the quiz by displaying the first question
displayQuestion(currentQuestion);
