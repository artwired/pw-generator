const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passwordOne = document.querySelector("#pw-1");
let passwordTwo = document.querySelector("#pw-2");

function generatePW() {
  passwordOneString = "";
  passwordTwoString = "";
  for (let i = 0; i < 15; i++) {
    passwordOneString +=
      characters[Math.floor(Math.random() * characters.length)];
    passwordTwoString +=
      characters[Math.floor(Math.random() * characters.length)];
  }
  passwordOne.textContent = passwordOneString;
  passwordTwo.textContent = passwordTwoString;
}

function copyPwOne() {
  let passwordOneTextEl = document.getElementById("pw-1").innerHTML;
  if (passwordOneTextEl === "") {
    console.log("please generate a password to copy");
  } else {
    navigator.clipboard.writeText(passwordOneTextEl);
    console.log("password copied to clipboard");
  }
}
function copyPwTwo() {
  let passwordTwoTextEl = document.getElementById("pw-2").innerHTML;
  if (passwordTwoTextEl === "") {
    console.log("please generate a password to copy");
  } else {
    navigator.clipboard.writeText(passwordTwoTextEl);
    console.log("password copied to clipboard");
  }
}
