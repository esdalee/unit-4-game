$(document).ready(function() {

    // Initialize variables
    var userTotal = 0;
    var winCounter = 0;
    var lossCounter = 0;
    var goalNum = randomizeNum(19, 120);

    // Display starting numbers and counters
    $("#goalNum").html(goalNum);
    $("#win-counter").html(winCounter);
    $("#loss-counter").html(lossCounter);

    // Start game
    randomizeGem();

    // Functions below

    // Randomize numbers with range min to max
    function randomizeNum(min, max) {
        randomizedNum = Math.floor(Math.random() * (max-min)+1) + min;
        return randomizedNum;
    }

    // Assign randomized numbers to each gem
    function randomizeGem() {
        var gems = ["#gem1", "#gem2", "#gem3", "#gem4"];
        for (var i = 0; i < gems.length; i++) {
            var gemNum = randomizeNum(1,12);
            $(gems[i]).val(gemNum);
        }
    }

    // Click handling for the gems
    $("#gem1, #gem2m #gem3, #gem4").click(function() {
        var num = parseInt(this.value);
        userTotal += num;
        $("#userTotal").html(userTotal);

        // If number is correct, update win-counter and alert user
        if (userTotal === goalNum) {
            winCounter = winCounter++;
            $("#win-counter").html(winCounter);
            alert("Bling bling! Great job, that's a win!")
            startRound();
        }

        // If number isn't correct, update with loss couunter and alert user
        else if (userTotal > goalNum) {
            lossCounter = lossCounter++;
            $("#loss-counter").html(lossCounter);
            alert("Booo no $ for you. Try again!")
            startRound();
    };

    // Reset round
    function startRound() {
        userTotal = 0;
        goalNum = randomizeNum(19, 120);
        randomizeGem();
        $("#goalNum").html(goalNum);
        $("#userSum").html(userTotal);
    }
});
});
