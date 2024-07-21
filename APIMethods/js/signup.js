import { ApiMethods } from "../Api/apiMethods.js";

const HandlePost = (e) =>{
    e.preventDefault();
    let user = {
        name: document.getElementById('name').value,
        course: document.getElementById('course').value,
        number: document.getElementById('number').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    }
    // console.log(user);
    ApiMethods.post(user)
    
}

document.getElementById('form').addEventListener("submit",HandlePost)
