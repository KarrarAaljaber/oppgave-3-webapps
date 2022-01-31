// Oppgave 1
const fjern = document.getElementById("remove");

const Removebtn = document.getElementById("remove-btn");

Removebtn.onclick = function () {
  fjern.remove();
};

// Oppgave 2
const change = document.getElementById("change");

const Changebtn = document.getElementById("change-btn");
Changebtn.onclick = function () {
  change.innerHTML = "ny text";
};

// Oppgave 3
const input = document.getElementById("input");
const inputText = document.getElementById("input-text");

input.onkeydown = function (e) {
  inputText.innerHTML = e.target.value;
};

// Oppgave 4
const myList = ["item one", "item two", "item three"];

const ul = document.getElementById("ul");
const writeList = document.getElementById("write-list");

writeList.onclick = function () {
  myList.forEach(function (item) {
    let li = document.createElement("li");
    ul.appendChild(li);

    li.innerHTML += item;
  });
};

// Oppgave 5
const text = document.getElementById("text");
const create = document.getElementById("create");
const select = document.getElementById("select");
const placeHolder = document.getElementById("placeholder");

create.onclick = function () {
  const selectedValue = select.value;
  const textTyped = text.value;
  placeHolder.innerHTML += `<${selectedValue}>${textTyped}</${selectedValue}>`;
};
// Oppgave 6
const list = document.getElementById("list");
const removeListItem = document.getElementById("remove-li");

removeListItem.onclick = function () {
  const lastItem = list.lastElementChild;
  list.removeChild(lastItem);
};

// Oppgave 7
const name = document.getElementById("name");
const order = document.getElementById("order");

order.onclick = function (e) {
  const letterCount = name.value.length;
  if (letterCount > 3) {
    name.style = "border: 5px solid red;";
  } else {
    name.style = "border: 1px solid black;";
  }
};
// Oppgave 8
const ulList = document.querySelector(".children");
const liList = ulList.querySelectorAll("li");
const color = document.getElementById("color");

color.onclick = function () {
  Array.from(liList).forEach((item, index) => {
    if (index % 2 === 0) {
      item.style = "border: 3px solid green;";
    } else {
      item.style = "border: 3px solid pink;";
    }
  });
};
