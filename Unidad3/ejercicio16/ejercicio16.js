/* 16. Se le solicita al usuario que ingrese un número. Realice un programa para informar
si el número es múltiplo de 3.
*/

function getTotal() {}

const form = document.getElementById("form");
const messege = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const number = document.getElementById("numberInput").value;

  let response = "";
  let colorBackground = "";

  if (parseInt(number) === 0) {
    response = "El número es 0";
    colorBackground = "warning";
  } else {
    if (parseInt(number) % 3 === 0) {
      response = "El número es múltiplo de 3";
      colorBackground = "success";
    } else {
      response = "El número no es múltiplo de 3";
      colorBackground = "danger";
    }
  }

  messege.innerHTML = "<span>" + response + "</span>";
  messege.className = "alert alert-" + colorBackground + " mt-3";

  number = "";
});

form.addEventListener("reset", function (e) {
  message.innerHTML = "<span> Esperando datos. </span>";
  message.className = "alert alert-secondary mt-3";
});
