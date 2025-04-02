const openMenu = document.querySelector(".open-menu");
const navBar = document.querySelector(".nav-links");
const spans = document.querySelectorAll(".span-header span");
const indicator = document.querySelector(".indicator");
const toggleButton = document.querySelectorAll(".toggle-icon");
const mediaQuery = window.matchMedia("(min-width: 900px)");
const cards = document.querySelectorAll(".card");
const featureContent = document.querySelector(".feature-content");

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

// Feature animation
document.addEventListener("DOMContentLoaded", function() {
    function handleScroll() {
        cards.forEach((card) => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if(cardTop < windowHeight - 100) {
                card.classList.add("show");
            }
        });

        if(featureContent) {
            const contentTop = featureContent.getBoundingClientRect().top;

            if(contentTop < window.innerHeight - 100) {
                featureContent.classList.add("show");
            }
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});

// Feature section.
spans.forEach(span => {
    span.addEventListener("click", function() {
        setIndicator(this);

        const cardIndex = this.getAttribute("data-card");

        cards.forEach(card => {
            if(!mediaQuery.matches) {
                card.style.display = card.getAttribute("data-index") === cardIndex 
                    ? "block" : "none";
            } else {
                card.classList.toggle("active", card.getAttribute("data-index") === cardIndex);
            }
        })
    });
});

const setIndicator = (element) => {
    indicator.style.width = `${element.offsetWidth}px`;
    indicator.style.transform = `translateX(${element.offsetLeft}px)`
};

const initializeDisplay = () => {
    setIndicator(spans[0]);
    cards.forEach(card => {
        if(mediaQuery.matches) {
            card.classList.toggle('active', card.getAttribute("data-index") === "1")
        } else {
            card.style.display = card.getAttribute("data-index") === "1" 
                ? "block" : "none";
        }
    });
};

initializeDisplay();
mediaQuery.addEventListener("change", initializeDisplay);


// question section.
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
