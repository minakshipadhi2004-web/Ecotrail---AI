// document.getElementById("foodForm").addEventListener("submit", function(event) {
//   event.preventDefault();

//   let foodType = document.getElementById("foodType").value;
//   let quantity = parseInt(document.getElementById("foodQuantity").value);

//   // let co2PerMeal = 0;

//   // Approx CO2 values (demo project purpose)
//   // if (foodType === "veg") {
//   //   co2PerMeal = 2;
//   // }
//   // else if (foodType === "nonveg") {
//   //   co2PerMeal = 6;
//   // }
//   // else if (foodType === "dairy") {
//   //   co2PerMeal = 4;
//   // }
//   // else if (foodType === "fastfood") {
//   //   co2PerMeal = 5;
//   // }
//   let co2PerMeal = parseInt(foodType);

//   let totalCo2 = co2PerMeal * quantity;

//   document.getElementById("foodCo2").innerText = totalCo2 + " kg";
//   let history = JSON.parse(localStorage.getItem("history")) || [];
//   let lastRecord = history[history.length - 1];
//   if(!lastRecord){
//     lastRecord = {
//       date: new Date().toLocaleString(),
//       vehicle: 0,
//       food: 0,
//       electricity: 0
//     };
//     history.push(lastRecord);
//   }
//   lastRecord.food = totalFoodCo2;
//   lastRecord.total = Number(lastRecord.vehicle)+Number(lastRecord.food)+Number(lastRecord.electricity);
//   if(lastRecord.total < 50){
//     lastRecord.status = "LOW 🟢";
//   }
//   else if (lastRecord.total < 150){
//     lastRecord.status = "Medium 🟡";
//   }
//   else {
//     lastRecord.status = "High 🔴"
//   }
//   });
//   localStorage.setItem("history",JSON.stringify(history));

  
//   let statusCard = document.getElementById("foodStatusCard");
//   let statusText = document.getElementById("foodStatus");
//   let tipsBox = document.getElementById("foodTips");

//   tipsBox.innerHTML = "";

//   if (totalCo2 < 10) {
//     statusText.innerText = "Low 🟢 Healthy";
//     statusCard.className = "status-card low";

//     tipsBox.innerHTML += "<li>Great diet choice!</li>";
//     tipsBox.innerHTML += "<li>Eat more seasonal vegetables.</li>";
//     tipsBox.innerHTML += "<li>Reduce packaged food.</li>";
//   }
//   else if (totalCo2 >= 10 && totalCo2 < 25) {
//     statusText.innerText = "Medium 🟡 Moderate";
//     statusCard.className = "status-card medium";

//     tipsBox.innerHTML += "<li>Try reducing dairy & fast food.</li>";
//     tipsBox.innerHTML += "<li>Eat more plant-based meals.</li>";
//     tipsBox.innerHTML += "<li>Avoid food wastage.</li>";
//   }
//   else {
//     statusText.innerText = "High 🔴 Unhealthy";
//     statusCard.className = "status-card high";

//     tipsBox.innerHTML += "<li>Your food emission is high!</li>";
//     tipsBox.innerHTML += "<li>Reduce red meat consumption.</li>";
//     tipsBox.innerHTML += "<li>Try vegetarian meals 3-4 times/week.</li>";
//     tipsBox.innerHTML += "<li>Avoid fast food.</li>";
// //   }
// document.getElementById("foodForm").addEventListener("submit", function(event) {
//     event.preventDefault();

//     let foodType = document.getElementById("foodType").value;
//     let quantity = parseInt(document.getElementById("foodQuantity").value);

//     let co2PerMeal = parseInt(foodType);

//     let totalCo2 = co2PerMeal * quantity;

//     document.getElementById("foodco2").innerText = totalCo2 + " kg";

//     // HISTORY
//     let history = JSON.parse(localStorage.getItem("history")) || [];

//     let lastRecord = history[history.length - 1];

//     if (!lastRecord) {
//         lastRecord = {
//             date: new Date().toLocaleString(),
//             vehicle: 0,
//             food: 0,
//             electricity: 0
//         };

//         history.push(lastRecord);
//     }

//     lastRecord.food = totalCo2;

//     lastRecord.total =
//         Number(lastRecord.vehicle) +
//         Number(lastRecord.food) +
//         Number(lastRecord.electricity);

//     if (lastRecord.total < 50) {
//         lastRecord.status = "Low 🟢";
//     }
//     else if (lastRecord.total < 150) {
//         lastRecord.status = "Medium 🟡";
//     }
//     else {
//         lastRecord.status = "High 🔴";
//     }

