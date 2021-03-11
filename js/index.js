// ITERATION 1
const prices = document.querySelectorAll('.price > span');
console.log(prices[0].textContent)
const quantities = document.querySelectorAll('.quantity >input')
console.log(quantities[0].value)
const subtotals = document.querySelectorAll('.subtotal >span')
console.log(subtotals[0].textContent)
const product = document.querySelector('.product')


function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
    
    
    }

  //... your code goes here
updateSubtotal(product)
console.log(product)


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
