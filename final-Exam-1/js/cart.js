import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

const loadCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    
    cart.forEach(item => {
        let div = document.createElement("div");
        div.classList.add("cart-item");

        let image = document.createElement("img");
        image.src = item.image;
        image.classList.add("img-fluid", "images");

        let name = document.createElement("h2");
        name.innerHTML = item.name;

        let quantity = document.createElement("p");
        quantity.innerHTML = `Quantity: ${item.quantity}`;

        let increase = document.createElement("button");
        increase.innerHTML = "+";
        increase.addEventListener("click", () => {
            item.quantity += 1;
            localStorage.setItem("cart", JSON.stringify(cart));
            loadCart();
        });

        let decrease = document.createElement("button");
        decrease.innerHTML = "-";
        decrease.addEventListener("click", () => {
            if (item.quantity > 1) {
                item.quantity -= 1;
            } else {
                cart = cart.filter(cartItem => cartItem.id !== item.id);
            }
            localStorage.setItem("cart", JSON.stringify(cart));
            loadCart();
        });

        div.append(image,name, quantity,decrease, increase);
        cartItems.append(div);
    });
};

loadCart();
