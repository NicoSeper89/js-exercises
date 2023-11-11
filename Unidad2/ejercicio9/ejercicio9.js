/* 
Se le solicita al usuario que ingrese su nombre y luego su apellido. Realice un
programa que arme y muestre el mensaje "Bienvenido", seguido del nombre y apellido
del usuario. 
*/
const message = document.getElementById("message");

function generateWelcomeMessage(name, surname) {
  message.innerHTML = "¡Bienvenido " + name + " " + surname + "!";
  message.className = "alert alert-success mt-3";
}

const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var name = document.getElementById("nameInput").value;
  var surname = document.getElementById("surnameInput").value;

  generateWelcomeMessage(name, surname);
});

form.addEventListener("reset", function (event) {
  message.innerHTML = "Ingrese su nombre y apellido";
  message.className = "alert alert-secondary mt-3";
});
