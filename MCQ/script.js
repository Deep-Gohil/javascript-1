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

// Function to calculate time away from tab
function calculateAwayTime() {
    if (tabSwitchTime) {
        let currentTime = new Date().getTime();
        let timeDiff = currentTime - tabSwitchTime;
        awayTimeSeconds += Math.round(timeDiff / 1000);
        tabSwitchTime = null;
    }
}

// Event listener for when tab visibility changes
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'hidden') {
        tabSwitchTime = new Date().getTime();
    } else if (document.visibilityState === 'visible' && tabSwitchTime !== null) {
        calculateAwayTime();
        // this.documentElement.getElementById("tabchange").innerHTML = `You were away for ${awayTimeSeconds} seconds.`
        alert(`You were away for ${awayTimeSeconds} seconds.`);
        awayTimeSeconds = 0; // Reset away time
    }
});

// Function to periodically check away time if the tab is not active
function startAwayTimeCheck() {
    setInterval(function() {
        if (document.visibilityState === 'hidden' && tabSwitchTime !== null) {
            calculateAwayTime();
        }
    }, 1000); // Check every second
}

// Start checking away time
startAwayTimeCheck();


const API = async () => {
    let request = await fetch('https://json-server-deployment-7yxg.onrender.com/questions');
    let response = await request.json();
    return response;
}

let correctAnswers = 0

const chekeAnswer = async (index, selectedOption,btn) => {
    let data = await API();
    let correctAnswer = data[index].answer;

    if (selectedOption === correctAnswer) {
        btn.style.backgroundColor = "green"
        correctAnswers++;
    } else {
        alert(`Answer for question ${index + 1} is incorrect!`);
        btn.style.backgroundColor = "red"
    }
   document.getElementById("correctAnswer").innerHTML = `Total Correct Answer ${correctAnswers}`
}



const Mapper = async () => {
    let data = await API();
    data.forEach((ele, index) => {
        let div = document.createElement('div');
        div.classList.add("div")
        
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
        optionThree.addEventListener('click', () => { chekeAnswer(index, ele.option3,optionThree); });

        let optionFour = document.createElement('button');
        optionFour.innerHTML = ele.option4;
        optionFour.addEventListener('click', () => { chekeAnswer(index, ele.option4,optionFour); });

        let hr = document.createElement('hr')

        div.append(question, optionOne, optionTwo, optionThree, optionFour);
        document.getElementById('questions').append(div,hr);
    });
}
document.addEventListener("contextmenu", (e)=>{
    e.preventDefault();
    alert("Right click disabled");
})
Mapper();


