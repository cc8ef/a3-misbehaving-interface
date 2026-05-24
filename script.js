// console.log('hello')

// let blah = 4

// console.log(blah)

// if (blah == 3) {
//     console.log('it equals 3')
// } else {
//     console.log('hmm')
// }
// let counter = 0

// document.addEventListener('keydown', (event) => {
//     console.log(event.key)

//     if (event.key == ' ') {
//         if (counter == 4){
//             console.log('yay')
//         }
//         counter = counter + 1
//         console.log(counter)

//     }
// })

// document.getElementById("press").onclick = function() {myFunction()};

// function myFunction() {
//   document.getElementById("press").innerHTML = "YOU CLICKED ME!";
// }

// function onButtonClick() {
//     alert('You clicked me!');
// }

// function changeStyle() {
//     const theButton = document.getElementById("push").addEventListener('click', function() {
//         myButton.style.backgroundColor = 'green';
        
//             button.style.backgroundColor =
//                 "green";

//         })
//     }

// const myButton = document.getElementById('push');

// // Add a click event listener
// myButton.addEventListener('click', function() {
//   // Change the background color to green
//   myButton.style.backgroundColor = 'green';
//   // You can also change the text color
//   myButton.style.color = 'white'; 
// });
// // make this insible lol

// const theButton = document.getElementById("push").addEventListener('click', (event) => {
//     // console.log(event.key)

//     if (event.key = "click") {
//         console.log('hi')
//     }
// }
// )

document.getElementById("check").disabled = true;
// disabled the 'I understand' box so the user cannot click it, they can only unclick the 'I do not understand'

const myButton = document.getElementById('learnmore');

myButton.addEventListener('click', function() {
    history.back(-1)
}) 
// Really proud of this one! a button that takes you back to the last page in your history

//   let countdown;       // Interval ID
//     let timeLeft = 60;   // Initial time in seconds (change as needed)
//     let isRunning = false;

//     // Function to format time as MM:SS
//     function formatTime(seconds) {
//         const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
//         const secs = String(seconds % 60).padStart(2, '0');
//         return `${mins}:${secs}`;
//     }

//     // Update the display
//     function updateDisplay() {
//         document.getElementById('timer').textContent = formatTime(timeLeft);
//     }

//     // Start the countdown
//     function startTimer() {
//         if (isRunning) return; // Prevent multiple intervals
//         isRunning = true;
//         countdown = setInterval(() => {
//             if (timeLeft > 0) {
//                 timeLeft--;
//                 updateDisplay();
//             } else {
//                 clearInterval(countdown);
//                 isRunning = false;
//                 alert("Time's up!");
//             }
//         }, 1000);
//     }

let countDownTime = 60;
const countDownElement = document.getElementById('timer');
const interval = setInterval(function() {
    countDownTime--;
    countDownElement.textContent = countDownTime + ' seconds remaining';
    if (countDownTime <= 0) {
        clearInterval(interval);
        countDownElement.textContent = 'Time is up!';
    }
}, 1000);