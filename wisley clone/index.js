const menubar = document.querySelector(".menubar");

const menu = document.querySelector(".menu");
const menu2 = document.querySelector(".menu2");
const sidebar = document.querySelector(".sidebar");

const menubarImg = document.querySelector(".menuImg");

menubar.addEventListener("click", () => {
    menu.classList.toggle("active");
    menu2.classList.toggle("active");
    sidebar.classList.toggle("active");
    menubarImg.classList.toggle("active");
    document.body.classList.toggle("active");
});
