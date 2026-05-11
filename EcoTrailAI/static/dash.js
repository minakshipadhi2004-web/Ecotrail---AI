
// alert("Welcome to EcoTrail AI 🍃!");
// if(!localStorage.getItem("vehicleCO2")){
//   localStorage.setItem("vehicleCO2","0");
// }
// let vehicle = parseFloat(localStorage.getItem("vehicleCO2"))  || 0;
// let food = 0;
// let electricity = 0;

// let total = vehicle + food + electricity;


// document.getElementById("vehicleCo2").innerText = vehicle + " kg";
// document.getElementById("foodCo2").innerText = food + " kg";
// document.getElementById("electricityCo2").innerText = electricity + " kg";
// document.getElementById("totalCo2").innerText = total + " kg";
// const pieCtx = document.getElementById("pieChart").getContext("2d");
// new Chart(pieCtx, {
//   type: "pie",
//   data: {
//     labels: ["Vehicle", "Food", "Electricity"],
//     datasets: [
//       {
//         data: [vehicle, food, electricity],
//         backgroundColor: ["#1b7a2b", "#ff9800", "#2196f3"],
//         borderWidth: 1
//       }
//     ]
//   },
//   options: {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "bottom"
//       }
//     }
//   }
// });


// const barCtx = document.getElementById("barChart").getContext("2d");

// new Chart(barCtx, {
//   type: "bar",
//   data: {
//     labels: ["Vehicle", "Food", "Electricity"],
//     datasets: [
//       {
//         label: "CO₂ (kg)",
//         data: [vehicle, food, electricity],
//         backgroundColor: ["#1b7a2b", "#ff9800", "#2196f3"],
//         borderRadius: 8
//       }
//     ]
//   },
//   options: {
//     responsive: true,
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     },
//     plugins: {
//       legend: {
//         display: false
//       }
//     }
//   }
// });
if (!localStorage.getItem("history")) {
    localStorage.setItem("history", JSON.stringify([]));
}
let historyData = JSON.parse(localStorage.getItem("history")) || [];

let vehicleTotal = 0;
let foodTotal = 0;
let electricityTotal = 0;

historyData.forEach(item => {
    vehicleTotal += Number(item.vehicle || 0);
    foodTotal += Number(item.food || 0);
    electricityTotal += Number(item.electricity || 0);
});

let total = vehicleTotal + foodTotal + electricityTotal;

// Cards
document.getElementById("totalCo2").innerText = total + " kg";
document.getElementById("vehicleCo2").innerText = vehicleTotal + " kg";
document.getElementById("foodCo2").innerText = foodTotal + " kg";
document.getElementById("electricityCo2").innerText = electricityTotal + " kg";


// PIE CHART
new Chart(document.getElementById("pieChart"), {
    type: "pie",
    data: {
        labels: ["Vehicle", "Food", "Electricity"],
        datasets: [{
            data: [vehicleTotal, foodTotal, electricityTotal],
            backgroundColor: [
                "#4CAF50",
                "#FFC107",
                "#2196F3"
            ]
        }]
    }
});


// BAR CHART
new Chart(document.getElementById("barChart"), {
    type: "bar",
    data: {
        labels: ["Vehicle", "Food", "Electricity"],
        datasets: [{
            label: "CO2 Emission",
            data: [vehicleTotal, foodTotal, electricityTotal],
            backgroundColor: [
                "#4CAF50",
                "#FFC107",
                "#2196F3"
            ]
        }]
    }
});