let obj = JSON.parse(localStorage.getItem("obj")) || {};

const arrofPrompts = [
  "First name",
  "Last name",
  "Country",
  "Phone number",
  "State",
  "City",
  "Village",
];

if (Object.keys(obj).length === 0) {
  arrofPrompts.forEach((promptQuest) => {
    let promptValue = prompt(`Enter your ${promptQuest}`);
    obj[promptQuest] = promptValue;
    localStorage.setItem("obj", JSON.stringify(obj)); //Setting Local Storage
  });
}

let firstName = document.querySelector("#firstName");
firstName.innerHTML = obj["First name"];

let lastName = document.querySelector("#lastName");
lastName.innerHTML = obj["Last name"];

let country = document.querySelector("#country");
country.innerHTML = obj["Country"];

let phoneNumber = document.querySelector("#phoneNumber");
phoneNumber.innerHTML = obj["Phone number"];

let state = document.querySelector("#state");
state.innerHTML = obj["State"];

let city = document.querySelector("#city");
city.innerHTML = obj["City"];

let village = document.querySelector("#village");
village.innerHTML = obj["Village"];

// CLEAR LOCAL STORAGE
let clrStorageBtn = document.querySelector("#clearStorage");

clrStorageBtn.addEventListener("click", () => {
  localStorage.clear();
  firstName.innerHTML = "";
  lastName.innerHTML = "";
  country.innerHTML = "";
  phoneNumber.innerHTML = "";
  state.innerHTML = "";
  city.innerHTML = "";
  village.innerHTML = "";
  location.reload();
});

//Change Color

function changeColor() {
  
  let boxColor = document.querySelector("#boxColor");
  let boxColorValue = boxColor.value;

  let outerColor = document.querySelector("#outerColor");
  let outerColorValue = outerColor.value;

  let fontColor = document.querySelector("#fontColor");
  let fontColorValue = fontColor.value;

  let body = document.querySelector('body');
  let container = document.querySelector('.container');

  body.style.backgroundColor = outerColorValue;
  container.style.backgroundColor = boxColorValue
  container.style.color = fontColorValue;

  // console.log(boxColorValue);
  // console.log(outerColorValue);
  // console.log(fontColorValue);
}

let changeColorBtn = document.querySelector("#changeColor");
changeColorBtn.addEventListener("click", () => {
  changeColor();
});
