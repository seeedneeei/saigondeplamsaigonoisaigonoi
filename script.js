document.addEventListener("DOMContentLoaded", function () {
    const lyrics = [
        "Ngựa xe như nước trên đường vẫn qua mau",
        "Người ra thăm bến câu chào nói lao xao",
        "Phố xa thênh thang đón chân tôi đến chung vui",
        "Sài Gòn đẹp lắm",
        "Sài Gòn ơi",
        "Sài Gòn ơi!",
        "lalala"

    ];

    const delay = 33; 
    const lyricsElement = document.getElementById("lyrics");


    async function displayLyrics() {
        for (const line of lyrics) {
            for (const char of line) {
                lyricsElement.textContent += char;
                await new Promise((resolve) => setTimeout(resolve, delay));
            }

            lyricsElement.innerHTML += "<br>";

            await new Promise((resolve) => setTimeout(resolve, delay * 10));

            lyricsElement.innerHTML = "";

            await new Promise((resolve) => setTimeout(resolve, delay * 10));
        }

        //This should display image at the end
        const imageContainer = document.getElementById("imageContainer");

        const imageElement = document.createElement("img");
    
        imageElement.src = "https://image.lag.vn/upload/news/23/11/28/meme-josh-hutcherson-la-gi-2_EJFZ.jpg";
    
        imageElement.style.width = "300px";
        imageElement.style.height = "200px";
    
        imageContainer.appendChild(imageElement);
    }

    displayLyrics();
});
