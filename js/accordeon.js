document.querySelectorAll('.accordeon-topic').forEach((el) =>{
    const content = el.querySelector(".get-help-questions__ask-content");

    el.addEventListener('click', () => {
        content.classList.toggle('none');

        if (content.classList.contains('none')) {
                content.style.maxHeight = "0px";
                el.querySelector('.get-help-questions__ask-img').style.cssText = `transform: rotate(90deg);`;
            }
            else {
                content.style.maxHeight = content.scrollHeight + "px";
                el.querySelector('.get-help-questions__ask-img').style.cssText = `transform: rotate(45deg);`;
            }
    });
});