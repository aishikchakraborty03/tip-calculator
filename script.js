const btnEl = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");
const billError = document.getElementById("billError");
const tipError = document.getElementById("tipError");

function validateBillInput() {
    const billValue = parseFloat(billInput.value);
    if (isNaN(billValue) || billValue < 0) {
        billError.style.display = "block";
        return false;
    } else {
        billError.style.display = "none";
        return true;
    }
}

function validateTipInput() {
    const tipValue = parseFloat(tipInput.value);
    if (isNaN(tipValue) || tipValue < 0 || tipValue > 100) {
        tipError.style.display = "block";
        return false;
    } else {
        tipError.style.display = "none";
        return true;
    }
}

function validateInputs() {
    return validateBillInput() && validateTipInput();
}

function calculateTotal() {
    if (!validateInputs()) {
        totalSpan.innerText = "0.00";
        return;
    }

    const billValue = parseFloat(billInput.value);
    const tipValue = parseFloat(tipInput.value);
    const totalValue = billValue * (1 + tipValue / 100);
    totalSpan.innerText = totalValue.toFixed(2);
}

// Add event listeners
btnEl.addEventListener("click", calculateTotal);

// Calculate on Enter key press
[billInput, tipInput].forEach(input => {
    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            calculateTotal();
        }
    });
    
    // Clear error message on input
    input.addEventListener("input", validateInputs);
});