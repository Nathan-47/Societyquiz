// Init with first question
let currentQuestion = socData[0];

function matchAnswer(answerText) {
    // Try to find a URL starting with http:// or https:// in the answerText
    const urlMatch = answerText.match(/(https?:\/\/[^\s]+)/);
    if (!urlMatch) return answerText;

    const url = urlMatch[0];
    
    // Remove the URL from the answerText, then remove a trailing colon and whitespace if any, and trim extra spaces
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
    // convert answerA data to HTML using matchAnswer function
    const answerHTML = matchAnswer(questionData.answerA);
    answerABtn.innerHTML = answerHTML;
    answerABtn.onclick = () => {
        
        // If there is a linkA property, navigate the browser to that URL
        if (questionData.linkA) {
            let target = question.linkA;

            if (!target.startsWith("http")) {
                target = "../data/pages" + target; 
            }
            window.location.href = target;
        } else {
            handleAnswer(questionData.idNextQuestionA);
        }
    };
} else {
    answerABtn.style.display = 'none';

}


// Button B
const answerBBtn = document.getElementById("answerBBtn");
if (questionData.answerB) {
    const answerHTML = matchAnswer(questionData.answerB);
    answerBBtn.innerHTML = answerHTML;
    answerBBtn.onclick = () => {
        if (questionData.linkB) {
            let target = question.linkB;

            if (!target.startsWith("http")) {
                target = "../data/pages" + target; 
            }
            window.location.href = target;
        } else {
            handleAnswer(questionData.idNextQuestionB);
        }
    };
} else {
    answerBBtn.style.display = 'none';
}

};


// Handle answer function
const handleAnswer = (idNextQuestion) => {
    // find next question via id tag
    const nextQuestion = socData.find(q => q.id === idNextQuestion);
    if (nextQuestion) {
        currentQuestion = nextQuestion;
        displayQuestion(nextQuestion); 
    }
}

displayQuestion(currentQuestion);
