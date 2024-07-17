const API = async (search) => {
    let request = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${search}&type=video&key=AIzaSyAiv5kFuY2-EcmjbfjHbehZEhQx4TyU7vQ`)
    let response = await request.json()
    // console.log(response.items);
    return response.items;
}

const Mapper = (data) => {
    document.getElementById("videoContainer").innerHTML = ""
    data.map((ele) => {
        // console.log(ele);
        let div = document.createElement("div")
        div.classList.add("div1",)

        let image = document.createElement("img")
        let title = document.createElement("h6")
        let channelTitle = document.createElement("h5")

        image.src = ele.snippet.thumbnails.medium.url
        image.classList.add("img-fluid")
        // console.log(ele);
        image.addEventListener("click", () => { 
            localStorage.setItem("videoID", JSON.stringify(ele.id.videoId))
            window.location.href = "/Youtube/videoPlayer.html" 
        })
        title.innerHTML = ele.snippet.title

        channelTitle.innerHTML = ele.snippet.channelTitle

        div.append(image, title, channelTitle)

        document.getElementById("videoContainer").append(div)
    });
}

const fetchDataAndMap = async (search) => {
    let data = await API(search);
    Mapper(data);
}

const handleSearch = (e) => {
    // console.log(e.key);
    if (e.key == "Enter") {
        let searchReesult=document.getElementById("search").value
        fetchDataAndMap(searchReesult);
    }
}


document.getElementById("search").addEventListener("keypress", handleSearch)

fetchDataAndMap("");
