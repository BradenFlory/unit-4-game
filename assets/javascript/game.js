var redCrystal = [1, 5, 8, 16];
var greenCrystal = [2, 4, 6, 15];
var blueCrystal = [3, 11, 9, 12];
var yellowCrystal = [7, 13, 14, 10];
var countingNumber = 0

// Create random number to guess

document.getElementById("winning-number").innerHTML =
    Math.floor(Math.random() * 50) + 35;

// Link in 4 different images and make them clickable


for (var i = 0; i < redCrystal.length; i++) {

}
for (var i = 0; i < greenCrystal.length; i++) {

}
for (var i = 0; i < blueCrystal.length; i++) {

}
for (var i = 0; i < yellowCrystal.length; i++) {

}

$("#red-crystal").on("click", function () {
    var redCrystal = document.getElementById("counting-number");
    document.getElementById(countingNumber).innerHTML = redCrystal;
    console.log("New Score: " + countingNumber);
});
$("#green-crystal").on("click", function () {
    console.log("New Score: " + countingNumber);
});
$("#blue-crystal").on("click", function () {
    console.log("New Score: " + countingNumber);
});
$("#yellow-crystal").on("click", function () {
    console.log("New Score: " + countingNumber);
});

// Each image will be given a certain value
    // That value will randomize each round


//when the counting number equals the number to guess, player wins the game.
// If the player goes over the number to guess, they lose.



// var numberToWin = 53;

// $("#winning-number").text(numberToWin);

// var counter = 0;
// var numberOptions = [10, 5, 3, 7];
// for (var i = 0; i < numberOptions.length; i++) {
//     var imageCrystal = $("<img>");
//     imageCrystal.addClass("crystal-image");
//     imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
//     imageCrystal.attr("data-crystalvalue", numberOptions[i]);
//     $("#crystals").append(imageCrystal);
// }

// $(".crystal-image").on("click", function () {
//     var crystalValue = ($(this).attr("data-crystalvalue"));
//     crystalValue = parseInt(crystalValue);
//     counter += crystalValue;
//     alert("New score: " + counter);
//     if (counter === numberToWin) {
//         alert("You win!");
//     }
//     else if (counter >= numberToWin) {
//         alert("You lose!!");
//     }

// });