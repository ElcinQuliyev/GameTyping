const wordBox = document.getElementById("wordBox");
const enteredWord = document.getElementById("enteredWord");
const time = document.getElementById("time");
const resetBtn = document.getElementById("resetBtn");
const modal = document.getElementById("modal");
wordBox.style.top = "0px";

const words = [
  "yanvar",
  "Ocak",
  "fevral",
  "Şubat",
  "mart",
  "Mart",
  "aprel",
  "Nisan",
  "may",
  "Mayıs",
  "iyun",
  "Haziran",
  "iyul",
  "Temmuz",
  "avqust",
  "Ağustos",
  "sentyabr",
  "Eylül",
  "oktyabr",
  "Ekim",
  "noyabr",
  "Kasım",
  "dekabr",
  "Aralık",
  "page",
  "him",
  "what",
  "quick",
  "made",
  "people",
  "mother",
  "could",
  "set",
  "when",
  "want",
  "up",
  "young",
  "sentence",
  "food",
  "this",
  "about",
  "are",
  "they",
  "spell",
  "want",
  "live",
  "life",
  "went",
  "much",
  "answer",
  "through",
  "we",
  "example",
  "big",
  "car",
  "soon",
  "took",
  "hard",
  "few",
  "walk",
  "had",
  "grow",
  "with",
  "run",
  "family",
  "boy",
  "number",
  "where",
  "picture",
  "too",
  "has",
  "state",
  "follow",
  "each",
  "country",
  "girl",
  "face",
  "if",
  "house",
  "show",
  "leave",
  "this",
  "later",
  "cut",
  "until",
  "men",
  "song",
  "my",
  "and",
  "four",
  "hard",
  "place",
  "without",
  "tree",
  "point",
  "may",
  "night",
  "leave",
  "below",
  "need",
  "was",
  "about",
  "write",
  "America",
  "these",
  "like",
  "who",
  "had",
  "than",
  "many",
  "it",
  "so",
  "children",
  "change",
  "help",
  "you",
  "must",
  "any",
  "were",
  "also",
  "enough",
  "two",
  "almost",
  "say",
  "later",
  "took",
  "were",
  "live",
  "land",
  "man",
  "letter",
  "another",
  "over",
  "again",
  "like",
  "which",
  "girl",
  "our",
  "know",
  "well",
  "white",
  "set",
  "big",
  "head",
  "where",
  "in",
  "call",
  "work",
  "different",
  "watch",
  "even",
  "your",
  "write",
  "away",
  "thought",
  "on",
  "miss",
  "play",
  "book",
];

const randomWords = []; ///====> randomWords.push(randomWord);

// sozleri wordbox-a yazdiq
words.forEach(() => {
  let randomIndexText = parseInt(Math.random() * 151);
  // Sual verilecek ...?
  let newWord = document.createElement("span");
  const randomWord = words[randomIndexText];
  newWord.textContent = randomWord; ///====> words[randomIndexText]
  randomWords.push(randomWord); ///====> words[randomIndexText]
  wordBox.append(newWord);
});

let second = 60;
let score = 0;
let timeID = null;

function timer() {
  if (second === 0) {
    console.log("oyun bitdi");
    clearInterval(timeID);
    enteredWord.disabled = true; // inputa daxil olunmur (disabled)
    modal.parentElement.style.display = "flex";
    modal.textContent = "Toplam Score: " + score;
  } else {
    second--;
    time.textContent = `${second}saniye`;
  }
}

resetBtn.addEventListener("click", () => {
  window.location.reload();
});
let topOffset = 0;

let currentWordIndex = 0;
wordBox.childNodes[currentWordIndex].className = "activeSpan"; //==> ilk gorunen backgraund

enteredWord.addEventListener("keydown", ({ keyCode }) => {
  // inputa daxil olunan zaman isleir
  if (enteredWord.dataset.didstart == 0) {
    timeID = setInterval(timer, 500);
    enteredWord.dataset.didstart = 1;
  }
  // daxil olunan sozlere (activeSpan) elave edilir
  if (keyCode === 32) {
    // novbeti sozlerin gelinmesi ucun
    if (
      wordBox.childNodes[currentWordIndex].offsetTop <
      wordBox.childNodes[currentWordIndex + 1].offsetTop
    ) {
      wordBox.style.top = parseInt(wordBox.style.top) - 40 + "px";
    }
    const daxilEdilSoz = enteredWord.value.trim(); ///==> bosluq olmasin trim() ile her iki terefen kesildi

    wordBox.childNodes[currentWordIndex + 1].className = "activeSpan"; //==> kecid olunduqunda olunan

    if (daxilEdilSoz === randomWords[currentWordIndex]) {
      wordBox.childNodes[currentWordIndex].className = "dogruSoz";
      score += 10; // her doqru soz balla qiymetlenir
      console.log("duzdu");
    } else {
      wordBox.childNodes[currentWordIndex].className = "sehfSoz";
      score -= 3; // her baldan cixilir
      console.log("yanlisdir");
    }

    enteredWord.value = "";
    currentWordIndex++;
  }
});

// let topOffset = 0

// let currentWord = 0

// let sec = 10;
// let interval;

// startTime.addEventListener("click", StartApp);

// function StartApp() {
//   interval = setInterval(() => {
//     if (sec > 0) {
//       sec--;
//       second.textContent = sec;
//       minut.textContent = `00`;
//     } else if (sec <= 0) {
//       second.textContent = "00";
//     }
//   }, 1000);
// }

// reStart.addEventListener("click", RestartApp);

// function RestartApp() {
//   clearInterval(interval);
//   second.textContent = "00";
//   minut.textContent = "01";
// }
