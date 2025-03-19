const openMenu = document.querySelector(".open-menu");
const navBar = document.querySelector(".nav-links");

openMenu.addEventListener("click", () => {
    if(navBar.style.display === "flex") {
        navBar.style.display = "none";
        openMenu.src = "./images/icon-hamburger.svg";
        navBar.classList.remove("mobile");
    } else {
        navBar.style.display = "flex";
        openMenu.src = "./images/icon-close.svg";
        navBar.classList.add("mobile");
    }
});

document.querySelectorAll(".span-header span").forEach(span => {
    span.addEventListener("click", function() {
        const cardIndex = this.getAttribute("data-card");
        document.querySelectorAll(".card").forEach(card => {
            card.style.display = card.getAttribute("data-index") === cardIndex ? "block" : "none";
        });
    });
});