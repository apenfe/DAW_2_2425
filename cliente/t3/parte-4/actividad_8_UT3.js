window.addEventListener("DOMContentLoaded", () => {

    let imagen1 = document.getElementById("primera");
    let imagen2 = document.getElementById("segunda");

    let url1 = document.getElementById("url1");
    let url2 = document.getElementById("url2");

    url1.innerHTML = imagen1.src;
    url2.innerHTML = imagen2.src;

});
