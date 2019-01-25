var colors = [];
var goalColor = "";
var bgColor = "#232323";
var isEasyMode = false;
var colorDisplay = document.querySelector("#colorDisplay");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("newColorButton");
var easyButton = document.getElementById("easyButton");
var hardButton = document.getElementById("hardButton");

init();

setInterval(resetGame, 200);


function init() {
    setListeners();
    resetGame();
    updateDifficultyButtons();
}

function setListeners() {
    //Set colors to the game squares
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function name(params) {
            compareColor(this, this.style.backgroundColor);
        });
    }

    resetButton.addEventListener("click", function() {
        resetGame();
    });

    easyButton.addEventListener("click", function () {
        isEasyMode = true;
        resetGame();
    })

    hardButton.addEventListener("click", function () {
        isEasyMode = false;
        resetGame();
    })
}

function updateDifficultyButtons() {
    if (isEasyMode) {
        easyButton.classList.add("selected");
        hardButton.classList.remove("selected");
    } else {
        easyButton.classList.remove("selected");
        hardButton.classList.add("selected");        
    }
}

function resetGame() {
    updateDifficultyButtons();
    setupGameColors();
    updateSquareColors();
    setupDisplay();
}

function compareColor(btn, guessedColor) {
    console.log("guess: " + guessedColor + " goalColor: " + goalColor);
    if (guessedColor === goalColor) {
        messageDisplay.textContent = "You Won!";
        resetButton.textContent = "Play Again!";
        changeColor(guessedColor);
        h1.style.backgroundColor = guessedColor;
    } else {
        btn.style.backgroundColor = bgColor;
        messageDisplay.textContent = "Try Again";
    }
}

function changeColor(color) {
    for (let i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function updateSquareColors() {
    for (let i = 0; i < squares.length; i++) {
        if(isEasyMode && i >= colors.length) {
            squares[i].style.display = "none";
        } else {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
    }
}

function setupGameColors() {
    //Setup Colors for the game
    var num = getNumberOfSquares();
    colors = generateRandomColors();
    
    //Select random color as the goal, and set the text
    goalColor = selectWinColor();
    colorDisplay.textContent = goalColor;
}

function setupDisplay() {
    colorDisplay.textContent = goalColor;
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
}

function generateRandomColors() {    
    var num = getNumberOfSquares();
    var arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(getRandomColor());    
    }
    return arr;
}

function selectWinColor() {
    var randIndex = Math.floor(Math.random() * getNumberOfSquares());
    return colors[randIndex];
}

function getNumberOfSquares() {
    var num = 6
    if(isEasyMode) {
        num = 3;
    } 
    return num;
}

function getRandomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return ["rgb(",r,", ",g,", ",b,")"].join("");
}