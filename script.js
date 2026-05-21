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

const myButton = document.getElementById('push');

// Add a click event listener
myButton.addEventListener('click', function() {
  // Change the background color to green
  myButton.style.backgroundColor = 'green';
  // You can also change the text color
  myButton.style.color = 'white'; 
});
// make this insible lol

const theButton = document.getElementById("push").addEventListener('click', (event) => {
    // console.log(event.key)

    if (event.key = "click") {
        console.log('hi')
    }
}
)