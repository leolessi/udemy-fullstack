const names = [
    "Ana",
    "Bruno",
    "Carlos",
    "Daniela",
    "Eduardo",
    "Fernanda",
    "Gustavo",
    "Helena",
    "Isabela",
    "João",
    "Larissa",
    "Marcos",
    "Natália",
    "Pedro",
    "Rafael",
    "Sophia",
    "Tiago",
    "Vitória",
    "Wesley",
    "Yasmin"
];

function whosPaying(names) {
    var username = prompt("Insert your name: ");

    if (names.includes(username)) {
        var randomIndex = Math.floor(Math.random() * names.length);
        var randomName = names[randomIndex];
        console.log(randomName + " is going to buy lunch today!");
    } else {
        console.log("No lunch today!")
    }
}

whosPaying(names);