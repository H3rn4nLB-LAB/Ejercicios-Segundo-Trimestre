document.getElementById("generateBtn").addEventListener("click", generateTimesTable);

function generateTimesTable() {
    const num = document.getElementById("numberInput").value;
    const container = document.getElementById("tableContainer");
    container.innerHTML = ""; // Clear previous table

    if (num === "" || isNaN(num)) {
        alert("Please enter a valid number!");
        return;
    }

    const table = document.createElement("table");

    // Table header
    const header = document.createElement("tr");
    const th1 = document.createElement("th");
    th1.textContent = "Multiplier";
    const th2 = document.createElement("th");
    th2.textContent = `${num} ×`;
    const th3 = document.createElement("th");
    th3.textContent = "Result";
    header.appendChild(th1);
    header.appendChild(th2);
    header.appendChild(th3);
    table.appendChild(header);

    // Table rows (1 to 10)
    for (let i = 1; i <= 10; i++) {
        const row = document.createElement("tr");

        const cell1 = document.createElement("td");
        cell1.textContent = i;

        const cell2 = document.createElement("td");
        cell2.textContent = num;

        const cell3 = document.createElement("td");
        cell3.textContent = i * num;

        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);

        table.appendChild(row);
    }

    container.appendChild(table);
}
