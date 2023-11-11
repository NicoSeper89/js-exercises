/* 
10. Se le solicita al usuario que ingrese el diámetro de un círculo. Realice un programa
para calcular e informar el perímetro y el área del círculo. Se considerará para este
ejercicio que el valor de PI será 3.1416.
*/
const message = document.getElementById("message");
const PI = 3.1416;

function generateWelcomeMessage(diameter) {
  const radius = diameter / 2;
  message.innerHTML =
    "<span> Área: " +
    PI * (radius * radius) +
    "</span> <br/> <span> Perímetro: " +
    PI * radius * 2 +
    "</span>";
  message.className =
    "alert alert-success mt-3";
}

function error() {
  message.innerHTML = "<span> Dato incorrecto: inténtelo nuevamente. </span>";
  message.className = "alert alert-danger mt-3";
}

const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const diameter = document.getElementById("diameterInput").value;

  if (diameter < 0) {
    error();
  } else {
    generateWelcomeMessage(diameter);
  }

  document.getElementById("diameterInput").value = "";

});

form.addEventListener("reset", function (event) {
  message.innerHTML = "<span> Esperando datos. </span>";
  message.className = "alert alert-secondary mt-3";
});
