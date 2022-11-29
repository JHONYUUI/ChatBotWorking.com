function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}

function getBotResponse(input) {
    //rock paper scissors
    if (input == "Hello") {
        return "Hello there!";
    } else if (input == "Hello!") {
        return "Hello my name is Chat Bot nice to meet you!";
    } else if (input == "Hello.") {
        return "Hi there!";
    }

    // Simple responses
    if (input == "Hi") {
        return "Hi nice to meet you!";
    } else if (input == "Hi!") {
        return "Hi!";
    } else {
        return "Try asking something else!";
    }
}