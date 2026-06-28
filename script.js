const music = document.getElementById("bgMusic");

document.addEventListener("click", () => {
    music.play();
}, { once: true });