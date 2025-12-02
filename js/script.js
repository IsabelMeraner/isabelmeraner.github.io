document.getElementById("hamburger-menu").addEventListener("click", expandMenu);
document.getElementById("sidebar").addEventListener("click", expandMenu);

function expandMenu() {
    console.log("Clicked ")
    let sidebar = document.getElementById("sidebar");
    const mediaQuery = window.matchMedia('(max-width: 900px)')

    if ((sidebar.style.display === "none" || sidebar.style.display === "") && mediaQuery.matches) {
        sidebar.style.display = "block"
    } else {
        sidebar.style.display = "none"
    }
}

var slideIndex = 0;
carousel();

function carousel() {
    var slides = document.getElementsByClassName("mySlides");
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].classList.add("active");
    setTimeout(carousel, 2000);
}

const gallery = document.getElementById("gallery");
const splashContainer = document.getElementById("splash-container");

gallery.addEventListener("click", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    // Background flash
    const flash = document.createElement("div");
    flash.className = "magic-flash";
    document.body.appendChild(flash);

    setTimeout(()=> flash.remove(), 1200);

    // Spawn particles
    for (let i = 0; i < 90; i++) {
        spawnParticle(x, y);
    }
});

function spawnParticle(x, y) {
    const p = document.createElement("div");

    // Star or circle
    p.className = "particle" + (Math.random() > 0.7 ? " star" : "");

    const size = Math.random() * 10 + 4;
    p.style.width = size + "px";
    p.style.height = size + "px";

    p.style.left = x + "px";
    p.style.top = y + "px";

    // Random blast vector
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 350 + 100;

    p.style.setProperty("--x", Math.cos(angle) * distance);
    p.style.setProperty("--y", Math.sin(angle) * distance);

    splashContainer.appendChild(p);

    // Auto cleanup
    setTimeout(() => {
        p.remove();
    }, 1400);
}

document.getElementById("year").textContent = new Date().getFullYear();
