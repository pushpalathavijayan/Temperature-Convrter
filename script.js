function convertTemp() {
    const temp = parseFloat(document.getElementById('tempInput').value);
    const fromUnit = document.getElementById('fromunit').value;
    const toUnit = document.getElementById('toUnit').value;
    let result;

    if (isNaN(temp)) {
        alert("Please enter a valid number!");
        return;
    }

    let tempInCelsius;
    if (fromUnit === "celsius") {
        tempInCelsius = temp;
    } else if (fromUnit === "fahrenheit") {
        tempInCelsius = (temp - 32) * 5 / 9;
    } else if (fromUnit === "kelvin") {
        tempInCelsius = temp - 273.15;
    }

    if (toUnit === "celsius") {
        result = tempInCelsius;
    } else if (toUnit === "fahrenheit") {
        result = (tempInCelsius * 9 / 5) + 32;
    } else if (toUnit === "kelvin") {
        result = tempInCelsius + 273.15;
    }

    document.getElementById('result').textContent = result.toFixed(2) + " " + getUnitSymbol(toUnit);
}

function getUnitSymbol(unit) {
    switch (unit) {
        case "celsius": return "°C";
        case "fahrenheit": return "°F";
        case "kelvin": return "K";
    }
}
