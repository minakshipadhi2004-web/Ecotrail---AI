let historyRecords = JSON.parse(localStorage.getItem("history")) || [];

let tableBody = document.getElementById("historyData");

historyRecords.forEach(record => {

    let row = `
    <tr>
        <td>${record.date}</td>
        <td>${record.vehicle}</td>
        <td>${record.food}</td>
        <td>${record.electricity}</td>
        <td>${record.total}</td>
        <td>${record.status}</td>
    </tr>
    `;

    tableBody.innerHTML += row;
});