document.getElementById("electricityForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let units = parseFloat(document.getElementById("units").value);

  // India average emission factor (approx)0.82
  // let appliance = document.getElementById("applianceType").value;
  // let emissionFactor;
  // if(appliance == "AC"){
  //   emissionFactor = 1.2;
  // }
  // else if(appliance == "Fan"){
  //   emissionFactor = 0.3;
  // }
  // else if (appliance == "Fridge"){
  //   emissionFactor = 0.8;
  // }
  // else if (appliance == "TV"){
  //   emissionFactor = 0.5;
  // }
  let emissionFactor = 0.82;
  let totalCo2 = units * emissionFactor;
  totalCo2 = Math.round(totalCo2);

  document.getElementById("electricityResult").innerText = totalCo2 + " kg";
  localStorage.setItem("electricityCO2",totalCo2);
  let history = JSON.parse(localStorage.getItem("history"))  || [];
  let lastRecord = history[history.length - 1];
  if (!lastRecord){
    lastRecord = {
      date : new Date().toLocaleString(),
      vehicle:0,
      food: 0,
      electricity: 0
    };
    history.push(lastRecord);
  }
  lastRecord.electricity = totalCo2;
  lastRecord.total = Number(lastRecord.vehicle)+Number(lastRecord.food)+Number(lastRecord.electricity);
  if (lastRecord.total < 50){
    lastRecord.status = "Low 🟢";
  }
  else if (lastRecord.total < 150){
    lastRecord.status = "Medium 🟡";
  }
  else{
    lastRecord.status = "High 🔴"
  }
  localStorage.setItem(
    "history",JSON.stringify(history)
  );
  // Status + Tips
  let statusCard = document.getElementById("energyStatusCard");
  let statusText = document.getElementById("energyStatus");
  let tipsBox = document.getElementById("energyTips");

  tipsBox.innerHTML = "";

  if (totalCo2 < 50) {
    statusText.innerText = "Low 🟢 Safe";
    statusCard.className = "status-card low";

    tipsBox.innerHTML += "<li>Great! Your electricity usage is low.</li>";
    tipsBox.innerHTML += "<li>Continue using LED lights.</li>";
    tipsBox.innerHTML += "<li>Switch off unused appliances.</li>";
  }
  else if (totalCo2 >= 50 && totalCo2 < 150) {
    statusText.innerText = "Medium 🟡 Warning";
    statusCard.className = "status-card medium";

    tipsBox.innerHTML += "<li>Try reducing AC usage.</li>";
    tipsBox.innerHTML += "<li>Use energy efficient appliances.</li>";
    tipsBox.innerHTML += "<li>Turn off lights when not needed.</li>";
  }
  else {
    statusText.innerText = "High 🔴 Danger";
    statusCard.className = "status-card high";

    tipsBox.innerHTML += "<li>Your electricity emission is very high!</li>";
    tipsBox.innerHTML += "<li>Reduce AC usage and use fan more.</li>";
    tipsBox.innerHTML += "<li>Use solar energy if possible.</li>";
    tipsBox.innerHTML += "<li>Unplug chargers when not in use.</li>";
  }
});
