var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

var guestName = prompt("What is your name?");

if (guestList.includes(guestName)) {
    alert("Welcome!")
} else {
    alert("Sorry.")
}
