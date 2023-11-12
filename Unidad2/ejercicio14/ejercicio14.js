/* 14. Realizar un sistema para el cálculo de sueldo de una empresa de seguros. Se le
solicita que ingrese el valor de la hora, la cantidad de horas trabajadas en el mes, los
años de antigüedad, la cantidad de seguros vendidos y el valor del seguro más caro
vendido. Realice un programa para calcular e informar el sueldo mensual del
empleado, teniendo en cuenta que se le asigna un bono igual al 50% del seguro más
caro vendido, un bono igual al 25% del sueldo por la cantidad de seguros vendidos y
otro bono igual al 15% del sueldo por año de antigüedad. Una vez obtenido el sueldo
final, calcular e informar el valor promedio de la hora del empleado.
*/

const form = document.getElementById("form");
const messege = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const valueByHour = document.getElementById("hourValueInput");
  const hours = document.getElementById("hoursNumberInput");
  const experience = document.getElementById("experienceInput");
  const insuranceAmount = document.getElementById("insuranceSoldInput");
  const mostExpensiveValue = document.getElementById("maximumInsuranceInput");

  const baseSalary = valueByHour.value * hours.value;
  const seniorityBonus = (baseSalary * experience.value * 15) / 100;
  const salesBonus = (insuranceAmount.value * baseSalary * 25) / 100;
  const maximumSaleBonus = mostExpensiveValue.value / 2;
  const totalSalary = baseSalary + seniorityBonus + salesBonus + maximumSaleBonus;

  messege.innerHTML =
    "<span>Sueldo base: $" +
    baseSalary +
    "<br/>Bono por antigüedad: $" +
    seniorityBonus +
    "<br/>Bono por cantidad de ventas: $" +
    salesBonus +
    "<br/>Bono de venta más cara: $" +
    maximumSaleBonus +
    "<br/>Sueldo total: $" +
    totalSalary +
    "<br/>Sueldo por hora con bonos incluidos: $" +
    (totalSalary / hours.value).toFixed(2) +
    "</span>";
  messege.className = "alert alert-success mt-3";

  valueByHour.value = "";
  hours.value = "";
  experience.value = "";
  insuranceAmount.value = "";
  mostExpensiveValue.value = "";
});

form.addEventListener("reset", function (e) {
  message.innerHTML = "<span> Esperando datos. </span>";
  message.className = "alert alert-secondary mt-3";
});
