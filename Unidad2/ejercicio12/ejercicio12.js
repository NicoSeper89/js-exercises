/* 2. Realizar un sistema para el cálculo de sueldos de una empresa. Se le solicita que
ingrese el valor de la hora y la cantidad de horas trabajadas en el mes. Realice un
programa para calcular e informar el sueldo mensual del empleado.*/

const form = document.getElementById("form");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const valueByHour = document.getElementById("hourValueInput");
  const hours = document.getElementById("hoursNumberInput");

  message.innerHTML = "El sueldo a pagar es: $" + valueByHour.value * hours.value;
  message.className = "alert alert-success mt-3";

  valueByHour.value = "";
  hours.value = "";
});

form.addEventListener("reset", function (e) {
  message.innerHTML = "<span> Esperando datos. </span>";
  message.className = "alert alert-secondary mt-3";
});
