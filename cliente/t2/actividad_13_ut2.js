window.addEventListener("DOMContentLoaded", function () {

    for (let i = 0; i <= 10; i++) {
        let h2 = document.createElement("h2");
        h2.innerHTML = "8 x " + i + " = " + (8 * i);
        document.body.appendChild(h2);
    }

});

