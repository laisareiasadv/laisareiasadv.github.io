const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});