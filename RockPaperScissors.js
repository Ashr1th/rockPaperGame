"use strict"

let answer = prompt("Enter rock(r) paper(p) or scissor(s)")

let ran = (Math.random() * 100) + 1;

let term;

if (ran >= 0 && ran <= 33) {
  term = 'r';
} else if (ran >= 33 && ran <= 66) {
  term = "p";
} else {
  term = "s";
}

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
  alert(`i choose ${term}`);
  alert("you lose");
}