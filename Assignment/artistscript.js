document.body.onload = function() {myFunction()};
function myFunction() {
    let person = prompt("Please enter your name");
    if (person != null) {
        alert("What's good, " + person + ", I'm GloRilla.");
    }
}