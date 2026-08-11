const menuToggle = document.getElementById("menu-toggle");
const menuMobile = document.getElementById("menu-mobile");

menuToggle.addEventListener("click", () => {

    menuMobile.classList.toggle("active");
    menuToggle.classList.toggle("active");

});

document.querySelector("#whatsapp").addEventListener("click", () => {
    window.open("https://wa.me/5535999258133", "_blank");
});

document.querySelector("#linkedin").addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/izadora-vitoria-silva/", "_blank");
});

document.querySelector("#github").addEventListener("click", () => {
    window.open("https://github.com/IsisHao3024N", "_blank");
});

document.querySelector("#email").addEventListener("click", () => {
    window.open("https://mail.google.com/mail/u/0/#inbox", "_blank");
});