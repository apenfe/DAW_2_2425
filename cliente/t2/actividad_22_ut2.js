window.addEventListener("DOMContentLoaded", function () {

    let num = 9;

    document.write("<pre>");

    for (let i = 0; i < (num - 1) / 2; i++) {

        document.write(" ".repeat(((num - 1) / 2) - i));
        document.write("*".repeat(1 + (i * 2)));
        document.write(" ".repeat(((num - 1) / 2) - i));

        document.write("<br>");
    }

    document.write("*".repeat(num));
    document.write("<br>");
    8
    for (let i = ((num - 1) / 2) - 1; i >= 0; i--) {

        document.write(" ".repeat(((num - 1) / 2) - i));
        document.write("*".repeat(1 + (i * 2)));
        document.write(" ".repeat(((num - 1) / 2) - i));

        document.write("<br>");
    }

    document.write("</pre>");

});

