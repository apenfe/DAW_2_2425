window.addEventListener("DOMContentLoaded", () => {

    let btn = document.getElementById("boton");
    let radio = document.getElementById("radio");

    let area = document.getElementById("area");
    let longitud = document.getElementById("longitud");
    let volumen = document.getElementById("volumen");

    btn.addEventListener("click", () => {
        let r = parseFloat(radio.value);
        let a = Math.PI * r * r;
        let l = 2 * Math.PI * r;
        let v = (4 / 3) * Math.PI * r * r * r;

        area.textContent += a.toFixed(2);
        longitud.textContent += l.toFixed(2);
        volumen.textContent += v.toFixed(2);
    });

});
