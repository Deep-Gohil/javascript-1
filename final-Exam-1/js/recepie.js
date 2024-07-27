import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar()
let data = JSON.parse(localStorage.getItem("recepie")) || []

let image = document.getElementById("resImage")
image.src = data.image
image.classList.add("img-flui","imageRes")

let name = document.getElementById("name")
name.innerHTML = data.name

let ingredients = document.getElementById("instructions")
ingredients.innerHTML = `Ingredients: ${data.ingredients}`