
// create the variables for all of my HTML elements
var countingNumber = 0;
var wins = 0;
var losses = 0;




// Create random number to guess

var numberToGuess = document.getElementById("winning-number").innerHTML =
    Math.floor(Math.random() * 50) + 20;

// create for loops that will go through the 
// crystal image arrays and set the value of the crystal images 

var redCrystalPoint = (Math.floor(Math.random() * 12) + 1);
console.log(redCrystalPoint);

var greenCrystalPoint = (Math.floor(Math.random() * 12) + 1);
console.log(greenCrystalPoint);

var blueCrystalPoint = (Math.floor(Math.random() * 12) + 1);
console.log(blueCrystalPoint);

var yellowCrystalPoint = (Math.floor(Math.random() * 12) + 1);
console.log(yellowCrystalPoint);


// Link in 4 different images and make them clickable

$("#red-crystal").on("click", function () {
    $("#counting-number").html("<h1>Your current number: " + countingNumber + "</h1>");
    countingNumber += redCrystalPoint;
    console.log(countingNumber);
    gameover();
});
$("#green-crystal").on("click", function () {
    $("#counting-number").html("<h1>Your current number: " + countingNumber + "</h1>");
    countingNumber += greenCrystalPoint;
    console.log(countingNumber);
    gameover();
});
$("#blue-crystal").on("click", function () {
    $("#counting-number").html("<h1>Your current number: " + countingNumber + "</h1>");
    countingNumber += blueCrystalPoint;
    console.log(countingNumber);
    gameover();
});
$("#yellow-crystal").on("click", function () {
    $("#counting-number").html("<h1>Your current number: " + countingNumber + "</h1>");
    countingNumber += yellowCrystalPoint;
    console.log(countingNumber);
    gameover();
});
function reset() {
    countingNumber = 0;
    numberToGuess = numberToGuess = document.getElementById("winning-number").innerHTML =
        (Math.floor(Math.random() * 100) + 1);

}
function gameover() {

    if (countingNumber === numberToGuess) {
        alert("You win!");
        wins++;
        reset();


    }
    if (countingNumber > numberToGuess) {
        alert("You lost!");
        losses++;
        reset();

    }
    $("#wins-number").html("<h1>Wins: " + wins + "</h1>");
    $("#losses-number").html("<h1>Losses: " + losses + "</h1>");

}