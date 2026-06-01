// Name of task: For Loop

console.log("Running t15_for_loop.js")
console.log("Hello")

// Constants
const OUTPUT = document.getElementById ("spaceForJavaScriptOutput");
const BOTTLE_FIELD = document.getElementById("bottleField");

// Variables

// Functions
function sing () {
    for (let BOTTLE_FIELD=15; BOTTLE_FIELD>=0; BOTTLE_FIELD--) {
        OUTPUT.innerHTML += "<p>" + BOTTLE_FIELD + " bottles of milk on the wall, <br>" + BOTTLE_FIELD + " bottles of milk; <br> If one of those bottles should happen to fall... <br>" + (BOTTLE_FIELD-1) +  " bottles of milk on the wall!</p>"
        console.log("Bottles of milk: " + BOTTLE_FIELD);
    }
}