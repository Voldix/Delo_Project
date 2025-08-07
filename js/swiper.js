const swiper = new Swiper(".swiper", {
    navigation: {
        nextEl: ".swiper-btn-next",
        prevEl: ".swiper-btn-prev",
    },

    keyboard: {
        enabled: true,
        onlyInViewPort: true,
    },

    breakpoints: {
        768: {
            slidesPerView: "auto",
            spaceBetween: 11,
        },
    },

    slidesPerView: "auto",
    spaceBetween: 12,
    centredSlides: false,
    grabCursor: true,
});

new Swiper(".swiper-2", {
    keyboard: {
        enabled: true,
        onlyInViewPort: true,
    },

    breakpoints: {
        768: {
            slidesPerView: "auto",
            spaceBetween: 13,
        },
    },

    slidesPerView: "auto",
    spaceBetween: 15,
    centredSlides: false,
    grabCursor: true,
});


new Swiper(".swiper-3", {
    keyboard: {
        enabled: true,
        onlyInViewPort: true,
    },

    breakpoints: {
        768: {
            slidesPerView: "auto",
            spaceBetween: 13,
        },
    },

    slidesPerView: "auto",
    spaceBetween: 15,
    centredSlides: false,
    grabCursor: true,
});
