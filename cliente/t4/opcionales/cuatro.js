document.addEventListener('DOMContentLoaded', function () {

    let array = ["hola", "tres", "sol", "angela"];
    let result = [];

    array.forEach((item) => {

        let num = item.length;

        result.push(num);

    });

    console.log(result);
});