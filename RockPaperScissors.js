"use strict"

function getHumanChoice() {
  let answer = prompt("Enter rock(r) paper(p) or scissor(s)")
  return answer;
}


showWinner(computerScore);

function getComputerChoice() {
  let ran = (Math.random() * 100) + 1;
  console.log("Ran =", ran);
  let term;
  if (ran >= 0 && ran <= 33) {
    term = 'r';
  } else if (ran >= 33 && ran <= 66) {
    term = "p";
  } else {
    term = "s";
  }
  return term;
}


function showWinner() {
  const term = getComputerChoice();
  const answer = getHumanChoice();
  if (answer === term) {
    alert(`i choose ${term}`);
    alert("tie");
  } else if ((answer === "r" && term === "s") || (answer === "p" && term === "r") || (answer === "s" && term === "p")) {
    alert(`i choose ${term}`);
    alert("you won");
  } else if (answer === "" || answer === null) {
    // alert(`i choose ${term}`);
    alert("pick a proper thing!!!!!!!!!!!!");
  }
  else {
    computerScore++;
    alert(`i choose ${term}`);
    alert("you lose");
  }
}

