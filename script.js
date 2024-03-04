const products = document.getElementById("product-container");
var cars = [];
var ItemsInCart =  [];

function AddToCart(i) {
    ItemsInCart.push(cars[i]);
    localStorage.setItem("ItemsInCart", JSON.stringify(ItemsInCart));
}

fetch("./cars.json")
.then((response) => response.json())
.then((json) => {
    cars = json.cars;
    loadProducts();
    });