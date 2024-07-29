import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar()

const API = async() =>{
    let request = await fetch("https://json-server-deployment-7yxg.onrender.com/courses")
    let response = await request.json()
    return response
}

const Caller = async()=>{
    let response = await API()
    if(response!=null){
        Mapper(response)
    }
    else{
        console.log("Error")
    }
}

Caller()

const Mapper = (data) => {
    console.log(data);
    data.map((ele)=>{
        let div = document.createElement('div')
        div.classList.add('course-container','border','border-1')

        let image = document.createElement('img')
        image.src = ele.image
        image.classList.add('img-fluid')

        let title = document.createElement('h6')
        title.innerHTML = ele.name
        title.classList.add('font')

        let description = document.createElement('p')
        description.innerHTML = ele.description

        let view = document.createElement("span");
        view.classList.add("recepi");

        let viewRecepie = document.createElement("button");
        viewRecepie.innerHTML = "Watch Video Now";
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

        view.append(viewRecepie, Order);

        let category = document.createElement('p')
        category.innerHTML = `Category: ${ele.category}`

        div.append(image,title, description, category, view)
        document.getElementById('courses').appendChild(div)

    })
}