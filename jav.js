let slides = document.querySelectorAll(".slide");
let currentIndex = 0;
let startX = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

document.getElementById("slideshow").addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

document.getElementById("slideshow").addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
        currentIndex = (currentIndex + 1) % slides.length;
    } else if (endX - startX > 50) {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    }
    showSlide(currentIndex);
});

const audio = document.getElementById("bgAudio");

document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
        audio.pause();
    } else {
        if (audio.paused) {
            audio.play().catch(error => console.log("Autoplay prevented:", error));
        }
    }
});