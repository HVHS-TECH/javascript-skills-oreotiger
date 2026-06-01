/****************************
Name of task: Arrays Continued
****************************/
console.log("Running t16_arrays_continued.js")
console.log("Hello")

// Constants
const OUTPUT = document.getElementById ("spaceForJavaScriptOutput");
const NAME_FIELD = document.getElementById("nameField");
const AGE_FIELD = document.getElementById("ageField");
const MONEY_FIELD = document.getElementById("moneyField");
const CHOOSE_FIELD = document.getElementById("chooseField");

// Variables
let userAge = Number (AGE_FIELD.value);
let userName = "Beatrix";
let currentYear = 2026;
let userBirthYear = currentYear - userAge;
let userMoney = Number (MONEY_FIELD.value);
let choose = Number (CHOOSE_FIELD.value);
let classArray = ["I hate chocolate", "Chocolate is whatever", "Chocolate is pretty good", "Chocolate is awesome!" ]


//Functions
function welcome(){
    OUTPUT.innerHTML += "<p>Welcome to the shop</p>";
}

function displayProduct (_name, _price){
    OUTPUT.innerHTML += "<p>" + _name + ": $" + _price + "</p>"
}

function calculateChange (_money, _price) {
    change = addUserMoney - 4;
    return change;
}

function chocolate () {
    choice = Number (CHOOSE_FIELD.value);
    classArray = [" ' I hate chocolate'", " 'Chocolate is whatever'", " 'Chocolate is pretty good'", " 'Chocolate is awesome!'" ]
    OUTPUT.innerHTML += "<p>You chose" + classArray[choice] + ". </p>"
}

function cart () {

}

function start (){
// Submit button
    spaceForJavaScriptOutput.innerHTML
    userName = NAME_FIELD.value
    OUTPUT.innerHTML = "<p>Your name is " + userName + "</p>"
    userAge = Number (AGE_FIELD.value);
    OUTPUT.innerHTML += "<p>Your age is " + userAge + "</p>"
    olderUserAge = userAge + 10;
    userMoney = Number (MONEY_FIELD.value);
    halfUserMoney = userMoney / 2;
    addUserMoney = halfUserMoney + 3;
    userBirthYear = currentYear - userAge;
    change = addUserMoney - 4;

// JS and HTML Output
    welcome()
    displayProduct("Chocolate Bar", 4)
    displayProduct("Chips", 3)
    displayProduct("Drink", 2.50)
    OUTPUT.innerHTML += "<p>Hi " + userName + "</p>";
    OUTPUT.innerHTML += "<p>As of " + currentYear + " you are " + userAge + " years old.</p>";
    OUTPUT.innerHTML += "<p>You were born in " + userBirthYear + "</p>";
    OUTPUT.innerHTML += "<p>In 10 years you will be " + olderUserAge + " years old.</p>";
    OUTPUT.innerHTML += "<p>You have " + userMoney + " dollars.</p>"
    OUTPUT.innerHTML += "<p>You spent half of your money, now you have " + halfUserMoney + " dollars.</p>"
    OUTPUT.innerHTML += "<p>Then you get $3, now you have " + addUserMoney + " dollars.</p>"
    if (addUserMoney >= 4) {
        calculateChange(userMoney, 4);
        OUTPUT.innerHTML += "<p>A chocolate bar costs $4. <br> You CAN afford a chocolate bar. <br> You will get $" + change + " change. </p></p> "
    } else {
        OUTPUT.innerHTML += "<p>A chocolate bar costs $4. <br> Sorry you CAN'T afford a chocolate bar. <br> You will get no change. </p> "
    }

  //Console Output
    console.log("Hi " + userName)
    console.log("As of " + currentYear + " you are " + userAge + " years old.")
    console.log("You were born in " + userBirthYear)
    console.log("In 10 years you will be " + olderUserAge + " years old")
    console.log("You have " + userMoney + " dollars.")
    console.log("You spent half of your money, now you have " + halfUserMoney + " dollars")
    console.log("Then you get $3, now you have " + addUserMoney + " dollars")
}
