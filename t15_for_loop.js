// Name of task: For Loop

console.log("Running t15_for_loop.js")
console.log("Hello")

// Constants
const OUTPUT = document.getElementById ("spaceForJavaScriptOutput");
const BOTTLE_FIELD = document.getElementById("bottleField");

// Variables

// Functions
function sing () {
    for (let i=15; i>=0; i--) {
        console.log("Bottles of milk: " + i);
        OUTPUT.innerHTML += "<p>" + i + " bottles of milk on the wall, <br>" + i + " bottles of milk; <br> If one of those bottles should happen to fall... <br> </p>"
        OUTPUT.innerHTML += "<p>" + i + " bottles of milk on the wall!</p>"
    }
}