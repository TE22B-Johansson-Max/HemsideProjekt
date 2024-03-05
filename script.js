const products = document.getElementById("product-container");
const cart = document.getElementById("CartItems");
var cars = [];
var ItemsInCart =  [];

function AddToCart(i) {
    ItemsInCart.push(cars[i]);
    localStorage.setItem("ItemsInCart", JSON.stringify(ItemsInCart));
}

function Cart() {
    var itemsInCart = JSON.parse(localStorage.getItem("ItemsInCart"));
    var cartHTML = document.getElementById("CartItems");
    cartHTML.innerHTML = "";
    itemsInCart.forEach(car => {
        cartHTML.innerHTML += "<li>" + car.name + " - " + car.price + " kr" + "</li>"; 
    });

}

fetch("./cars.json")
.then((response) => response.json())
.then((json) => {
    cars = json.cars;
    loadProducts();
    });

document.onload = Cart()