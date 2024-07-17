import Footer from "../components/footer.js";
import Navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = Navbar();

let cartItem = JSON.parse(localStorage.getItem("cart")) || {}
console.log(cartItem);

