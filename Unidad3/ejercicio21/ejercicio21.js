/* 21. Realizar un sistema para el cálculo de sueldo de una empresa. Se le solicita al
usuario que ingrese la categoría a la que pertenece que define el sueldo básico
mensual (categoría 1: u$s 2000, categoría 2: u$s 3000, categoría 3: u$s 4000) y las
horas extras. Se sabe que:
a. Si es de la categoría 1 y trabajó más de 20 horas extra, suma un bono de u$s 500
más.
b. Si es de la categoría 3 y trabajó más de 30 horas extra, suma un bono de u$s 1000
más.
Realice un programa para calcular e informar el sueldo mensual del empleado,
indicando si su sueldo supera o no los u$s 4000.

*/

const form = document.getElementById("form");
const messege = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const category = document.getElementById("categorySelectInput").value;
  const hours = parseInt(document.getElementById("hoursInput").value);
  const hourlySalary = parseFloat(
    document.getElementById("hourlySalaryInput").value
  );

  let salary = 0;

  if (category === "1") {
    salary = 2000 + hourlySalary * hours + (hours >= 20 ? 500 : 0);
  } else if (category === "3") {
    salary = 4000 + hourlySalary * hours + (hours >= 30 ? 1000 : 0);
  } else {
    salary = 3000 + hourlySalary * hours;
  }

  messege.innerHTML =
    "<span>Salario mensual: " +
    salary +
    "<br />El salario supera los 4000: " +
    (salary > 4000 ? "Verdadero" : "Falso") +
    "</span>";
  message.className = "alert alert-success mt-3";
});

form.addEventListener("reset", function (e) {
  message.innerHTML = "<span> Esperando dato. </span>";
  message.className = "alert alert-secondary mt-3";
});
