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

document.querySelector("#portifolio").addEventListener("click", () => {
    window.open("https://github.com/IsisHao3024N/portif-lio", "_blank");
});

document.querySelector("#sistem").addEventListener("click", () => {
    window.open("https://isishao3024n.github.io/cadastro/", "_blank");
});

document.querySelector("#sistemCod").addEventListener("click", () => {
    window.open("https://github.com/IsisHao3024N/cadastro", "_blank");
});

document.querySelector("#prototipo").addEventListener("click", () => {
    window.open("https://www.figma.com/design/24LGrouOIqSdYCnQ8iQ9w1/pastelaria?node-id=0-1&t=U0f9gEDZu6202Hrj-1", "_blank");
});

document.querySelector("#prototipoCod").addEventListener("click", () => {
    window.open("https://github.com/IsisHao3024N/pastearia-liart", "_blank");
});