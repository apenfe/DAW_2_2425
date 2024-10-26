window.addEventListener("DOMContentLoaded", function () {

    for (let i = 1; i <= 10; i++) {

        let h2 = document.createElement("h2");
        h2.innerHTML = "Tabla del " + i;
        document.body.appendChild(h2);

        for (let j = 0; j <= 10; j++) {
            let h5 = document.createElement("h5");
            h5.innerHTML = i + " x " + j + " = " + (i * j);
            document.body.appendChild(h5);
        }

    }

});

