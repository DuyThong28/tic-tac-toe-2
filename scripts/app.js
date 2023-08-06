let gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 0;
let gameOver = false;
let players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

let backdropElement = document.querySelector("#backdrop");
let configPlayerElement = document.querySelector("#config-layer");

let editPlayerBtn1Element = document.querySelector("#edit-player-1-btn");
let editPlayerBtn2Element = document.querySelector("#edit-player-2-btn");
let cancelBtnElement = document.querySelector("#cancel-config-btn");
let submitBtnElement = document.querySelector("#submit-config-btn");
let formElement = document.querySelector("form");
const errorOutputelement = document.querySelector("#config-errors");
let startNewGameBtnElement = document.querySelector("#start-new-game-btn");
let activeGame = document.getElementById("active-game");
let activePlayerName = document.getElementById("active-player-name");
let gameBoardElements = document.querySelectorAll("#game-board li");
let gameOverElement = document.querySelector("#game-over");

editPlayerBtn1Element.addEventListener("click", showconfigLayer);
editPlayerBtn2Element.addEventListener("click", showconfigLayer);
cancelBtnElement.addEventListener("click", closeLayer);
backdropElement.addEventListener("click", closeLayer);
formElement.addEventListener("submit", savePlayerConfig);
startNewGameBtnElement.addEventListener("click", startNewGame);
for (let gameBoardElement of gameBoardElements) {
  gameBoardElement.addEventListener("click", selectedGameField);
}
