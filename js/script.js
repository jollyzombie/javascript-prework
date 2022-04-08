
{
  let playerScore = 0;
  let computerScore = 0;
  let maxScore;

  function arrangeView() {
    if (maxScore) {
      gameWrapper.classList.add('visible');
      startGameWrapper.classList.remove('visible');
    } else {
      gameWrapper.classList.remove('visible');
      startGameWrapper.classList.add('visible');
    }
  }

  function resetScore() {
    maxScore = 0;
    playerScore = 0;
    computerScore = 0;
  }

  function checkIfFinished() {
    if (playerScore >= maxScore || computerScore >= maxScore) {
      clearMessages();
      if (playerScore >= maxScore) {
        printMessage('Growl. You win!');
      }
      if (computerScore >= maxScore) {
        printMessage('Moaaan...You looooseee :(');
      }
      printMessage('Your score: ' + playerScore + '. Mob zombie score: ' + computerScore + '.');
      resetScore();
    }

    arrangeView();
  }

  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return 'rock';
    } else if (argMoveId == 2) {
      return 'paper';
    } else if (argMoveId == 3) {
      return 'scissors';
    }
  }

  function showResult(computerMove, playerMove) {
    printMessage('Mob zombie move is ' + computerMove);
    if (
      computerMove == 'rock' && playerMove == 'paper'
      || computerMove == 'scissors' && playerMove == 'rock'
      || computerMove == 'paper' && playerMove == 'scissors'
    ) {
      printMessage('You win!');
      playerScore++;
    } else if (computerMove === playerMove) {
      printMessage('Its a tie!');
    } else {
      printMessage('Such a shame! You lose!');
      computerScore++;
    }

    document.getElementById('playerScore').innerHTML = playerScore;
    document.getElementById('computerScore').innerHTML = computerScore;
  }

  function playGame(playerInput) {
    clearMessages();

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = getMoveName(randomNumber);
    const playerMove = getMoveName(playerInput);

    showResult(computerMove, playerMove);
    checkIfFinished();
  }

  const startGameWrapper = document.getElementById('start-game-wrapper');
  const gameWrapper = document.getElementById('game-wrapper');
  const startButton = document.getElementById('start-button');

  startButton.addEventListener('click', function () {
    clearMessages();
    const maxMovesInput = document.getElementById('max-moves');
    maxScore = Number(maxMovesInput.value);
    arrangeView();
  })

  const playRock = document.getElementById('play-rock');
  const playPaper = document.getElementById('play-paper');
  const playScissors = document.getElementById('play-scissors');

  playRock.addEventListener('click', function () {
    playGame(1);
  });
  playPaper.addEventListener('click', function () {
    playGame(2);
  });
  playScissors.addEventListener('click', function () {
    playGame(3);
  });
}