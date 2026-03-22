let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    let item = cart.find(p => p.name === name);

    if (item) item.qty++;
    else cart.push({ name, price, qty: 1 });

    updateCart();
}

function updateCart() {
    let cartDiv = document.getElementById("cartItems");
    let total = 0;
    cartDiv.innerHTML = "";

    cart.forEach((item, index) => {
        total += item.price * item.qty;

        cartDiv.innerHTML += `
        <div>
            ${item.name} (${item.qty})
            <button onclick="changeQty(${index}, -1)">-</button>
            <button onclick="changeQty(${index}, 1)">+</button>
            <button onclick="removeItem(${index})">❌</button>
        </div>`;
    });

    document.getElementById("total").innerText = total;
    localStorage.setItem("cart", JSON.stringify(cart));
}

function changeQty(index, change) {
    cart[index].qty += change;
    if (cart[index].qty <= 0) cart.splice(index, 1);
    updateCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

function goToPayment(){
    if(cart.length === 0) alert("Cart is empty!");
    else window.location = "payment.html";
}

updateCart();
