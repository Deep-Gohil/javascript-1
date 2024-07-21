import Footer from "../components/footer.js";
import Navbar from "../components/navbar.js";
function showLoader() {
    document.getElementById("loader").style.display = "block";
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        showContent(); 
    }, 3000); 
}

function showContent() {
    document.getElementById("navbar").innerHTML = Navbar();
    document.getElementById("footer").innerHTML = Footer();

    document.getElementById("cart").addEventListener("click", () => {
        window.location.href = "/Boat/pages/cart.html";
    });
}

document.addEventListener("DOMContentLoaded", showLoader);
