
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
}

function checkOutTotal () {
    const phonePrice = parseFloat(document.getElementById('phone-price').innerText);
    const casePrice = parseFloat(document.getElementById('case-price').innerText);
    const subTotalField = document.getElementById('sub-total');
    subTotalField.innerText = phonePrice + casePrice;
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

document.getElementById('check-out').addEventListener('click', function () {
    checkOutTotal ();
})