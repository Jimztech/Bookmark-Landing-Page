const openMenu = document.querySelector(".open-menu");
const navBar = document.querySelector(".nav-links");
const spans = document.querySelectorAll(".span-header span");
const indicator = document.querySelector(".indicator");
const toggleButton = document.querySelectorAll(".toggle-icon");

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

spans.forEach(span => {
    span.addEventListener("click", function() {
        setIndicator(this);
        const cardIndex = this.getAttribute("data-card");
        document.querySelectorAll(".card").forEach(card => {
            card.style.display = card.getAttribute("data-index") === cardIndex ? "block" : "none";
        });
    });
});

toggleButton.forEach(toggle => {
    toggle.addEventListener("click", function() {
        const imgIndex = this.getAttribute("data-image");
        document.querySelectorAll(".answer").forEach(answer => {
            answer.style.display = answer.getAttribute("data-answer") === imgIndex 
                ? (answer.style.display === "block" ? "none" : "block")
                : "none";
        });
    });
});

const setIndicator = (element) => {
    indicator.style.width = `${element.offsetWidth}px`;
    indicator.style.transform = `translateX(${element.offsetLeft}px)`
};

setIndicator(spans[0]);

