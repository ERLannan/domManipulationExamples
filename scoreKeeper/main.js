var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var score = document.querySelector("#scoreHeader");
var numSelector = document.querySelector("#numberSelector");
var playingTo = document.querySelector("span");

var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winScore = 5;

p1Button.addEventListener("click", function() {
    incrementScore("p1");
});

p2Button.addEventListener("click", function() {
    incrementScore("p2");
});

resetButton.addEventListener("click", resetScore);

numSelector.addEventListener("change", function(e) {
    winScore = this.value;
    playingTo.textContent = this.value;
    resetScore();
});

function incrementScore(player) {
    if(gameOver === false) {
        var pName = "";
        console.log(player+" scored!");
        if(player === "p1") {
            pName = "Player 1";
            p1Score++;
        } else if(player === "p2") {
            pName = "Player 2";
            p2Score++;
        }
        
        if(p1Score > winScore-1 || p2Score > winScore-1) {
            score.textContent = pName + " won!";
            score.classList.toggle("winner");
            gameOver = true;
        } else {
            updateScore();
        }
    }
}

function updateScore() {
    score.textContent = p1Score + " to " + p2Score;
}

function resetScore() {
    p1Score = 0;
    p2Score = 0;
    gameOver = false;
    score.classList.toggle("winner");
    updateScore();
}