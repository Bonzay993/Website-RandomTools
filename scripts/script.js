const maxWordCount = 30;
const resultText = document.getElementById('result');
document.querySelector(".hamburger").addEventListener("click", toggleMenu);

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
        resultText.innerText = "Number of Words cannot be 0";
        return;
    } else if (numberOfWords >= maxWordCount) {
        resultText.innerText = 'Maximum number of words is '+ maxWordCount;
        return;
    }

    if (wordSize == 0) {
        resultText.innerText = "Word Size can't be 0"
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
}

function wordListCases(){

}