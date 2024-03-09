// Function to toggle input fields based on calculation type
function toggleInputs() {
    var selectedType = parseInt(document.getElementById('calculationType').value);
    var priceInput = document.getElementById('priceInput');
    var weightInput = document.getElementById('weightInput');

    if (selectedType === 1) {
        priceInput.style.display = 'block';
        weightInput.style.display = 'none';
    } else if (selectedType === 2) {
        priceInput.style.display = 'none';
        weightInput.style.display = 'block';
    }
}

// Function to calculate the result
function calculate() {
    var actualPrice = parseFloat(document.getElementById('actualPrice').value);
    var calculationType = parseInt(document.getElementById('calculationType').value);
    var resultElement = document.getElementById('result');
    var conversionFactor = 1000;

    if (isNaN(actualPrice)) {
        resultElement.innerHTML = '<p style="color: #e74c3c;">Please enter a valid actual price.</p>';
        return;
    }

    var weightOfItem, desiredPrice, desiredWeight, priceOfItemYouWillGet;

    switch (calculationType) {
        case 1:
            desiredPrice = parseFloat(document.getElementById('desiredPrice').value);

            if (isNaN(desiredPrice)) {
                resultElement.innerHTML = '<p style="color: #e74c3c;">Please enter a valid desired price.</p>';
                return;
            }

            weightOfItem = conversionFactor * (desiredPrice / actualPrice);
            resultElement.innerHTML = '<p style="color: #27ae60;">Weight of the item you will get: ' + weightOfItem.toFixed(2) + 'g</p>';
            break;

        case 2:
            desiredWeight = parseFloat(document.getElementById('desiredWeight').value);

            if (isNaN(desiredWeight)) {
                resultElement.innerHTML = '<p style="color: #e74c3c;">Please enter a valid desired weight.</p>';
                return;
            }

            priceOfItemYouWillGet = (desiredWeight / conversionFactor) * actualPrice;
            resultElement.innerHTML = '<p style="color: #3498db;">Price of the item you will get: Rs ' + priceOfItemYouWillGet.toFixed(2) + '</p>';
            break;

        default:
            resultElement.innerHTML = '<p style="color: #e74c3c;">Invalid choice. Please enter 1 or 2.</p>';
            break;
    }
}

// Toggle input fields based on calculation type when the page loads
document.addEventListener('DOMContentLoaded', function () {
    toggleInputs();
});

// Toggle input fields based on calculation type
document.getElementById('calculationType').addEventListener('change', function () {
    toggleInputs();
});
