var input = document.getElementById("text");
input.addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        document.getElementById("submit").click();
    }
})