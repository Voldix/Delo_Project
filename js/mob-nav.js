const btn = document.querySelector("#btn-mobile-nav");
const mobileBtnImg = document.querySelector("#mobile-nav-img");
const mobileNav = document.querySelector("#mobile-nav");

btn.addEventListener("click", (e) => {
    btn.classList.toggle("open");
    mobileNav.classList.toggle("open");

    if (btn.classList.contains("open")) {
        mobileBtnImg.src = "./img/header/close-btn.svg";
        mobileBtnImg.style.scale = 1.4;
        document.body.classList.add("no-scroll");

    } else {
        mobileBtnImg.src = "./img/header/burger-btn-mob.svg";
        mobileBtnImg.style.scale = 1;
        document.body.classList.remove("no-scroll");
    }
});