//     localStorage.setItem("history", JSON.stringify(history));

//     // STATUS + TIPS
//     let statusCard = document.getElementById("foodStatusCard");
//     let statusText = document.getElementById("foodStatus");
//     let tipsBox = document.getElementById("foodTips");

//     tipsBox.innerHTML = "";

//     if (totalCo2 < 10) {

//         statusText.innerText = "Low 🟢 Healthy";
//         statusCard.className = "status-card low";

//         tipsBox.innerHTML += "<li>Great diet choice</li>";
//         tipsBox.innerHTML += "<li>Eat more seasonal vegetables.</li>";
//         tipsBox.innerHTML += "<li>Reduce packaged food.</li>";

//     }
//     else if (totalCo2 >= 10 && totalCo2 < 25) {

//         statusText.innerText = "Medium 🟡 Moderate";
//         statusCard.className = "status-card medium";

//         tipsBox.innerHTML += "<li>Try reducing dairy & fast food.</li>";
//         tipsBox.innerHTML += "<li>Eat more plant-based meals.</li>";
//         tipsBox.innerHTML += "<li>Avoid food wastage.</li>";

//     }
//     else {

//         statusText.innerText = "High 🔴 Unhealthy";
//         statusCard.className = "status-card high";

//         tipsBox.innerHTML += "<li>Your food emission is high!</li>";
//         tipsBox.innerHTML += "<li>Reduce red meat consumption.</li>";
//         tipsBox.innerHTML += "<li>Try vegetarian meals 3-4 times/week.</li>";
//         tipsBox.innerHTML += "<li>Avoid fast food.</li>";
//     }

// });
document.getElementById("foodForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let foodType = document.getElementById("foodType").value;
    let quantity = parseInt(document.getElementById("foodQuantity").value);

    let co2PerMeal = 0;

    // CO2 VALUES
    if (foodType == "veg") {
        co2PerMeal = 2;
    }
    else if (foodType == "nonveg") {
        co2PerMeal = 6;
    }
    else if (foodType == "dairy") {
        co2PerMeal = 4;
    }
    else if (foodType == "fastFood") {
        co2PerMeal = 5;
    }

    let totalCo2 = co2PerMeal * quantity;

    // RESULT
    document.getElementById("foodCo2").innerText = totalCo2 + " kg";

    // HISTORY
    let history = JSON.parse(localStorage.getItem("history")) || [];

    let lastRecord = history[history.length - 1];

    if (!lastRecord) {
        lastRecord = {
            date: new Date().toLocaleString(),
            vehicle: 0,
            food: 0,
            electricity: 0
        };

        history.push(lastRecord);
    }

    lastRecord.food = totalCo2;

    lastRecord.total =
        Number(lastRecord.vehicle) +
        Number(lastRecord.food) +
        Number(lastRecord.electricity);

    if (lastRecord.total < 50) {
        lastRecord.status = "Low 🟢";
    }
    else if (lastRecord.total < 150) {
        lastRecord.status = "Medium 🟡";
    }
    else {
        lastRecord.status = "High 🔴";
    }

    localStorage.setItem("history", JSON.stringify(history));

    // STATUS + TIPS
    let statusCard = document.getElementById("foodStatusCard");
    let statusText = document.getElementById("foodStatus");
    let tipsBox = document.getElementById("foodTips");

    tipsBox.innerHTML = "";

    if (totalCo2 < 10) {

        statusText.innerText = "Low 🟢 Healthy";
        statusCard.className = "status-card low";

        tipsBox.innerHTML += "<li>Great diet choice</li>";
        tipsBox.innerHTML += "<li>Eat more seasonal vegetables.</li>";
        tipsBox.innerHTML += "<li>Reduce packaged food.</li>";

    }
    else if (totalCo2 >= 10 && totalCo2 < 25) {

        statusText.innerText = "Medium 🟡 Moderate";
        statusCard.className = "status-card medium";

        tipsBox.innerHTML += "<li>Try reducing dairy & fast food.</li>";
        tipsBox.innerHTML += "<li>Eat more plant-based meals.</li>";
        tipsBox.innerHTML += "<li>Avoid food wastage.</li>";

    }
    else {

        statusText.innerText = "High 🔴 Unhealthy";
        statusCard.className = "status-card high";

        tipsBox.innerHTML += "<li>Your food emission is high!</li>";
        tipsBox.innerHTML += "<li>Reduce red meat consumption.</li>";
        tipsBox.innerHTML += "<li>Try vegetarian meals 3-4 times/week.</li>";
        tipsBox.innerHTML += "<li>Avoid fast food.</li>";
    }

});