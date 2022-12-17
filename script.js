let menu = document.querySelector(".navbar .menu");
let btnMenu = document.querySelector(".navbar .btn-menu");
let btnClose = document.querySelector(".navbar .btn-close");
let shadow = document.querySelector(".navbar .shadow");

console.log(menu)
console.log(btnMenu)
console.log(btnClose)
console.log(shadow)

btnMenu.addEventListener("click", function () {
    menu.classList.add("active");
    shadow.classList.add("active");
    btnClose.addEventListener("click", function () {
        menu.classList.remove("active");
        shadow.classList.remove("active");
    })
})