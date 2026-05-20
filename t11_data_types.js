/****************************
Name of task:
****************************/
console.log("Running t11_data_types.js")
console.log("Hello")

// Constants
const OUTPUT = document.getElementById ("spaceForJavaScriptOutput");
const NAME_FIELD = document.getElementById("nameField");
const AGE_FIELD = document.getElementById("ageField");

// Variables
let userAge = Number(AGE_FIELD.value);
let userName = "Beatrix";
let currentYear = 2026;
let userBirthYear = currentYear - userAge;

let userMoney = 25;
let spentMoney = userMoney / 2;
let giftMoney = spentMoney + 3;

//Functions
function welcome(){
    //Add a line to the HTML page
    OUTPUT.innerHTML += "<p>Welcome to the shop</p>";
}
function displayProduct (_name, _price){
    OUTPUT.innerHTML += "<p>" + _name + ": $" + _price + "</p>"
}
function start (){
    spaceForJavaScriptOutput.innerHTML
    spaceForJavaScriptOutput.innerHTML
    answer = currentYear - userAge;
    spaceForJavaScriptOutput.innerHTML
}

function getFormInput(){
    userName = NAME_FIELD.value;
    OUTPUT.innerHTML = "<p>Your name is " + userName + "</p>"
    userAge = AGE_FIELD.value;
    OUTPUT.innerHTML += "<p>Your age is " + userAge + "</p>"
}


// JS and HTML link
function start (){
    OUTPUT.innerHTML += "<h2>Added to JavaScript</h2>";
    OUTPUT.innerHTML += "<h3>Added by JavaScript</h3>";
    OUTPUT.innerHTML += "<p>Hi " + userName + "</p>";
    OUTPUT.innerHTML += "<p>As of " + currentYear + " you are " + userAge + " years old.</p>";
    OUTPUT.innerHTML += "<p>You were born in " + userBirthYear + "</p>";
    OUTPUT.innerHTML += "<p>In 10 years you will be " + (userAge + 10) + " years old.</p>";
    OUTPUT.innerHTML += "<p>You have " + userMoney + " dollars.</p>"
    OUTPUT.innerHTML += "<p>You spent half of your money, now you have " + spentMoney + " dollars.</p>"
    OUTPUT.innerHTML += "<p>Then you get $3, now you have " + giftMoney + " dollars.</p>"

    /****************************
    Main code
    ****************************/
    welcome()
    displayProduct("Chocolate Bar", 4)
    displayProduct("Chips", 3)
    displayProduct("Drink", 2.50)
    console.log("Hi " + userName);
    console.log("As of " + currentYear + " you are " + userAge + " years old.")
    console.log("You were born in " + userBirthYear)
    console.log("In 10 years you will be " + (userAge + 10) + " years old")
    console.log("You have " + userMoney + " dollars.")
    console.log("You spent half of your money, now you have " + spentMoney + " dollars")
    console.log("Then you get $3, now you have " + giftMoney + " dollars")
}
