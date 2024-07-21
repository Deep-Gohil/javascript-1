import Footer from "../components/footer.js";
import Navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = Navbar();

let products =
    [
        {
            "id": 1,
            "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/ION_ANC__1.jpg?v=1703228258",
            "icon": "<i class=\"fa-solid fa-star\"></i> 5.0 | 77<i class=\"fa-solid fa-certificate\"></i>",
            "name": "Nirvana Icon ANC",
            "price": 2499,
            "plaback": "120 Hour Playback"
        },
        {
            "id": 2,
            "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Nirvana_Ion.jpg?v=1697621745",
            "icon": "<i class=\"fa-solid fa-star\"></i> 5.0 | 77<i class=\"fa-solid fa-certificate\"></i>",
            "name": "Nirvana Icon ANC",
            "price": 1999,
            "plaback": "60 Hour Playback"
        },
        {
            "id": 3,
            "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_f04f74fd-45d4-4614-85cf-6ccf69c4cf90.jpg?v=1691395049",
            "icon": "<i class=\"fa-solid fa-star\"></i> 5.0 | 77<i class=\"fa-solid fa-certificate\"></i>",
            "name": "Nirvana Icon ANC",
            "price": 3499,
            "plaback": "140 Hour Playback"
        },
        {
            "id": 4,
            "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_131_e7e95f2c-0bb3-492e-89df-613a2cfb792f.jpg?v=1686297917",
            "icon": "<i class=\"fa-solid fa-star\"></i> 5.0 | 77<i class=\"fa-solid fa-certificate\"></i>",
            "name": "Nirvana Icon ANC",
            "price": 2499,
            "plaback": "120 Hour Playback"
        },
        {
            "id": 5,
            "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_141.png?v=1703145765",
            "icon": "<i class=\"fa-solid fa-star\"></i> 5.0 | 77<i class=\"fa-solid fa-certificate\"></i>",
            "name": "Nirvana Icon ANC",
            "price": 2499,
            "plaback": "120 Hour Playback"
        },
        {
            "id": 6,
            "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_161.jpg?v=1686297917",
            "icon": "<i class=\"fa-solid fa-star\"></i> 5.0 | 77<i class=\"fa-solid fa-certificate\"></i>",
            "name": "Nirvana Icon ANC",
            "price": 2499,
            "plaback": "120 Hour Playback"
        },
        {
            "id": 8,
            "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_170.jpg?v=1703224914",
            "icon": "<i class=\"fa-solid fa-star\"></i> 5.0 | 77<i class=\"fa-solid fa-certificate\"></i>",
            "name": "Nirvana Icon ANC",
            "price": 2499,
            "plaback": "120 Hour Playback"
        },
        {
            "id": 9,
            "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/PB300.jpg?v=1700300890",
            "icon": "<i class=\"fa-solid fa-star\"></i> 5.0 | 77<i class=\"fa-solid fa-certificate\"></i>",
            "name": "Nirvana Icon ANC",
            "price": 2499,
            "plaback": "120 Hour Playback"
        },
        {
            "id": 10,
            "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/PB400_628ae039-11be-4f0b-b723-651e2bb05de7.jpg?v=1700300890",
            "icon": "<i class=\"fa-solid fa-star\"></i> 5.0 | 77<i class=\"fa-solid fa-certificate\"></i>",
            "name": "Nirvana Icon ANC",
            "price": 2499,
            "plaback": "120 Hour Playback"
        },
        {
            "id": 11,
            "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_138.jpg?v=1698402384",
            "icon": "<i class=\"fa-solid fa-star\"></i> 5.0 | 77<i class=\"fa-solid fa-certificate\"></i>",
            "name": "Nirvana Icon ANC",
            "price": 2499,
            "plaback": "120 Hour Playback"
        },
        {
            "id": 12,
            "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_148.jpg?v=1698909797",
            "icon": "<i class=\"fa-solid fa-star\"></i> 5.0 | 77<i class=\"fa-solid fa-certificate\"></i>",
            "name": "Nirvana Icon ANC",
            "price": 2499,
            "plaback": "120 Hour Playback"
        },
        {
            "id": 13,
            "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes-163.jpg?v=1682408982",
            "icon": "<i class=\"fa-solid fa-star\"></i> 5.0 | 77<i class=\"fa-solid fa-certificate\"></i>",
            "name": "Nirvana Icon ANC",
            "price": 2499,
            "plaback": "120 Hour Playback"
        },
    ]
let cartItem = JSON.parse(localStorage.getItem("cart")) || []
let array = []

const Setter = (data) => {
    data.map((ele) => {
        if (ele.id == cartItem) {
            array.push(ele)
        }
    })
}
Setter(products);

const Mapper = (data) => {
    data.map((ele) => {
        let div = document.createElement("div")
        div.classList.add("cartParentDiv")

        let imageParent = document.createElement("div")
        let detailparent = document.createElement("div")

        let image = document.createElement("img")
        image.src = ele.image
        image.classList.add("img-fluid","cartImages")

        let name = document.createElement("h1")
        name.innerHTML = ele.name

        let price = document.createElement("p")
        price.innerHTML = "Price: $" + ele.price

        let icon = document.createElement("p")
        icon.innerHTML = ele.icon

        let plaback = document.createElement("p")
        plaback.innerHTML = "Playback: " + ele.plaback

        imageParent.append(image)
        detailparent.append(name, price, icon, plaback)
        div.append(imageParent,detailparent)

        document.getElementById("cart1").append(div)

    })
}

Mapper(array)