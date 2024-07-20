function calculateSavings() {
    // Get the input values
    const distance = parseFloat(document.getElementById('distance').value);
    const currentMpg = parseFloat(document.getElementById('currentMpg').value);
    const newMpg = parseFloat(document.getElementById('newMpg').value);

    // Validate the inputs
    if (isNaN(distance) || isNaN(currentMpg) || isNaN(newMpg) || distance <= 0 || currentMpg <= 0 || newMpg <= 0) {
        alert('Please enter valid positive numbers for all fields.');
        return;
    }

    // Calculate fuel consumption and savings
    const currentFuelUsed = distance / currentMpg;
    const newFuelUsed = distance / newMpg;
    const fuelSavings = currentFuelUsed - newFuelUsed;

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Fuel Savings: ${fuelSavings.toFixed(2)} gallons per week`;
    resultElement.classList.add('showResult');
}