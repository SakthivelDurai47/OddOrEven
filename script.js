const info = document.getElementById("info");
const mode = document.getElementById("mode");
const stage = document.getElementById("stage");
const game = document.getElementById("game");
const resutlPage = document.getElementById("resultPage");
const bat = document.getElementById("bat");
const bowl = document.getElementById("bowl");
const gameStat = document.getElementById("gameStat");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const innings = document.getElementById("innings");
const round = document.getElementById("round");
const result = document.getElementById("result");
const plrScore = document.getElementById("plrScore");
const comScore = document.getElementById("comScore");
const playerCh = document.getElementById("playerCh");
const computerCh = document.getElementById("computerCh");

let gameOpt;
let computerChoice;
let playerCounter = 0;
let computerCounter = 0;
let match = 0;

bat.onclick = function () {
  playClickSound();
  gameOpt = 1;
  gameStat.innerText = "You choosed Batting";
  mode.style.display = "none";
  game.style.display = "block";
  innings.innerText = "Batting🏏";
};
bowl.onclick = function () {
  playClickSound();
  gameOpt = 2;
  gameStat.innerText = "You choosed Bowling";
  mode.style.display = "none";
  game.style.display = "block";
  innings.innerText = "Bowling🤾";
};

function endGame() {
  location.reload();
}

function howto() {
  playClickSound();
  info.innerText =
    "Start by choosing odd or even. If you win, you get to choose between batting or bowling. As a batsman, pick numbers from 0 to 6 while your opponent does the same. If both choose the same number, you're out. Try to score as much as possible! When it's your turn to bowl, aim to match the batsman's number to get them out.";
}

function gameOption(opt) {
  playClickSound();
  let choice = Number(opt); 
  computerChoice = Math.floor(Math.random() * 7);
  if (choice == 0) {
    if (computerChoice % 2 != 0) {
      stage.style.display = "none";
      mode.style.display = "block";
    } else {
      stage.style.display = "none";
      game.style.display = "block";
      gameChoice();
    }
  } else {
    if (computerChoice % 2 == 0) {
      stage.style.display = "none";
      mode.style.display = "block";
    } else {
      stage.style.display = "none";
      game.style.display = "block";
      gameChoice();
    }
  }
}

function gameChoice() {
  playClickSound();
  computerChoice = Math.round(Math.random() * 1);
  if (computerChoice == 0) {
    gameOpt = 2;
    gameStat.innerText = "The computer won the Toss and Choosed Batting first";
    innings.innerText = "You are Bowling🤾";
  } else {
    gameOpt = 1;
    gameStat.innerText = "The computer won the Toss and Choosed Bowling first";
    innings.innerText = "You are Batting🏏";
  }
}
function buttonOption(value) {
  playClickSound();
  let val = Number(value);
  computerChoice = Math.round(Math.random() * 7);
  if (gameOpt == 1) {
    if (val == computerChoice) {
      playerCh.innerText = val;
      computerCh.innerText = computerChoice;
      gameStat.innerText = "The ball hits the stump! You lost Batting";
      gameOpt = 2;
      match += 1;
      if (match == 1) {
        round.innerText = "Two";
      }
      if (match != 2) {
        innings.innerText = "You are Bowling🤾";
      } else {
        innings.innerText = "Game Over";
        endgame();
        return;
      }
      return;
    } else if (val == 0) {
      playerCh.innerText = val;
      computerCh.innerText = computerChoice;
      playerCounter += computerChoice;
      playerScore.innerText = playerCounter;
      gameStat.innerText = `You Tapped the ball and scored ${computerChoice} points`;
    } else {
      playerCh.innerText = val;
      computerCh.innerText = computerChoice;
      playerCounter += val;
      playerScore.innerText = playerCounter;
      gameStat.innerText = `Great Hit! you earned ${val} points`;
    }
  } else {
    if (val == computerChoice) {
      playerCh.innerText = val;
      computerCh.innerText = computerChoice;
      gameStat.innerText = "You Defeated the Batter!";
      gameOpt = 1;
      match += 1;
      if (match == 1) {
        round.innerText = "Two";
      }
      if (match != 2) {
        innings.innerText = "You are Batting🏏";
      } else {
        innings.innerText = "Game Over";
        endgame();
        return;
      }
      return;
    } else if (computerChoice == 0) {
      playerCh.innerText = val;
      computerCh.innerText = computerChoice;
      computerCounter += val;
      computerScore.innerText = computerCounter;
      gameStat.innerText = `The computer taps the ball and scores ${val} points`;
    } else {
      playerCh.innerText = val;
      computerCh.innerText = computerChoice;
      computerCounter += computerChoice;
      computerScore.innerText = computerCounter;
      gameStat.innerText = `The computer stricks the ball and scores ${computerCounter} points`;
    }
  }
  if (match == 1 && gameOpt == 1 && playerCounter > computerCounter) {
    endgame();
    return;
  } else if (match == 1 && gameOpt == 2 && playerCounter < computerCounter) {
    endgame();
    return;
  }
}

function endgame() {
  game.style.display = "none";
  resutlPage.style.display = "block";
  comScore.innerText = computerCounter;
  plrScore.innerText = playerCounter;
  if (playerCounter > computerCounter) {
    playWinSound();
    result.innerText = `Congrats! You have won the game by ${
      playerCounter - computerCounter
    } points!🥳`;
  } else {
    playloseSound();
    result.innerText = `The Computer has won the game by ${
      computerCounter - playerCounter
    } points😒`;
  }
}
function playClickSound() {
  const clickSound = document.getElementById("clickSound");
  clickSound.currentTime = 0;
  clickSound.play();
}
function playWinSound() {
  const winSound = document.getElementById("winSound");
  winSound.currentTime = 0;
  winSound.play();
}
function playloseSound() {
  const loseSound = document.getElementById("loseSound");
  loseSound.currentTime = 0;
  loseSound.play();
}
