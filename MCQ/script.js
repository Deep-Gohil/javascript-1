// document.addEventListener('DOMContentLoaded', async function() {
//     try {
//         const stream = await navigator.mediaDevices.getUserMedia({ video: true });

//         const videoElement = document.createElement('video');
//         videoElement.autoplay = true;
//         videoElement.srcObject = stream;

//         document.getElementById('camero').append(videoElement);
//     } catch (error) {
//         console.error('Error accessing the camera:', error);
//     }
// });

// let tabSwitchTime = null;
// let awayTimeSeconds = 0;

// function calculateAwayTime() {
//     if (tabSwitchTime) {
//         let currentTime = new Date().getTime();
//         let timeDiff = currentTime - tabSwitchTime;
//         awayTimeSeconds += Math.round(timeDiff / 1000);
//         tabSwitchTime = null;
//     }
// }

// document.addEventListener('visibilitychange', function() {
//     if (document.visibilityState === 'hidden') {
//         tabSwitchTime = new Date().getTime();
//     } else if (document.visibilityState === 'visible' && tabSwitchTime !== null) {
//         calculateAwayTime();
//       alert(`You were away for ${awayTimeSeconds} seconds.`);
//         awayTimeSeconds = 0;
//     }
// });

// function startAwayTimeCheck() {
//     setInterval(function() {
//         if (document.visibilityState === 'hidden' && tabSwitchTime !== null) {
//             calculateAwayTime();
//         }
//     }, 1000); 
// }
// startAwayTimeCheck();

// const API = async () => {
//     let request = await fetch('https://json-server-deployment-7yxg.onrender.com/questions');
//     let response = await request.json();
//     return response;
// }

// let correctAnswers = 0

// const chekeAnswer = async (index, selectedOption,btn) => {
//     let data = await API();
//     let correctAnswer = data[index].answer;

//     if (selectedOption === correctAnswer) {
//         btn.style.backgroundColor = "green"
//         correctAnswers++;
//     } else {
//         alert(`Answer for question ${index + 1} is incorrect!`);
//         btn.style.backgroundColor = "red"
//     }
//    document.getElementById("correctAnswer").innerHTML = `Total Correct Answer: ${correctAnswers}`
// }

// const Mapper = async () => {
//     let data = await API();
//     data.forEach((ele, index) => {
//         let div = document.createElement('div');
//         div.classList.add("div")
        
//         let question = document.createElement('h1');
//         question.innerHTML = ele.question;

//         let optionOne = document.createElement('button');
//         optionOne.innerHTML = ele.option1;
//         optionOne.addEventListener('click', () => { chekeAnswer(index, ele.option1, optionOne); });

//         let optionTwo = document.createElement('button');
//         optionTwo.innerHTML = ele.option2;
//         optionTwo.addEventListener('click', () => { chekeAnswer(index, ele.option2, optionTwo); });

//         let optionThree = document.createElement('button');
//         optionThree.innerHTML = ele.option3;
//         optionThree.addEventListener('click', () => { chekeAnswer(index, ele.option3,optionThree); });

//         let optionFour = document.createElement('button');
//         optionFour.innerHTML = ele.option4;
//         optionFour.addEventListener('click', () => { chekeAnswer(index, ele.option4,optionFour); });

//         let hr = document.createElement('hr')

//         div.append(question, optionOne, optionTwo, optionThree, optionFour);
//         document.getElementById('questions').append(div,hr);
//     });
// }
// document.addEventListener("contextmenu", (e)=>{
//     e.preventDefault();
//     alert("Right click disabled");
// })
// Mapper();



document.addEventListener('DOMContentLoaded', async function() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });

        const videoElement = document.createElement('video');
        videoElement.autoplay = true;
        videoElement.srcObject = stream;

        document.getElementById('camero').append(videoElement);
    } catch (error) {
        console.error('Error accessing the camera:', error);
    }
});

let tabSwitchTime = null;
let awayTimeSeconds = 0;

