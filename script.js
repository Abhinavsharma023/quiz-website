


















let questions = [
    {
        numb: 1,
        question: "What does HTML stand for?",
        answer: "3. Hypertext Markup Language.",
        options: [
            "1. Hypertext Machine language.",
            "2. Hypertext and links markup language.",
            "3. Hypertext Markup Language.",
            "4. Hightext machine language."
        ],
    },
    {
        numb: 2,
        question: "How is document type initialized in HTML5?",
        options: ["</DOCTYPE HTML>", "</DOCTYPE>", "<!DOCTYPE HTML>", "</DOCTYPE html>"],
        answer: "<!DOCTYPE HTML>"
    },
    {
        numb: 3,
        question: "Which of the following HTML Elements is used for making any text bold?",
        options: [
            "<p>",
            "<i>",
            "<b>",
            "<b>"
        ],
        answer: "<b>"
    },
    {
        numb: 4,
        question: "What is the font-size of the h1 heading tag?",
        options: [
            "3.5em",
            "2em",
            "2.17em",
            "1.5em"
        ],
        answer: "2em"
    },
    {
        numb: 5,
        question: "Which of the following attributes is used to add link to any element?",
        options: [
            "link",
            "ref",
            "href",
            "newref"
        ],
        answer: "href"
    }
];

const startbutton = document.querySelector('.start-btn');
const popuoinfo = document.querySelector('.popup-info');
const exitbtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continuebtn = document.querySelector('.continue-btn');
const quizsection = document.querySelector('.quiz-section');
const quizbox = document.querySelector('.quizbox');

startbutton.addEventListener('click', () => {
    popuoinfo.classList.add('show');
    main.classList.add('hide');
});

exitbtn.addEventListener('click', () => {
    popuoinfo.classList.remove('show');
    main.classList.remove('hide');
});

continuebtn.addEventListener('click', () => {
    quizsection.classList.add('show');
    popuoinfo.classList.remove('show');
    main.classList.remove('hide');
    quizbox.classList.add('show');
    showquestion(0);
    questioncounter(1);
});

let questioncount = 0;
let questionnumber = 1;

const nextbtn = document.querySelector('.next-btn');
nextbtn.addEventListener('click', () => {
    if (questioncount < questions.length - 1) {
        questioncount++;
        showquestion(questioncount);
        questionnumber++;
        questioncounter(questionnumber);
    } else {
        alert('Quiz Completed!');
    }
});

const optionlist = document.querySelector('.options-list');

function showquestion(index) {
    const questiontext = document.querySelector('.question-text');
    questiontext.textContent = `Q ${questions[index].numb}. ${questions[index].question}`;
    
    optionlist.innerHTML = ''; // Clear previous options
    questions[index].options.forEach(option => {
        const optionDiv = document.createElement('div');
        optionDiv.classList.add('option');
        
        const span = document.createElement('span');
        span.textContent = option; // Use textContent to avoid rendering HTML
        
        optionDiv.appendChild(span);
        optionDiv.setAttribute("onclick", "optionselected(this)");
        
        optionlist.appendChild(optionDiv);
    });
}

function optionselected(answer) {
    let useranswer = answer.textContent.trim();
    let correctanswer = questions[questioncount].answer.trim();
    let alloptions = optionlist.children.length;
    if (useranswer === correctanswer) {
        answer.classList.add('correct');
        console.log('Answer is correct');
    } else {
        answer.classList.add('incorrect');
        console.log('Answer is incorrect');
        for (let i = 0; i < alloptions; i++) {
            if (optionlist.children[i].textContent.trim() === correctanswer) {
                optionlist.children[i].setAttribute('class', 'option correct');
            }
        }
    }
    for (let i = 0; i < alloptions; i++) {
        optionlist.children[i].classList.add('disabled');
    }
}

function questioncounter(index) {
    const totalquestion = document.querySelector('.question-total');
    totalquestion.textContent = `${index} of ${questions.length} Questions`;
}