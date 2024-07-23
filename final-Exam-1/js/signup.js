import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar()

const handleSignUP = (e) =>{
    e.preventDefault();
    let user = {
        username: document.getElementById("username").value,
        number: document.getElementById("number").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    }
    localStorage.setItem("user",JSON.stringify(user));
    localStorage.setItem("isSignup",true)
    window.location.href = "/final-Exam-1/index.html"
}

document.getElementById("form").addEventListener("submit",handleSignUP)