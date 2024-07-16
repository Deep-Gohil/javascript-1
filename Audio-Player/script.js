let musics = [
    {
        image: "https://i1.sndcdn.com/artworks-DCgWFLn6HwboMbgy-FggHsw-t1080x1080.jpg",
        name: "Be Mine",
        audio: './Audio/Be Mine - Shubh.mp3',
        icon: `<i class="fa-solid fa-play"></i>`
    },
    {
        image: "https://www.musiculture.in/wp-content/uploads/2024/06/PHOTO-2024-06-25-14-01-19-1-800x800.jpg",
        name: "Chahun",
        audio: './Audio/Chahun - Stebin Ben.mp3',
        icon: `<i class="fa-solid fa-play"></i>`
    },
    {
        image: "https://c.saavncdn.com/057/Gulabi-Gaal-Hindi-2024-20240704040002-500x500.jpg",
        name: "Gulabi Gal",
        audio: './Audio/Gulabi Gaal - Saaj Bhatt.mp3',
        icon: `<i class="fa-solid fa-play"></i>`
    },
    {
        image: "https://c.saavncdn.com/858/Aavesham-Malayalam-2024-20240514204401-500x500.jpg",
        name: "Illuminati",
        audio: './Audio/Illuminati.mp3',
        icon: `<i class="fa-solid fa-play"></i>`
    },
    {
        image: "https://c.saavncdn.com/777/Pagal-Punjabi-2019-20190909161954-500x500.jpg",
        name: "Pagal",
        audio: './Audio/Pagal - Guru Randhawa.mp3',
        icon: `<i class="fa-solid fa-play"></i>`
    },
    {
        image: "https://c.saavncdn.com/511/Paon-Ki-Jutti-Punjabi-2024-20240504053321-500x500.jpg",
        name: "Paun Ki jooti",
        audio: './Audio/Paon Ki Jutti.mp3',
        icon: `<i class="fa-solid fa-play"></i>`
    },
    {
        image: "https://c.saavncdn.com/567/Papa-Kehte-Hain-From-Srikanth-Hindi-2024-20240419191003-500x500.jpg",
        name: "Papa Kehte Hai",
        audio: './Audio/Papa Kehte Hain - Srikanth.mp3',
        icon: `<i class="fa-solid fa-play"></i>`
    },
    {
        image: "https://www.thestatesman.com/wp-content/uploads/2024/05/Allu-Arjun-in-Pushpa-Pushpa-song.jpg",
        name: "Pushpa Pushpa",
        audio: './Audio/Pushpa Pushpa - Pushpa 2.mp3',
        icon: `<i class="fa-solid fa-play"></i>`
    },
    {
        image: "https://c.saavncdn.com/178/Savarne-Lage-Hindi-2024-20240508122731-500x500.jpg",
        name: "Savarne Lage",
        audio: './Audio/Savarne Lage - Laqshay Kapoor.mp3',
        icon: `<i class="fa-solid fa-play"></i>`
    },
   
]

const handleData = (e) => {
    document.getElementById("imageBig").src = e.image
    // console.log(e.audio);
    let aud = document.getElementById("audioTag")
    aud.src = e.audio

}

const Mapper = (audios) => {
    audios.map((ele) => {
        let div = document.createElement("div");
        div.classList.add("divMain");

        let audio = document.createElement("audio");
        audio.src = ele.audio;
        audio.controls = true;

        let image = document.createElement("img");
        image.src = ele.image;
        image.classList.add("img-fluid", "images");

        let name = document.createElement("h2");
        name.innerHTML = ele.name;

        let hr = document.createElement("hr")
        let icon = document.createElement("i");
        icon.classList.add("fa", "fa-play", "play-icon");
        
        let iconParent = document.createElement("div");
        iconParent.classList.add("iconparent")
        iconParent.append(icon);
        iconParent.addEventListener("click", () => handleData(ele))

        div.append(image, name, iconParent);
        document.getElementById("AudioPlayerList").append(div,hr);

    })
}

Mapper(musics);