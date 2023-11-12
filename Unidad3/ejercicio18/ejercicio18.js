/* 18. Se le solicita al usuario que ingrese los extremos de un rango numérico y un
número. Realice un programa para informar si el número está dentro del rango.
Si está en rango, informar si el número es par.
Si no está dentro del rango, informar si es número es impar.
Tenga en cuenta que el rango debe tener una diferencia mínima de 5 números
enteros.
*/

const form = document.getElementById("form");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const min = parseInt(document.getElementById("minInput").value);
  const max = parseInt(document.getElementById("maxInput").value);
  const number = parseInt(document.getElementById("numberInput").value);

  let response = "";
  let colorBackground = "";

  if (max - min >= 5) {
    if (min <= number && number <= max) {
      if (number % 2 === 0) {
        response = "El número está dentro de rango y es par";
        colorBackground = "success";
      } else {
        response = "El número está dentro de rango pero no es par";
        colorBackground = "warning";
      }
    } else {
      if (number % 2 != 0) {
        response = "El número está fuera de rango y es impar";
        colorBackground = "success";
      } else {
        response = "El número está fuera de rango pero no es impar";
        colorBackground = "warning";
      }
    }
  } else {
    response = "El rango debe ser mayor o igual a 5";
    colorBackground = "danger";
  }

  message.innerHTML =
    "<span>Rango: " +
    min +
    " - " +
    max +
    "<br/>Número: " +
    number +
    "<br />Resultado: " +
    response +
    "</span>";
  message.className = "alert alert-" + colorBackground + " mt-3";

  document.getElementById("minInput").value = "";
  document.getElementById("maxInput").value = "";
  document.getElementById("numberInput").value = "";
});

form.addEventListener("reset", function (e) {
  message.innerHTML = "<span> Esperando dato. </span>";
  message.className = "alert alert-secondary mt-3";
});
