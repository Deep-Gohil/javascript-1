import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar()

const handleSignUP = (e) =>{
    e.preventDefault();
    let user = {
        username: document.getElementById("username").value,
        number: document.getElementById("number").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        adminOruser: document.getElementById("adminUser").value
    }
    localStorage.setItem("user",JSON.stringify(user));
    localStorage.setItem("isSignup",true)
    window.location.href = "/Final-Exam-3/index.html"
}

document.getElementById("form").addEventListener("submit",handleSignUP)

// Check if user is admin
const user = JSON.parse(localStorage.getItem("user"));
if (user && user.adminOruser === "admin") {
    document.getElementById("adminInterface").style.display = "block";
} else {
    document.getElementById("userInterface").style.display = "block";
}

// Handle course creation
document.getElementById("courseForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = document.getElementById("courseTitle").value;
    const image = document.getElementById("courseImage").value;
    const description = document.getElementById("courseDescription").value;
    const seats = document.getElementById("courseSeats").value;
    const coupon = document.getElementById("courseCoupon").value;
    const topics = Array.from(document.querySelectorAll("#topics div")).map(topicDiv => {
        return {
            topic: topicDiv.querySelector("input:nth-child(1)").value,
            subTopic: topicDiv.querySelector("input:nth-child(2)").value
        };
    });

    const course = { title, image, description, seats, coupon, topics };

    const response = await fetch("https://json-server-deployment-7yxg.onrender.com/courses", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(course)
    });

    if (response.ok) {
        alert("Course created successfully");
        document.getElementById("courseForm").reset();
    } else {
        alert("Failed to create course");
    }
});

document.getElementById("addTopic").addEventListener("click", () => {
    const topicDiv = document.createElement("div");
    topicDiv.innerHTML = `
        <input type="text" placeholder="Topic">
        <input type="text" placeholder="Sub-topic">
    `;
    document.getElementById("topics").appendChild(topicDiv);
});

const API = async () => {
    let request = await fetch("https://json-server-deployment-7yxg.onrender.com/courses");
    let response = await request.json();
    return response;
}

const Caller = async () => {
    let response = await API();
    if (response != null) {
        Mapper(response);
    } else {
        console.log("Error");
    }
}

Caller();

const Mapper = (data) => {
    console.log(data);
    data.map((ele) => {
        let div = document.createElement('div');
        div.classList.add('course-container', 'border', 'border-1');

        let image = document.createElement('img');
        image.src = ele.image;
        image.classList.add('img-fluid');

        let title = document.createElement('h6');
        title.innerHTML = ele.name;
        title.classList.add('font');

        let description = document.createElement('p');
        description.innerHTML = ele.description;

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
            alert("Added To Cart");
        });

        view.append(viewRecepie, Order);

        let category = document.createElement('p');
        category.innerHTML = `Category: ${ele.category}`;

        div.append(image, title, description, category, view);
        document.getElementById('courses').appendChild(div);
    });
}

// Add to cart function
const addToCart = (course) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(course);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCourseSeats(course.id, -1);
}

// Update course seats
const updateCourseSeats = async (courseId, delta) => {
    const response = await fetch(`https://json-server-deployment-7yxg.onrender.com/courses/${courseId}`);
    const course = await response.json();
    course.seats += delta;

    await fetch(`https://json-server-deployment-7yxg.onrender.com/courses/${courseId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ seats: course.seats })
    });
}

// Dashboard display
const displayDashboard = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const dashboard = document.createElement('div');
    cart.forEach(course => {
        let div = document.createElement('div');
        div.classList.add('course-container', 'border', 'border-1');

        let title = document.createElement('h6');
        title.innerHTML = course.name;
        title.classList.add('font');

        let topics = document.createElement('div');
        topics.classList.add('accordion');
        course.topics.forEach((topic, index) => {
            let item = document.createElement('div');
            item.classList.add('accordion-item');

            let header = document.createElement('h2');
            header.classList.add('accordion-header');
            header.id = `heading${index}`;

            let button = document.createElement('button');
            button.classList.add('accordion-button');
            button.type = 'button';
            button.setAttribute('data-bs-toggle', 'collapse');
            button.setAttribute('data-bs-target', `#collapse${index}`);
            button.setAttribute('aria-expanded', 'true');
            button.setAttribute('aria-controls', `collapse${index}`);
            button.innerHTML = topic.topic;

            header.appendChild(button);
            item.appendChild(header);

            let collapse = document.createElement('div');
            collapse.id = `collapse${index}`;
            collapse.classList.add('accordion-collapse', 'collapse', 'show');
            collapse.setAttribute('aria-labelledby', `heading${index}`);
            collapse.setAttribute('data-bs-parent', '.accordion');

            let body = document.createElement('div');
            body.classList.add('accordion-body');
            body.innerHTML = topic.subTopic;

            collapse.appendChild(body);
            item.appendChild(collapse);

            topics.appendChild(item);
        });

        div.append(title, topics);
        dashboard.appendChild(div);
    });
    document.body.appendChild(dashboard);
}

if (window.location.href.includes("dashboard.html")) {
    displayDashboard();
}

// Sorting, Searching, and Filtering
const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    const courses = document.querySelectorAll('.course-container');
    courses.forEach(course => {
        const title = course.querySelector('h6').innerText.toLowerCase();
        if (title.includes(query)) {
            course.style.display = 'block';
        } else {
            course.style.display = 'none';
        }
    });
}

document.getElementById("searchInput").addEventListener("input", handleSearch);
