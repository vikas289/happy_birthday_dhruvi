const wordsArray = ["my cutie", "my shonu", "my sweetie", "my lovie towie"];
let dynamicElement = document.querySelector(".text--dynamic");
let currentWord = "",
  currentLetter = "",
  currentWordCount = 0,
  currentLetterCount = 0;
let lengthArray = wordsArray.length;

function typeWords() {
  if (currentWordCount == lengthArray) {
    currentWordCount = 0;
  }

  currentWord = wordsArray[currentWordCount];
  currentLetter = currentWord.slice(0, currentLetterCount);
  currentLetterCount = currentLetterCount + 1;
  dynamicElement.textContent = currentLetter;

  if (currentLetterCount == currentWord.length + 1) {
    currentWordCount++;
    currentLetterCount = 0;
  }
  setTimeout(typeWords, 300);
}

window.addEventListener("load", typeWords);