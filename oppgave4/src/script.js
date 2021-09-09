// TODO: Bruk getElementById til å hente HTML-elementene med #id
// TODO: Bruk querySelector til å hente knappen
// TODO: Lag en liste med tallene som skal sorteres
// TODO: Lag en funksjon for å skrive ut tallene som skal sorteres
// TODO: Lag en funksjon for å skrive ut input felter bruker kan skrive tallene i
// TODO: Lag en funksjon for å hente ut det brukeren har skrevet inn
// TODO: Lag en funksjon for å sjekke om tallene er sortert riktig av bruker
// TODO: Lag en funksjon som "lager UI" --Nødvendig?
// TODO: Lytt til 'click'-event og trigg checkNumberSeq ved klikk

let guessDiv = document.getElementById("guess");
let numbers = document.getElementById("numbers");
let submit = document.querySelector("button");

const UnSortedNumbers = [20, 30, 11, 2, 4, 67, 23, 10, 5];

function printUnSorted() {
  console.log(UnSortedNumbers);
  numbers.innerHTML = "unSorted: " + UnSortedNumbers;

  //fikk litt hjelp fra den enkelere-løsningen
  const li = `<li><input type="text" /></li>`;

  for (let i = 0; i < UnSortedNumbers.length; i++) {
    guessDiv.innerHTML += li;
  }
}

console.log("unsorted......");
printUnSorted();

function letsGuess() {
    //fikk litt hjelp fra den enkelere-løsningen
  const answers = guessDiv.querySelectorAll("input");
  // Gjør om resultet fra .querySelectorAll til en "ekte" liste slik at vi kan bruke .map
  // Da hvert element i listen er et input kan vi hente ut .value
  let guess = Array.from(answers).map((answer) => answer.value);

  let sorted = UnSortedNumbers.slice().sort(function (fnum, snum) {
    return fnum - snum;
  });

  numbers.innerHTML =
    "unSorted: " + UnSortedNumbers + "<br> <br>" + " Sorted Numbers: " + sorted;

  let doneSorted = sorted.join("") === guess.join("");
  if (doneSorted) {
    alert("Correct Sort");
  } else {
    alert("Wrong Sort");
  }
}

submit.addEventListener("click", letsGuess);
