var totleprice = 0;
var quantity = 0;
const addCard=(productPrice)=>{
    totleprice = totleprice+productPrice;
    quantity = quantity+1;
    document.getElementById("quantity").innerText = quantity;
    document.getElementById("totlePrice").innerText = totleprice;
}
// document.getElementById("quantity").innerText = quantity;
// document.getElementById("totlePrice").innerText = totleprice;

// console.log(totleprice)
// console.log(quantity)