const maxWordCount = 100;
const resultText = document.getElementById('result');
document.querySelector(".hamburger").addEventListener("click", toggleMenu);
let wordSize = document.getElementById("wordSize")
let numberOfWordsInput = document.querySelector(".number-of-words-input")

wordSize.defaultValue = "5";
numberOfWordsInput.defaultValue = "3";

// When Window Loads
window.addEventListener("load", (event) => {
    generateWordsOnEnter(); // Attach "Enter" key listener when the page loads
});

function toggleMenu() {
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'flex';
}

function generateWords() {
    const numberOfWords = document.getElementById('numberOfWords').value || 1;  // Default to 1 word if input is empty
    const wordType = document.getElementById('wordType').value || 'all';
    const wordSize = document.getElementById('wordSize').value;

    // Handle case where Number of Words is 0
    if (numberOfWords <= 0) {
        addErrorMessageStyle();
        resultText.innerText = "Number of Words cannot be 0";
        return;
    } else if (numberOfWords >= maxWordCount) {
        addErrorMessageStyle();
        resultText.innerText = 'Maximum number of words is ' + maxWordCount;
        return;
    }

    if (wordSize == 0) {
        addErrorMessageStyle();
        resultText.innerText = "Word Size can't be 0";
        return;
    }

    // Word list selection based on the type of word
    let wordList;
    switch (wordType.toLowerCase()) {
        case "noun":
            wordList = NOUNS;
            break;
        case "verb":
            wordList = VERBS;
            break;
        case "adjective":
            wordList = ADJECTIVES;
            break;
        default:
            wordList = [...NOUNS, ...VERBS, ...ADJECTIVES];
            break;
    }

    // Filter the words by size only if wordSize is provided and greater than 0
    const filteredWords = wordList.filter(word => !wordSize || word.length == wordSize);
    
    // Handle case where no words match the given word size
    if (filteredWords.length === 0) {
        addErrorMessageStyle();
        resultText.innerText = "No words available with the specified size";
        return;
    }

    // Generate the words based on the input or defaults
    const words = [];
    for (let i = 0; i < numberOfWords; i++) {
        const word = filteredWords[Math.floor(Math.random() * filteredWords.length)];
        words.push(word);
    }

    // Update the result text with the generated words
    resultText.innerText = words.join(', ');
    resultText.classList.remove("error");
}

function addErrorMessageStyle() {
    resultText.classList.add("error");
}

function resetWords() {
    wordSize.defaultValue = "0";
    wordSize.value = "5";
    numberOfWordsInput.defaultValue = "1";
    numberOfWordsInput.value = "1";
    resultText.innerText = "";
}

// **Updated "generateWordsOnEnter" function**
function generateWordsOnEnter() {
    // Attach the keydown event listener to the entire document
    document.addEventListener('keydown', function(event) {
        if (event.key === "Enter") {
            event.preventDefault();  // Prevent the default form submission behavior
            generateWords();  // Call the generateWords function
            applySearchOnEnterStyle(); // Add visual feedback
        }
    });
}

function applySearchOnEnterStyle() {
    document.querySelector(".generate-words-button").classList.add("black-border");
    setTimeout(() => {
        document.querySelector(".generate-words-button").classList.remove("black-border");
    }, 200);
}
