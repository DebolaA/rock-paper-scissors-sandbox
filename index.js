const getRandomMove = () => {
  const moves = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
};

const getOutcome = (moveOne, moveTwo) => {
  if (moveOne === moveTwo) {
    return "It's a draw!";
  }

  if (
    (moveOne === "scissors" && moveTwo === "paper") ||
    (moveOne === "rock" && moveTwo === "scissors") ||
    (moveOne === "paper" && moveTwo === "rock")
  ) {
    return "Player One wins!";
  }

  return "Player Two wins!";
};

// Removing elements (nodes) from the DOM
const resetGame = () => {
  if (document.getElementById("outcome")) {
    const outcome = document.body.lastChild;
    document.body.removeChild(outcome);
  }
};

const playGame = () => {
  console.log("play game");
  resetGame();
  const playerOneMove = getRandomMove();
  const playerTwoMove = getRandomMove();
  const outcome = getOutcome(playerOneMove, playerTwoMove);
  updateDOM(playerOneMove, playerTwoMove, outcome);
};

const updateDOM = (moveOne, moveTwo, outcome) => {
  // TODO Implement this method to update the DOM
  // There are some images you can use in the images directory
  console.log(`moveOne is ${moveOne}`);
  console.log(`moveOne is ${moveTwo}`);
  console.log(`moveOne is ${outcome}`);
  const image1 = document.querySelector("img#player-one-move__img");
  const image2 = document.querySelector("img#player-two-move__img");
  const move1 = document.querySelector("p#player-one-move__name");
  const move2 = document.querySelector("p#player-two-move__name");
  const gameOutcome = document.querySelector("p#gameOutcome");

  image1.src = `images/${moveOne}.png`;
  image2.src = `images/${moveTwo}.png`;
  move1.textContent = moveOne;
  move2.textContent = moveTwo;
  gameOutcome.textContent = outcome;
};

const playButton = document.getElementById("play-btn");
playButton.addEventListener("click", playGame);