function calculateAwayTime() {
    if (tabSwitchTime) {
        let currentTime = new Date().getTime();
        let timeDiff = currentTime - tabSwitchTime;
        awayTimeSeconds += Math.round(timeDiff / 1000);
        tabSwitchTime = null;
    }
}

document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'hidden') {
        tabSwitchTime = new Date().getTime();
    } else if (document.visibilityState === 'visible' && tabSwitchTime !== null) {
        calculateAwayTime();
        alert(`You were away for ${awayTimeSeconds} seconds.`);
        awayTimeSeconds = 0;
    }
});

function startAwayTimeCheck() {
    setInterval(function() {
        if (document.visibilityState === 'hidden' && tabSwitchTime !== null) {
            calculateAwayTime();
        }
    }, 1000); 
}
startAwayTimeCheck();

const API = async () => {
    let request = await fetch('https://json-server-deployment-7yxg.onrender.com/questions');
    let response = await request.json();
    return response;
}

let correctAnswers = 0;

const chekeAnswer = async (index, selectedOption, btn) => {
    let data = await API();
    let correctAnswer = data[index].answer;

    if (selectedOption === correctAnswer) {
        btn.style.backgroundColor = "green";
        correctAnswers++;
    } else {
        alert(`Answer for question ${index + 1} is incorrect!`);
        btn.style.backgroundColor = "red";
    }
    document.getElementById("score").innerHTML = `Total Correct Answers: ${correctAnswers}`;
}

let currentQuestionIndex = 0;
let data = [];

const showQuestion = (index) => {
    document.querySelectorAll('.question-container').forEach((element, idx) => {
        if (idx === index) {
            element.classList.remove('hidden');
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
            element.classList.add('hidden');
        }
    });
}

const Mapper = async () => {
    data = await API();
    data.forEach((ele, index) => {
        let div = document.createElement('div');
        div.classList.add('question-container', 'hidden',"div");
        
        let question = document.createElement('h1');
        question.innerHTML = ele.question;

        let optionOne = document.createElement('button');
        optionOne.innerHTML = ele.option1;
        optionOne.addEventListener('click', () => { chekeAnswer(index, ele.option1, optionOne); });

        let optionTwo = document.createElement('button');
        optionTwo.innerHTML = ele.option2;
        optionTwo.addEventListener('click', () => { chekeAnswer(index, ele.option2, optionTwo); });

        let optionThree = document.createElement('button');
        optionThree.innerHTML = ele.option3;
        optionThree.addEventListener('click', () => { chekeAnswer(index, ele.option3, optionThree); });

        let optionFour = document.createElement('button');
        optionFour.innerHTML = ele.option4;
        optionFour.addEventListener('click', () => { chekeAnswer(index, ele.option4, optionFour); });

        div.append(question, optionOne, optionTwo, optionThree, optionFour);
        document.getElementById('questions').append(div);
    });
    showQuestion(currentQuestionIndex);
}

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Right click disabled");
});

document.getElementById('next').addEventListener('click', () => {
    if (currentQuestionIndex < data.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    }
});

document.getElementById('prev').addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
});

document.getElementById('end').addEventListener('click', () => {
    document.getElementById('questions').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('result').innerHTML = `Quiz ended! You answered ${correctAnswers} out of ${data.length} questions correctly.`;
});

let timer = 60 * 5;
const startTimer = () => {
    const timerElement = document.getElementById('timer');
    const interval = setInterval(() => {
        let minutes = Math.floor(timer / 60);
        let seconds = timer % 60;
        timerElement.innerHTML = `Time left: ${minutes}m ${seconds}s`;

        if (timer <= 0) {
            clearInterval(interval);
            document.getElementById('questions').classList.add('hidden');
            document.getElementById('result').classList.remove('hidden');
            document.getElementById('result').innerHTML = `Time's up! You answered ${correctAnswers} out of ${data.length} questions correctly.`;
        }

        timer--;
    }, 1000);
}

Mapper();
startTimer();