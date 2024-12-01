document.addEventListener("DOMContentLoaded", () => {

    document.getElementById('countryForm').addEventListener('submit', function (event) {
        var country = document.getElementById('country').value;
        var error = document.getElementById('error');
        if (country === "") {
            error.style.display = 'block';
            event.preventDefault();
        } else {
            error.style.display = 'none';
        }
    });

});


