function showconfigLayer(event) {
  editedPlayer = +event.target.dataset.player;
  console.log(editedPlayer);
  backdropElement.style.display = "block";
  configPlayerElement.style.display = "block";
}

function closeLayer() {
  backdropElement.style.display = "none";
  configPlayerElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorOutputelement.textContent = "";
  formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const namePlayer = formData.get("playername").trim();
  if (!namePlayer) {
    event.target.firstElementChild.classList.add("error");
    errorOutputelement.textContent = "please enter valid name";
    return;
  }

  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );

  updatedPlayerDataElement.children[1].textContent = namePlayer;
  players[editedPlayer - 1].name = namePlayer;
  closeLayer();
}
