const socData = [
    {
        question: "What's your biggest reason for joining a student society?",
        id: 0,
        answerA: "I want to enjoy uni life beyond lectures—fun, creativity, connection.",
        idNextQuestionA: 1,
        answerB: "I want to grow academically, socially, or personally.",
        idNextQuestionB: 4
    },

    // Expression and enjoyment path questions
    {
        question: "When you picture your ideal group activity, it involves...",
        id: 1,
        answerA: "Movement - dance, performance, or action.",
        idNextQuestionA: 2,
        answerB: "Chill vibes - games, social chats, filming or creating stuff.",
        idNextQuestionB: 3
    },
    {
        question: "You're most in your element when you're…",
        id: 2,
        answerA: "On stage, in motion, or performing with a crowd",
        linkA: "../data/results.html?category=Active",
        answerB: "Pushing yourself physically, on a team, training, or competing",
        linkB: "../data/results.html?category=Sports",
    },
    {
        question: "What kind of people do you hope to meet?",
        id: 3,
        answerA: "Passionate creators/students that are into gaming, media, film, photography, podcasting",
        linkA: "../data/results.html?category=General",
        answerB: "People who share niche interests or quirky hobbies",
        linkB: "https://www.bcusu.com/get-involved/start-a-society/",
    },

    // Growth and purpose path questions
    {
        question: "What sounds more exciting right now?",
        id: 4,
        answerA: "Discovering ways to support your academic or career journey",
        idNextQuestionA: 5,
        answerB: "Finding a community that represents your identity or values",
        idNextQuestionB: 6
    },
    {
        question: "What would benefit you most in a society?",
        id: 5,
        answerA: "Course specific events, academic help, or career networking",
        linkA: "../data/results.html?category=Academic",
        answerB: "Use your skills to inspire others and make change",
        linkB: "../data/results.html?category=Liberation",
    },
    {
        question: "What kind of community do you want to be part of?",
        id: 6,
        answerA: "A space to connect over shared heritage, background, or faith",
        linkA: "../data/results.html?category=Faith",
        answerB: "I dont't know yet, still figuring it out",
        linkB: "../data/results.html?category=Adopt",
    },
]