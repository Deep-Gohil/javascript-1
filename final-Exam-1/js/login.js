import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar()

let isSignup = JSON.parse(localStorage.getItem("isSignup"))
let user = JSON.parse(localStorage.getItem("user"))

const handleLogin = (e) =>{
    e.preventDefault();
        let email = document.getElementById("email").value
        let password = document.getElementById("password").value

    if(isSignup){
        if (email != user.email) {
            alert("User Not Found: " + email)
        }
        else if (password != user.password) {
            alert("Invalid Password")
        }
        else {
            alert("Login Successful")
            localStorage.setItem("isLoggedIn", true)
            window.location.href = "/final-Exam-1/index.html"
        }
    }
    else{
        alert("Please Sign Up First")
        window.location.href = "/final-Exam-1/pages/signup.html"
    }
}

document.getElementById("form").addEventListener("submit", handleLogin);