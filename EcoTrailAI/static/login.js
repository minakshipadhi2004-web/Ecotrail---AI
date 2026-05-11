const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
})

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})
function nextScreen(num) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(`screen${num}`).classList.add('active');
}
function nextScreen(num) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(`screen${num}`).classList.add('active');
}
function loginUser(event) {
  event.preventDefault(); 
//   localStorage.setItem("vehicleCO2",0);
//   localStorage.setItem("foodCO2",0);
//   localStorage.setItem("electricityCO2",0)
localStorage.clear();


  
  const username = document.querySelector("#username").value;

  localStorage.setItem("username", username);
//   localStorage.setItem("vehicleCO2",0);
//   localStorage.setItem("foodCO2",0);
//   localStorage.setItem("electricityCO2",0);

  
  window.location.href = "/dashboard";
}