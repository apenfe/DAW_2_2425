document.addEventListener('DOMContentLoaded', function () {

    let array = [2, 1, 2, 4, 5, 6, 1];
    let result = [];

    array.forEach((item) => {

        if (!result.includes(item)) {
            result.push(item);
        }

    });

    console.log(result);
});