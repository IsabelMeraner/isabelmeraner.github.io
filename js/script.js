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
