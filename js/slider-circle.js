const sliderBtns = document.querySelector(".slider-btns");
const sliderPrevBtn = document.querySelector(".swiper-btn-prev");

function circle() {
    if (window.innerWidth > 767) {
        if (sliderPrevBtn.classList.contains("swiper-button-lock")) {
            sliderBtns.style.display = "none";
        } else {
            sliderBtns.style.display = "flex";
        }
    } else {
        sliderBtns.style.display = "none";
    }
}

window.addEventListener("scroll", circle);
window.addEventListener("resize", circle);
window.addEventListener("load", circle);
document.addEventListener("mousemove", circle);
