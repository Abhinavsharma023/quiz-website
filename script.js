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
        options: [ "</DOCTYPE HTML>","</DOCTYPE>", "<!DOCTYPE HTML>","</DOCTYPE html>" ],
        answer: "<!DOCTYPE HTML>"
    },
    {
        numb: 3,
        question: "Which of the following HTML Elements is used for making any text bold?",
        options: [
            "<p>",
            "<i>",
            "<i>",
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





















const startbutton=document.querySelector('.start-btn');
const popuoinfo=document.querySelector('.popup-info');
const exitbtn=document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continuebtn=document.querySelector('.continue-btn');  // to continue the quiz
const quizsection=document.querySelector('.quiz-section');  // to show the quiz section
const quizbox=document.querySelector('.quizbox');  // to show the quiz section


startbutton.addEventListener('click',()=>{   // to show the popup
     popuoinfo.classList.add('show'); // to show the popup
    main.classList.add('hide');  // -->to hide the main page
});
exitbtn.addEventListener('click',()=>{   // to remove the popup
    popuoinfo.classList.remove('show');         // -->to remove the popup
    main.classList.remove('hide');  // -->to show the main page after removing the popup
});
continuebtn.addEventListener('click',()=>{   // to show the quiz section
    quizsection.classList.add('show');  // -->to show the quiz section
    popuoinfo.classList.remove('show');         // -->to remove the popup
    main.classList.remove('hide');  // -->to show the main page after removing the popup
    quizbox.classList.add('show');  // -->to show the quiz section
    showquestion(0);  // -->to show the first question

    questioncounter(questionnumber);  // -->to show the first question
});

let questioncount=0;
let questionnumber=1;

const nextbtn=document.querySelector('.next-btn');
    nextbtn.addEventListener('click',()=>{
        if (questioncount < questions.length) {
            questioncount++;
            showquestion(questioncount);
            questionnumber++; // to increase the number of total question
            questioncounter(questionnumber);  // function calling number of total question
        } else {
            alert('Quiz Completed!');
        }

    });

const optionlist=document.querySelector('.options-list');

              //getting the question from the questions.js file
              function showquestion(index){
                const questiontext=document.querySelector('.question-text');
                questiontext.textContent=`${questions[index].numb}. ${questions[index].question}`;
    let optiontag=`<div class="option"><span> ${questions[index].options[0]}</span></div>
                   <div class="option"><span> ${questions[index].options[1]}</span></div>
                   <div class="option"><span> ${questions[index].options[2]}</span></div>
                  <div class="option"><span> ${questions[index].options[3]}</span></div>
`;
        optionlist.innerHTML=optiontag;
            

      const option=document.querySelectorAll(".option");    // to get the option from the questions.js file   
      for(let i=0; i<option.length; i++){          // to get the option from the questions.js file         
            option[i].setAttribute("onclick","optionselected(this)");
      }
       
    
    };
            //   function to check the answer is correct or not
function optionselected(answer){
    let useranswer=answer.textContent;
    console.log(useranswer);
    let correctanswer = questions[questioncount].options[2];
     let alloptions=optionlist.children.length; // to get the all options
    if ( useranswer == correctanswer)
        {
        answer.classList.add('correct');
        console.log('Answer is correct');

    }
    else{
        answer.classList.add('incorrect');
        console.log('Answer is incorrect');
       // if the answer is incorrect then automatically select the correct answer
        for(let i=0; i< alloptions; i++){
            if(optionlist.children[i].textContent==correctanswer){
                optionlist.children[i].setAttribute('class','option correct');
            }
        }
    }
    // to prevent the user to select the other option after selecting the one option
    for(let i=0; i< alloptions; i++){
       optionlist.children[i].classList.add('disabled');
    }
}; 
              // function the incresing of number in the total question
                function questioncounter(index){
                    const totalquestion=document.querySelector('.question-total');
                    totalquestion.textContent=`${index}of${questions.length} Questions`;
                };