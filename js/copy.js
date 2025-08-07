document.querySelector(".copy-btn").addEventListener("click", function () {
    navigator.clipboard
        .writeText(document.querySelector("#copy").innerText)
        .then(function () {
            console.log("Text copied to clipboard");
        })
        .catch(function (error) {
            console.error("Error:", error);
        });
});
