document.querySelector(".hamburger").addEventListener("click", toggleMenu)

function toggleMenu() {
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'flex';
}



function generateWords() {
    const numberOfWords = document.getElementById('numberOfWords').value || 1;
    const wordType = document.getElementById('wordType').value || 'all';
    const wordSize = document.getElementById('wordSize').value;

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

    const filteredWords = wordList.filter(word => !wordSize || word.length == wordSize);

    if (filteredWords.length === 0) {
        document.getElementById('result').innerText = "No words found with the specified criteria.";
        return;
    }

    const words = [];
    while (words.length < numberOfWords) {
        const word = filteredWords[Math.floor(Math.random() * filteredWords.length)];
        words.push(word);
    }

    document.getElementById('result').innerText = words.join(', ');
}
