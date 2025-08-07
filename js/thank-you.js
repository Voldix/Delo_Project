const form = document.querySelector("#help-form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const comment = document.querySelector("#comment");
const checkbox = document.querySelector("#checkbox");


form.addEventListener("submit", e => {
    e.preventDefault();

    if (!checkbox.checked) {
        e.preventDefault();
        alert("Вы не согласны с политикой обработки персональных данных");
    }
        if (
            username.value.length > 0 &&
            email.value.length > 0 &&
            comment.value.length > 0 &&
            checkbox.checked
        ) {
            window.location = "/thankyou-page.html";
            form.reset();
        } 
});
