import {topmost,navbar,bottom_nav} from "../components/navbar.js";



document.getElementById("topmost").innerHTML = topmost();
document.getElementById("navbar").innerHTML = navbar();
document.getElementById("bottom_nav").innerHTML = bottom_nav();





var cartProducts = JSON.parse(localStorage.getItem("cartData"));
// console.log(cartData);

displayData(cartProducts);

// Calculating total price of items
var total = cartProducts.reduce(function(sum,elem){
    return sum + Number(elem.price);
}, 0);


console.log(total);
document.getElementById("finalTotal").innerText = `${total}`;
document.querySelector("#sumtotal").innerText = `${total}`;


let displayData = (cartProducts) => {

    cartProducts.map((elem,index) => {
        var product = document.createElement("div");
        product.setAttribute("class","productBox");
        
    });

}

let removeItem = (elem,index) => {
    console.log(elem,index);
    cartProducts.splice(index,1);
    console.log(cartProducts);
    localStorage.setItem("cartData",JSON.stringify(cartProducts));
    window.location.reload();
    //displayData(cartProducts);
}



document.querySelector(".counter").innerText = cartProducts.length;



