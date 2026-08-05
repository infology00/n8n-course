const megaParent = document.querySelector(".mega-parent");
const megaMenu = document.querySelector(".mega-menu");

let closeTimer;

megaParent.addEventListener("mouseenter", () => {

    clearTimeout(closeTimer);

    megaMenu.classList.add("active");

});

megaParent.addEventListener("mouseleave", () => {

    closeTimer = setTimeout(() => {

        megaMenu.classList.remove("active");

    },150);

});
