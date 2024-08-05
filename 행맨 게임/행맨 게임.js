const words = ["apple", "banana", "car", "jump", "driver"];
const word = words[Math.floor(Math.random() * words.length)];
let guessedWord = Array(word.length).fill("_");
let attempts = 12;

function updateWordDisplay() {
    document.getElementById("word-display").innerText = guessedWord.join(" ");
}

function showMessage(message) {
    document.getElementById("message").innerText = message;
}

function checkGameStatus() {
    if (guessedWord.join("") === word) {
        showMessage("다 맞추셨습니다!");
        disableAllButtons();
    } else if (attempts <= 0) {
        showMessage(`실패하셨습니다. 단어는 ${word}였습니다.`);
        disableAllButtons();
    }
}

function disableAllButtons() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => button.disabled = true);
}

function handleGuess(event) {
    const letter = event.target.innerText;
    let correctGuess = false;
    
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            guessedWord[i] = letter;
            correctGuess = true;
        }
    }

    if (!correctGuess) {
        attempts--;
        showMessage(`알파벳이 틀렸습니다. 기회는 ${attempts}번 남았습니다.`);
    }

    updateWordDisplay();
    checkGameStatus();
    event.target.disabled = true;
}

function createKeyboard() {
    const keyboardContainer = document.getElementById("keyboard");
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    for (let letter of alphabet) {
        const button = document.createElement("button");
        button.innerText = letter;
        button.addEventListener("click", handleGuess);
        keyboardContainer.appendChild(button);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    updateWordDisplay();
    createKeyboard();
});
