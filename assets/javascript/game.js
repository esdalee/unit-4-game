
// Initialize variables
var goalNum = 0;
var totalSum = 0;
var winCounter = 0;
var lossCounter = 0;
var gem1 = 0;
var gem2 = 0;
var gem3 = 0;
var gem4 = 0;

startRound();

$("#totalSum").text(totalSum);
$("#win-counter").text(winCounter);
$("#loss-counter").text(lossCounter);

// Randomize goal number and numbers for each gem
function startRound () {
    goalNum = Math.floor(Math.random() * 120) + 19;
    $("#goalNum").text(goalNum);
    gem1 = Math.floor(Math.random() * 12) + 1;
    gem2 = Math.floor(Math.random() * 12) + 1;
    gem3 = Math.floor(Math.random() * 12) + 1;
    gem4 = Math.floor(Math.random() * 12) + 1;
    play();
    updateScore();
}

function play() {
    // Click events for each gem
    $("#gem1").on("click", function() {
        totalSum = totalSum + gem1;
    });

    $("#gem2").on("click",function(){
        totalSum = totalSum + gem2;
    });

    $("#gem3").on("click",function(){
        totalSum = totalSum + gem3;
    });

    $("#gem4").on("click",function(){
        totalSum = totalSum + gem4;
    });
};


function updateScore() {
    // If number is correct, update win-counter
    if (totalSum === goalNum) {
        winCounter = winCounter++;
        $("#win-counter").text(winCounter);
        startRound();
    };

    // If number isn't correct, update with loss couunter
    if (totalSum > goalNum) {
        lossCounter = lossCounter++;
        $("#loss-counter").text(lossCounter);
        startRound();
    };

    $("#totalSum").text(totalSum);
    $("#win-counter").text(winCounter);
    $("#loss-counter").text(lossCounter);
};
