import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

const API = async () => {
    let request = await fetch("https://json-server-deployment-7yxg.onrender.com/recepies");
    let response = await request.json();
    return response;
};

const Caller = async (mealType = null) => {
    let response = await API();
    if (response != null) {
        if (mealType) {
            response = response.filter(ele => ele.mealType.includes(mealType));
        }
        Mapper(response);
        document.getElementById("loader").classList.add('d-none');
        document.querySelector(".loadter-main").classList.add("d-none");
    } else {
        document.getElementById("loader").classList.remove('d-block');
        document.querySelector(".loadter-main").classList.add("d-block");
    }
};

Caller();

const Mapper = (data) => {
    document.getElementById("recepies").innerHTML = "";
    data.map((ele) => {
        let div = document.createElement("div");
        div.classList.add("div");

        let image = document.createElement("img");
        image.src = ele.image;
        image.classList.add("img-fluid", "images");

        let name = document.createElement("h1");
        name.innerHTML = ele.name;
        name.classList.add("title");

        let rating = document.createElement("h6");
        rating.innerHTML = "Rating: " + ele.rating;

        let mealType = document.createElement("h5");
        mealType.innerHTML = "Meal Type: " + ele.mealType.join(", ");

        let country = document.createElement("h6");
        country.innerHTML = "Country: " + ele.cuisine;

        let recepi = document.createElement("span");
        recepi.classList.add("recepi");

        let viewRecepie = document.createElement("button");
        viewRecepie.innerHTML = "View Recepie";
        viewRecepie.classList.add("btn", "btn-primary");
        viewRecepie.addEventListener("click", () => {
            window.location.href = "/final-Exam-1/pages/recepie.html";
            localStorage.setItem("recepie", JSON.stringify(ele));
        });

        let Order = document.createElement("button");
        Order.innerHTML = "Order Now";
        Order.classList.add("btn", "btn-primary");
        Order.addEventListener("click", () => {
            addToCart(ele);
            // window.location.href = "/final-Exam-1/pages/cart.html";
            alert("Added To Cart")
        });

        recepi.append(viewRecepie, Order);

        div.append(image, name, rating, mealType, country, recepi);

        document.getElementById("recepies").append(div);
    });
};

const addToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        item.quantity = 1;
        cart.push(item);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
};

const handleDinner = () => {
    Caller("Dinner");
};

const handleLunch = () => {
    Caller("Lunch");
};

const handleSnack = () => {
    Caller("Snack");
};

const handleAll = () => {
    Caller();
};

document.getElementById("dinner").addEventListener("click", handleDinner);
document.getElementById("lunch").addEventListener("click", handleLunch);
document.getElementById("snack").addEventListener("click", handleSnack);
document.getElementById("all").addEventListener("click", handleAll);

document.addEventListener("contextmenu", (e)=>{
    e.preventDefault();
    alert("Right click disabled");
})