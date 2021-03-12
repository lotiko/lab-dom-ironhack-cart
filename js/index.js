// ITERATION 1
const prices = document.querySelectorAll(".price > span");
const quantities = document.querySelectorAll(".quantity >input");
const subtotals = document.querySelectorAll(".subtotal >span");
const products = document.querySelectorAll(".product");
const totalVal = document.getElementById("total-value");
const tbody = document.querySelector("tbody");
const createEl = document.querySelector(".create-product");
// calculateAll();
/**
 *
 * @param {object} product
 */
function updateSubtotal(product) {
  let priceVal = product.querySelector(".price > span").textContent;
  let quantityVal = product.querySelector(".quantity >input").value;
  let subtotalEl = product.querySelector(".subtotal >span");
  let subtotalVal = Number(priceVal) * Number(quantityVal);
  subtotalEl.textContent = subtotalVal;
  return subtotalVal;
}

//... your code goes here
// updateSubtotal(product);

function calculateAll() {
  // ITERATION 2
  let allTotal = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    allTotal += updateSubtotal(product);
  }

  // ITERATION 3
  totalVal.querySelector("span").textContent = allTotal;
}
// ITERATION 4
/**
 *  remove one tr of table
 * @param {object} event
 */
function removeProduct(event) {
  //... your code goes here
  const target = event.currentTarget;
  let tr = target.parentNode.parentNode;
  tbody.removeChild(tr);
}

// ITERATION 5
function createTd(className, value = null) {
  let td = document.createElement("td");
  td.className = className;
  if (className === "name") {
    let span = createSpan(value);
    td.appendChild(span);
  }
  if (className === "price" || className === "subtotal") {
    let span = createSpan(value);
    td.textContent = "$";
    td.appendChild(span);
  }
  if (className === "quantity") {
    let input = document.createElement("input");
    input.type = "number";
    input.value = "0";
    input.min = "0";
    input.placeholder = "Quantity";
    td.appendChild(input);
  }
  if (className === "action") {
    let button = document.createElement("button");
    button.className = "btn btn-remove";
    button.textContent = "Remove";
    td.appendChild(button);
  }
  return td;
}
function createSpan(text) {
  let span = document.createElement("span");
  span.textContent = `${text}`;
  return span;
}
function createTr(className) {
  let tr = document.createElement("tr");
  tr.className = className;
  return tr;
}
function createProduct() {
  let name = createEl.querySelector('input[type="text"]').value;
  let price = createEl.querySelector('input[type="number"]').value;
  if (name === "") {
    alert("Please choose a name for the new product.");
    return;
  }
  if (price === "0") {
    let test = confirm("Product price is really $0");
    if (!test) return;
  }
  let productTr = createTr("product");
  let nameTd = createTd("name", name);
  let priceTd = createTd("price", price);
  let quantityTd = createTd("quantity");
  let subTotalTd = createTd("subtotal", 0);
  let removeTd = createTd("action");
  productTr.append(nameTd, priceTd, quantityTd, subTotalTd, removeTd);
  createEl.querySelector('input[type="text"]').value = "";
  createEl.querySelector('input[type="number"]').value = "0";
  tbody.appendChild(productTr);

  addRemoveEvent();
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  addRemoveEvent();
  createEl.querySelector("button").addEventListener("click", createProduct);
  //... your code goes here
});
function addRemoveEvent() {
  const removeBtns = document.querySelectorAll(".btn-remove");
  for (let i = 0; i < removeBtns.length; i++) {
    removeBtns[i].removeEventListener("click", removeProduct);
    removeBtns[i].addEventListener("click", removeProduct);
  }
}
