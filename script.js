document.addEventListener("DOMContentLoaded", function () {
    const lyrics = [
        "Ngựa xe như nước trên đường vẫn qua mau",
        "Người ra thăm bến câu chào nói lao xao",
        "Phố xa thênh thang đón chânn tôi đến chung vui",
        "Sài Gòn đẹp lắm",
        "Sài Gòn ơi",
        "Sài Gòn ơi!",

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
    }

    displayLyrics();
});

