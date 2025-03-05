var username = prompt("What is your name? ");
var firstLetter = username.slice(0, 1);
var otherLetters = username.slice(1, username.length);

alert("Name = " + firstLetter.toUpperCase() + otherLetters.toLowerCase());