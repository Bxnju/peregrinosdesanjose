const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementsByTagName("nav")[0];

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("open");
    menu.classList.toggle("nav-open");
});
