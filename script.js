let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    let item = cart.find(p => p.name === name);
    if (item) item.qty++;
    else cart.push({ name, price, qty: 1 });
    updateCart();
}

function updateCart() {
    document.getElementById("cartCount").innerText = cart.length;
    localStorage.setItem("cart", JSON.stringify(cart));
}

function searchProduct() {
    let input = document.getElementById("search").value.toLowerCase();
    let cards = document.getElementsByClassName("card");

    for (let i = 0; i < cards.length; i++) {
        let text = cards[i].innerText.toLowerCase();
        cards[i].style.display = text.includes(input) ? "block" : "none";
    }
}

updateCart();
