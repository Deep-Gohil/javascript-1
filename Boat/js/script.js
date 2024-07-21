import Footer from "../components/footer.js";
import Navbar from "../components/navbar.js";

// Function to show loader for 5 seconds
function showLoader() {
    document.getElementById("loader").style.display = "block";
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        showContent(); // Function to display content after loader
    }, 3000); // 5000 milliseconds = 5 seconds
}

function showContent() {
    document.getElementById("navbar").innerHTML = Navbar();
    shopByProductsMaker(shopByProducts);
    document.getElementById("footer").innerHTML = Footer();

    document.getElementById("cart").addEventListener("click", () => {
        window.location.href = "/Boat/pages/cart.html";
    });
}

// Call showLoader function when the page loads
document.addEventListener("DOMContentLoaded", showLoader);
