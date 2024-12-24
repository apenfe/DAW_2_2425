function der() {
    const sel1 = document.getElementById('sel1');
    const sel2 = document.getElementById('sel2');

    const selectedOptions = Array.from(sel1.selectedOptions);

    selectedOptions.forEach(option => {
        sel2.appendChild(option);
    });
}

function izq() {
    const sel1 = document.getElementById('sel1');
    const sel2 = document.getElementById('sel2');

    const selectedOptions = Array.from(sel2.selectedOptions);

    selectedOptions.forEach(option => {
        sel1.appendChild(option);
    });
}
