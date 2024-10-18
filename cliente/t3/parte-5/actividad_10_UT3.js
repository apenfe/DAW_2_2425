window.addEventListener("DOMContentLoaded", () => {

    /*
    Crea una página web con dos botones, de manera que uno de ellos sirva para
    ir hacia delante del historial y el otro para ir hacia atrás.
    */

    let btnBack = document.getElementById("adelante");
    let btnForward = document.getElementById("atras");

    btnBack.addEventListener("click", () => {
        window.history.forward();
    });

    btnForward.addEventListener("click", () => {
        window.history.back();
    });

});
