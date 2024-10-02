window.addEventListener("DOMContentLoaded", function () {

    var i = 25;

    switch (i) {
        case 25:
            // se ejecuta este y el siguiente ya que este case no tiene break
            alert("estoy en el case 25");
        case 35:
            alert("25 or 35");
            break;
        case 45:
            alert("45");
            break;
        default:
            alert("por defecto");
    }

    var num = 25;
    // aqui se ejecuta el case default
    switch (true) {
        case num < 0:
            alert("Menor que 0.");
            break;
        case num >= 0 && num <= 10:
            alert("Entre 0 y 10.");
            break;
        case num > 10 && num <= 20:
            alert("Entre 10 y 20.");
            break;
        default:
            alert("Mayor que 20.");
    }

});

