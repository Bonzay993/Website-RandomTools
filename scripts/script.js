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

            const words = [];
            while (words.length < numberOfWords) {
                const word = wordList[Math.floor(Math.random() * wordList.length)];
                if (!word.size || word.length == wordSize) {
                    words.push(word);
                }
            }

           

            document.getElementById('result').innerText = words.join(', ');
}