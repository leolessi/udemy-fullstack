function loveScore() {
    prompt("What is your name?");
    prompt("What is their name?");

    var loveScore = Math.random() * 100;
    loveScore = Math.floor(loveScore) + 1;

    if (loveScore > 80) {
        alert("Your love score is " + loveScore + "%. Meant to be!");
    } else {
        alert("Your love score is " + loveScore + "%. There's still hope!");
    }
}
loveScore();