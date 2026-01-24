function convertir() {
    let f = document.getElementById("tbf").value;
    let c = document.getElementById("tbc").value;

    // If Fahrenheit is filled, convert to Celsius
    if (f !== "" && c === "") {
        let fahrenheit = parseFloat(f);
        let resultC = toCelsius(fahrenheit);
        document.getElementById("tbc").value = resultC.toFixed(2);
    }
    // If Celsius is filled, convert to Fahrenheit
    else if (c !== "" && f === "") {
        let celsius = parseFloat(c);
        let resultF = toFahrenheit(celsius);
        document.getElementById("tbf").value = resultF.toFixed(2);
    }
    // If both or neither are filled
    else {
        alert("Please fill in only one field (Celsius or Fahrenheit).");
    }
}

function toCelsius(f) {
    return (5 / 9) * (f - 32);
}

function toFahrenheit(c) {
    return (9 / 5) * c + 32;
}
