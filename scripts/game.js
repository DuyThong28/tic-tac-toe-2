function resetGame() {
  gameOverElement.style.display = "none";
  gameOverElement.firstElementChild.innerHTML =
    'You won! <span id="winner-game">PLAYER NAME</span>';
  gameOver = false;
  currentRound = 0;
  editedPlayer = 0;
  let index = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      gameBoardElements[index].textContent = "";
      gameBoardElements[index].classList.remove("disabled");
      index++;
    }
  }
}

function startNewGame() {
  if (!players[0].name || !players[1].name) {
    alert("please enter a valid game");
    return;
  }
  resetGame();
  activeGame.style.display = "block";
  activePlayerName.textContent = players[activePlayer].name;
}

function selectedGameField(event) {
  const selectedField = event.target;
  if (selectedField.textContent !== "" || gameOver === true) {
    return;
  }
  selectedField.textContent = players[activePlayer].symbol;
  selectedField.classList.add("disabled");
  gameData[selectedField.dataset.row - 1][selectedField.dataset.col - 1] =
    activePlayer + 1;
  activePlayer = +!activePlayer;
  activePlayerName.textContent = players[activePlayer].name;
  currentRound++;
  const winnerId = checkForGameOver();
  if (winnerId !== 0) {
    gameOver = true;
    endGame(winnerId);
  }
}

function checkForGameOver() {
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }

  if (currentRound === 9) {
    return -1;
  }
  return 0;
}

function endGame(winnerId) {
  if (winnerId > 0) {
    gameOverElement.style.display = "block";
    gameOverElement.firstElementChild.firstElementChild.textContent =
      players[winnerId - 1].name;
  } else {
    gameOverElement.style.display = "block";
    gameOverElement.firstElementChild.firstElementChild.textContent =
      "it's a draw!";
  }
}
