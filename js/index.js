// ITERATION 1
const prices = document.querySelectorAll(".price > span");
console.log(prices[0].textContent);
const quantities = document.querySelectorAll(".quantity >input");
console.log(quantities[0].value);
const subtotals = document.querySelectorAll(".subtotal >span");
console.log(subtotals[0].textContent);
const products = document.querySelectorAll(".product");
const totalVal = document.getElementById("total-value");
// calculateAll();

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
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // console.log(singleProduct);
  // updateSubtotal(singleProduct);
  // end of test

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

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
