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