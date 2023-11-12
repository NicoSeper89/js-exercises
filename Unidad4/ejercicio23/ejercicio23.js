/* 23. Se le solicita al usuario que ingrese los extremos de un rango numérico y una
cantidad de valores desconocidos.
Realice un programa para informar si cada número está dentro del rango.
Si está en rango, informar si el número es par.
Si no está dentro del rango, informar si es número es impar.
Tenga en cuenta que el rango debe tener una diferencia mínima de 5 números
enteros.
*/

const form = document.getElementById("form");
const rangeMessage = document.getElementById("rangeMessage");
const successResponse = document.getElementById("successResponseMessage");
const warningResponse = document.getElementById("warningResponseMessage");
const errorResponse = document.getElementById("dangerResponseMessage");
let numbers = [];

function addNumber(e) {
  const newNumber = document.getElementById("numberInput");
  const regex = /^[-+]?\d*\.?\d+$/;

  if (regex.test(newNumber.value)) {
    numbers.push(parseFloat(newNumber.value));

    rangeMessage.innerHTML = numbers.reduce(
      (accumulator, currentValue) => accumulator + " #" + currentValue,
      ""
    );
    rangeMessage.className = "alert alert-primary mt-3";

    newNumber.value = "";
  }
}

document.getElementById("addButton").addEventListener("click", addNumber);

document
  .getElementById("numberInput")
  .addEventListener("keydown", function (event) {
    event.key === "Enter" ? addNumber(event) : null;
  });

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const min = parseInt(document.getElementById("minInput").value);
  const max = parseInt(document.getElementById("maxInput").value);

  if (numbers.length <= 0) {
    rangeMessage.innerHTML =
      "<span>Todavia no ingreso ningun número para analizar en el rango</span>";
    rangeMessage.className = "alert alert-danger mt-3";

    successResponse.className = "alert alert-success d-none";
    successResponse.innerHTML = "";
    warningResponse.className = "alert alert-warning d-none";
    warningResponse.innerHTML = "";
  } else {
    if (min > max) {
      errorResponse.className = "alert alert-danger";
      errorResponse.innerHTML =
        "<span>Error de rango: límite mínimo debe ser menor a límite máximo</span>";
      successResponse.className = "alert alert-success d-none";
      successResponse.innerHTML = "";
      warningResponse.className = "alert alert-warning d-none";
      warningResponse.innerHTML = "";
    } else if (max - min < 5) {
      errorResponse.className = "alert alert-danger";
      errorResponse.innerHTML =
        "<span>Error de rango: longitud entre los límites debe ser de 5 o más</span>";
      successResponse.className = "alert alert-success d-none";
      successResponse.innerHTML = "";
      warningResponse.className = "alert alert-warning d-none";
      warningResponse.innerHTML = "";
    } else {
      errorResponse.className = "alert alert-danger d-none";
      errorResponse.innerHTML = "";

      const inRange = [];
      const outOfRange = [];

      numbers.forEach((num) => {
        num >= min && num <= max ? inRange.push(num) : outOfRange.push(num);
      });

      if (inRange.length != 0) {
        successResponse.className = "alert alert-success";
        successResponse.innerHTML =
          "<span>Dentro de rango: " +
          inRange.reduce(
            (accumulator, currentValue) =>
              accumulator + "#" + currentValue + " ",
            ""
          ) +
          "</span>";
      } else {
        successResponse.className = "alert alert-success d-none";
        successResponse.innerHTML = "";
      }

      if (outOfRange.length != 0) {
        warningResponse.className = "alert alert-warning";
        warningResponse.innerHTML =
          "<span>Fuera de rango: " +
          outOfRange.reduce(
            (accumulator, currentValue) =>
              accumulator + "#" + currentValue + " ",
            ""
          ) +
          "</span>";
      } else {
        warningResponse.className = "alert alert-warning d-none";
        warningResponse.innerHTML = "";
      }
    }
  }
});

form.addEventListener("reset", function (e) {
  rangeMessage.innerHTML = "<span> Esperando dato. </span>";
  rangeMessage.className = "alert alert-secondary mt-3";
  successResponse.className = "alert alert-success d-none";
  successResponse.innerHTML = "";
  warningResponse.className = "alert alert-warning d-none";
  warningResponse.innerHTML = "";
  errorResponse.className = "alert alert-danger d-none";
  errorResponse.innerHTML = "";
  document.getElementById("numberInput").value = "";
  numbers = [];
});

rangeMessage;
