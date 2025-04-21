
const quotes = [
    "Keep going, you're doing great!",
    "Never stop learning!",
    "You are capable of amazing things.",
    "Push yourself, because no one else is going to do it for you."
];

function showMotivationalMessage(age) {
    let message;

    if (age < 13) {
        message = "You're a curious kid!";
    } else if (age >= 13 && age < 20) {
        message = "Teen power is strong!";
    } else if (age >= 20 && age < 30) {
        message = "Time to chase your dreams!";
    } else {
        message = "Wisdom grows with age!";
    }

    return message;
}

function getNameCategory(name) {
    const firstChar = name[0].toLowerCase();
    let category;

    switch (firstChar) {
        case 'a':
        case 'b':
        case 'c':
            category = "Group A-C";
            break;
        case 'd':
        case 'e':
        case 'f':
            category = "Group D-F";
            break;
        default:
            category = "Group G-Z";
            break;
    }

    return category;
}

function displayAllQuotes() {
    console.log(" Daily Quotes:");
    for (let i = 0; i < quotes.length; i++) {
        console.log(`Quote ${i + 1}: ${quotes[i]}`);
    }
}

const name = "Louis";
const age = 23;

console.log("Name:", name);
console.log("Age:", age);
console.log("Motivational Message:", showMotivationalMessage(age));
console.log("Name Group:", getNameCategory(name));

displayAllQuotes();
