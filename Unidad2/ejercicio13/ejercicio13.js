/* 13. Realizar un sistema para el cálculo de sueldos de una empresa. Se le solicita que
ingrese el valor de la hora, la cantidad de horas trabajadas en el mes y los años de
antigüedad en la empresa. Realice un programa para calcular e informar el sueldo
mensual del empleado, teniendo en cuenta que se le asigna un bono mensual igual al
15% del sueldo por año de antigüedad.
*/

const form = document.getElementById("form");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const valueByHour = document.getElementById("hourValueInput");
  const hours = document.getElementById("hoursNumberInput");
  const experience = document.getElementById("experienceInput");

  const baseSalary = valueByHour.value * hours.value;
  const seniorityBonus = (baseSalary * experience.value * 15) / 100;
  const totalSalary = baseSalary + seniorityBonus;

  message.innerHTML =
    "<span>Sueldo base: $" +
    baseSalary +
    "<br/>Bono por antigüedad: $" +
    seniorityBonus +
    "<br/>Sueldo total: $" +
    totalSalary +
    "</span>";
  message.className = "alert alert-success mt-3";

  valueByHour.value = "";
  hours.value = "";
  experience.value = "";
});

form.addEventListener("reset", function (e) {
  message.innerHTML = "<span> Esperando datos. </span>";
  message.className = "alert alert-secondary mt-3";
});
