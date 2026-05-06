// JS and HTML link
const OUTPUT = document.getElementById ("spaceForJavaScriptOutput")
OUTPUT.innerHTML = "<h3>Added by JavaScript</h3>";
OUTPUT.innerHTML += "<p>Hi</p> + userName";
OUTPUT.innerHTML +=
OUTPUT.innerHTML +=
OUTPUT.innerHTML +=
OUTPUT.innerHTML +=
OUTPUT.innerHTML +=

/****************************
Name of task:
****************************/
console.log("Running t05_JavaScript_and_HTML.js")
console.log("Hello")

// Variables
let userName = "Beatrix";
let userAge = 15.5;
let currentYear = 2026;
let userBirthYear = currentYear - userAge;

let userMoney = 25;
let spentMoney = userMoney / 2;
let giftMoney = spentMoney + 3;

/****************************
Main code
****************************/
console.log("Hi " + userName);
console.log("As of " + currentYear + " you are " + userAge + " years old.")
console.log("You were born in " + userBirthYear)
console.log("In 10 years you will be " + (userAge + 10) + " years old")
console.log("You have " + userMoney + " dollars.")
console.log("You spent half of your money, now you have " + spentMoney + " dollars")
console.log("Then you get $3, now you have " + giftMoney + " dollars")
/****************************
Functions
****************************/

