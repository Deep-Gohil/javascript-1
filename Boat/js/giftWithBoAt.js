import Footer from "../components/footer.js";
import Navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = Navbar();
document.getElementById("footer").innerHTML = Footer();

document.getElementById("cart").addEventListener("click",()=>{
    window.location.href = "/Boat/pages/cart.html"
})
