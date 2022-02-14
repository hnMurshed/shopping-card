
function getShopCalculation (product, price, isAdd) {

    // get product quantity
    const productQuantityField = document.getElementById(product + '-quantity');
    let productQuantity = productQuantityField.value;
    // const currentPhoneQuantity = parseInt(currentPhoneQuantityText);

    if (isAdd == true) {
        productQuantityField.value = parseInt(productQuantity) + 1;
    }
    else if (productQuantityField.value > 0){
        productQuantityField.value = parseInt(productQuantity) - 1;
    }
    productQuantity = productQuantityField.value;

    // get total product price
    const productPrice = document.getElementById(product + '-price');
    productPrice.innerText = productQuantity * price;

    // update subtotal, tax, and total
    checkOutTotal ();
}
function getInputValue (product) {
    const productQuantityField = document.getElementById(product + '-quantity');
    let productQuantity = parseInt(productQuantityField.value);

    return productQuantity;
}
function checkOutTotal () {
    const phonePrice = getInputValue ('phone') * 1219;
    const casePrice = getInputValue ('case') * 59;

    const subTotal = phonePrice + casePrice;
    const tax = (subTotal * 5) / 100;
    const total = subTotal + tax;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-field').innerText = tax;
    document.getElementById('total-field').innerText = total;
}

document.getElementById('phone-plus').addEventListener('click', function () {
    getShopCalculation ('phone', 1219, true)
}) 
document.getElementById('phone-minus').addEventListener('click', function () {
    getShopCalculation ('phone', 1219, false)
}) 
document.getElementById('case-plus').addEventListener('click', function () {
    getShopCalculation ('case', 59, true)
}) 
document.getElementById('case-minus').addEventListener('click', function () {
    getShopCalculation ('case', 59, false)
})