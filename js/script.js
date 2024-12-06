// Electricity Bill Calculation
billForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const units = parseFloat(document.getElementById('units').value);

    if (isNaN(units) || units < 0) {
        billResult.textContent = 'Invalid units.';
        return;
    }

    let bill = 0;

    if (units <= 100) bill = units * 1.5;
    else if (units <= 300) bill = 100 * 1.5 + (units - 100) * 3.0;
    else bill = 100 * 1.5 + 200 * 3.0 + (units - 300) * 5.0;

    billResult.textContent = Your total bill is ₹${bill.toFixed(2)};

    if (bill > 10000) {
        billSection.classList.add('hidden');
        sliderSection.classList.remove('hidden');
    }
});