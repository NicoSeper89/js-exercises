/* Se le solicita al usuario que ingrese un número. Realice un programa para informar
si el número es cero, par o impar.
*/

function getTotal() {}

const form = document.getElementById("form");
const messege = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const number = document.getElementById("numberInput").value;

  let response = "";

  if (parseInt(number) === 0) {
    response = "El número es 0";
  } else {
    if (parseInt(number) % 2 === 0) {
      response = "El número es par";
    } else {
      response = "El número es impar";
    }
  }

  messege.innerHTML = "<span>" + response + "</span>";
  messege.className = "alert alert-success mt-3";

  number = "";
});

form.addEventListener("reset", function (e) {
  message.innerHTML = "<span> Esperando datos. </span>";
  message.className = "alert alert-secondary mt-3";
});
