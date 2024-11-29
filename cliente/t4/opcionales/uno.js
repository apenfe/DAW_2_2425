document.addEventListener('DOMContentLoaded', function () {

    let btn = document.getElementById('boton');

    btn.addEventListener("click", () => {

        let array = [];

        for (let i = 0; i < 10; i++) {
            let num = Math.random();

            array.push(num);
        }

        console.log(array);

    });

});