function test() {
    var text = prompt("Enter a text: ");
    var textLength = text.length;
    var charactersLeft = 140 - textLength;
    alert("You have entered " + textLength + " characters. You still have " + charactersLeft + " characters left.");
}

test();