const expList = document.querySelector(".list");
const addBtn = document.querySelector(".btn");
const title = document.querySelector("#text");
const amount = document.querySelector("#amount");
let moneyPlus = document.getElementById("money-plus");
let moneyMinus = document.getElementById("money-dec");
let balance = document.getElementById("balance");
let income = 0;
let expenses = 0;
let selectedValue;

// event listeners
addBtn.addEventListener("click", addToList);

//functions
function getSelectedValue() {
  selectedValue = document.getElementById("selection-menu").value;
  return selectedValue;
}
function addToList(e) {
  let newAmount = 0;
  e.preventDefault();
  const newItem = document.createElement("li");
  newItem.innerText = title.value;
  if (getSelectedValue() === "Income") {
    newItem.classList.add("plus");
    newAmount = document.createElement("span");
    newAmount.innerText = "+" + " " + "$" + amount.value;
    income += parseInt(amount.value);
    moneyPlus.innerHTML = "+" + "$" + income;
  } else if (getSelectedValue() === "Expense") {
    newItem.classList.add("minus");
    newAmount = document.createElement("span");
    const x = Math.abs(amount.value);
    newAmount.innerText = "-" + " " + "$" + x;
    expenses += parseInt(Math.abs(amount.value));
    moneyMinus.innerHTML = "-" + "$" + expenses;
  }
  const total = income - expenses;
  if (total >= 0) {
    balance.innerHTML = "+" + "$" + total;
    document.querySelector("h1").style.color = "#2ecc71";
  } else {
    balance.innerHTML = "-" + "$" + Math.abs(total);
    document.querySelector("h1").style.color = "#c0293b";
  }
  newItem.appendChild(newAmount);
  expList.appendChild(newItem);

  title.value = "";
  amount.value = "";
}
