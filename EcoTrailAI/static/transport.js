document.getElementById("transportForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let engineSize = parseFloat(document.getElementById("engineSize").value);
    let cylinders = parseInt(document.getElementById("cylinders").value);
    let fuelComb = parseFloat(document.getElementById("fuelComb").value);

    fetch("/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            engineSize: engineSize,
            cylinders: cylinders,
            fuelComb: fuelComb
        })
    })
    .then(response => response.json())
    .then(data => {
        let predicted = data.co2;

        document.getElementById("predictedCo2").innerText = predicted + " kg";
        let otherGases = (predicted * 0.3).toFixed(2);
        document.getElementById("otherGases").innerText = otherGases + "g";
        localStorage.setItem("vehicleCO2",predicted);
        let history = JSON.parse(localStorage.getItem("history")) || [];
        let lastRecord= history[history.length - 1];
        if(!lastRecord){
            lastRecord = {
                date: new Date().toLocaleString(),
                vehicle:0,
                food: 0,
                electricity: 0
            };
            history.push(lastRecord);
        } 
        lastRecord.vehicle = predicted;
        lastRecord.total = Number(lastRecord.vehicle)+Number(lastRecord.food)+Number(lastRecord.electricity);
        if (lastRecord.total < 300){
            lastRecord.status = "LOW🟢";
        }
        else if (lastRecord.total < 1000){
            lastRecord.status = "Medium 🟡";
        }
        else{ lastRecord.status = "High 🔴";}
    
        localStorage.setItem("history",JSON.stringify(history));
        
        //OTHER GASESS CALCULATION
        let co = (predicted * 0.02).toFixed(2);
        let nox = (predicted*0.015).toFixed(2);
        let pm = (predicted * 0.005).toFixed(2);
        document.getElementById("coGas").innerText= co + "kg";
        document.getElementById("noxGas").innerText = nox + "kg";
        document.getElementById("pmGas").innerText = pm + "kg";

        let total = predicted;

        let statusCard = document.getElementById("statusCard");
        let statusText = document.getElementById("emissionStatus");
        let tipsList = document.getElementById("tipsList");

        tipsList.innerHTML = "";
        let vehicleType = document.getElementById("vehicleType").value;

        if (total < 300) {
            statusText.innerText = "Low 🟢 Safe";
            statusCard.className = "status-card low";
            tipsList.innerHTML += "<li>Great job! Emissions are low.</li>";
            if(vehicleType == "Car"){
                tipsList.innerHTML += "<li>Use CarPooling to reduse emission.</li>";
            }
            else if(vehicleType == "Bus"){
                tipsList.innerHTML += "<li>Public Transport helps save fuel.</li>";
            }
            else if (vehicleType == "Motorcycle"){
                tipsList.innerHTML += "<li>Maintain tire pressure regularly.</li>";
            }
            else if(vehicleType == "Truck"){
                tipsList.innerHTML += "<li>Avoid overloading heavy Vehicles.</li>";
            }
            else if (vehicleType == "Auto/Rikshaw"){
                tipsList.innerHTML += "<li>Switch To CNG For Cleaner Transport.</li>";
            }
        } 
        else if (total < 1000) {
            statusText.innerText = "Medium 🟡 Warning";
            statusCard.className = "status-card medium";
            tipsList.innerHTML += "<li>Moderate emissions.</li>";
            if(vehicleType == "Car"){
                tipsList.innerHTML += "<li>Try carpooling and regular servicing.</li>";
            }
            else if(vehicleType == "Bus"){
                tipsList.innerHTML += "<li>Use cleaner fuel for buses.</li>";
            }
            else if(vehicleType == "Motorcycle"){
                tipsList.innerHTML += "<li>Avoid overspeeding to reduce emissions.</li>";
            }
            else if(vehicleType == "Truck"){
                tipsList.innerHTML += "<li>Reduce heavy load and maintain engine.</li>";
            }
            else if(vehicleType == "Auto/Rikshaw"){
                tipsList.innerHTML += "<li>Switch to CNG For better efficiency.</li>";
            }

        } 
        else {
            statusText.innerText = "High 🔴 Danger";
            statusCard.className = "status-card high";
            tipsList.innerHTML += "<li>High emissions! Reduce usage.</li>";
            if(vehicleType == "Car"){
                tipsList.innerHTML += "<li>Use electic or hybrid cars if possible.</li>";
            }
            else if(vehicleType == "Bus"){
                tipsList.innerHTML += "<li>Upgrade old buses to eco-friendly models.</li>";
            }
            else if(vehicleType == "Motorcycle"){
                tipsList.innerHTML += "<li>Regular Servicing can reduce smoke emissions.</li>";
            }
            else if(vehicleType == "Truck"){
                tipsList.innerHTML += "<li>Avoid overloaded transport and long idle time.</li>";
            }
            else if(vehicleType == "Auto/Rikshaw"){
                tipsList.innerHTML += "<li>Shift to CNG or electic auto for cleaner transport.</li>";
            }
        }
    })
    .catch(error => console.error("Error:", error));
});
