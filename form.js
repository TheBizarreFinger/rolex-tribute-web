document.getElementById('checkoutBtn').addEventListener('click', function () {
    const firstName = document.getElementById('firstName');
    const secondName = document.getElementById('secondName');
    const postalCode = document.getElementById('postalCode');
    const city = document.getElementById('city');
    const address = document.getElementById('address');

    const inputs = [firstName, secondName, postalCode, city, address];
    let allValid = true;

    inputs.forEach(input => {
        if (input.value.trim().length < 3) {
            input.style.border = "2px solid red";
            allValid = false;
        } else {
            input.style.border = "1px solid black";
        }
    });

    if (!allValid) {
        alert("All fields must contain at least 3 characters.");
    } else {
        window.location.href = "confirmed.html";
    }
});