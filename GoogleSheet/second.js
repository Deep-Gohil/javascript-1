const handleSubmittion = (e) =>{
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
     
    if(password!=confirmPassword){
        alert("Passwords do not match");
        return;
    }
    else{
        alert(`Thank you for signing up, ${name}!`);
    }
    
}
document.getElementById("form").addEventListener("submit", handleSubmittion)
document.getElementById('arrowleft').addEventListener("click", () =>{
    window.location.href = "/GoogleSheet/index.html"
 
})
