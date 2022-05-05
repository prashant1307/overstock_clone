
if (arr.length == 0)
{
    empty();
} else
{
    showProduct();
}


function empty() {
    let msg = document.createElement("h2");
    msg.setAttribute("id","emptyMsg");
    msg.innerText = "Your shopping cart is empty."

    document.getElementsByClassName(".counter").innerText = "(0)";
    document.getElementsByClassName(".total").innerText = "$0.00";
    document.getElementById("finalTotal").innerText = "$0.00";
}

function showProduct() {
    document.getElementById("productImage").src = url;
    document.getElementById("productName").innerText = "name";
    document.getElementById("productPrice").innerText = price;

    document.getElementsByClassName(".counter").innerText = "(${length})";
    document.getElementsByClassName(".total").innerText = total;
    document.getElementById("finalTotal").innerText = total;
}



