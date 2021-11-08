function computerPlay() {
  let selection = Math.floor(Math.random() * (4 - 1) + 1); // random number between 1-3
  //could use Math.floor(Math.random() * 3); for 0-2
  switch (selection) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissor";
    default:
      return;
  }
}

function playRound(userIn, compIn) {
  // instead of multi if statements can use win array
  let msg;
  let outcome;
  if (userIn == "scissor" && compIn == "paper") {
    msg = "User Wins: " + userIn + " beats " + compIn;
    outcome = "win";
    return { msg, outcome };
  } else if (userIn == "paper" && compIn == "rock") {
    msg = "User Wins: " + userIn + " beats " + compIn;
    outcome = "win";
    return { msg, outcome };
  } else if (userIn == "rock" && compIn == "scissor") {
    msg = "User Wins: " + userIn + " beats " + compIn;
    outcome = "win";
    return { msg, outcome };
  } else if (userIn == compIn) {
    msg = "Tie!: " + userIn + " ties with " + compIn;
    outcome = "tie";
    return { msg, outcome };
  } else {
    msg = "User Loses: " + userIn + " loses to " + compIn;
    outcome = "lose";
    return { msg, outcome };
  }
}

function game() {
  let playerSelection;
  let computerSelection;
  let output;
  let winCount = 0;
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Rock,Paper,Scissor?");
    computerSelection = computerPlay();
    output = playRound(
      playerSelection.toLowerCase(),
      computerSelection.toLowerCase()
    );
    if (output.outcome == "win") {
      winCount = winCount + 1;
    }
    console.log(output.msg);
  }
  if (winCount >= 3) {
    console.log("You won " + winCount + " games! You won the best of 5");
  } else {
    console.log(
      "You won " + winCount + " games! You lost the best of 5 (or to many ties)"
    );
  }
}

game();

/*
    Rules 
    S beats P
    R beats S
    P beats R
 1 - Scissors
 2 - Paper
 3 - Rock

  we can say 

  if userIn == 1(Scissor) and compIn == 2(Paper)
    User wins scissor beats paper

    User wins 
*/
