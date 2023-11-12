/* 22. Se le solicita al usuario que ingrese 3 números. Realice un programa para informar
si el número es múltiplo de 3, múltiplo 5, múltiplo de ambos o múltiplo de ninguno.
*/

const form = document.getElementById("form");
const messege = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const number = parseInt(document.getElementById("numberInput").value);
  let response = "";
  let messageBackground = "";

  if (number % 3 === 0 && number % 5 === 0) {
    response = "El número " + number + " es múltiplo de 3 y 5";
    messageBackground = "success";
  } else if (number % 3 === 0) {;
    response = "El número " + number + " es múltiplo de 3 pero no de 5"
    messageBackground = "warning";
  } else if (number % 5 === 0) {
    response = "El número " + number + " es múltiplo de 5 pero no de 3";
    messageBackground = "warning";
  } else {
    response = "El número " + number + " no es múltiplo ni de 3 ni de 5"
    messageBackground = "danger";
  }

  messege.innerHTML = response
  message.className = "alert alert-" + messageBackground + " mt-3";
});

form.addEventListener("reset", function (e) {
  message.innerHTML = "<span> Esperando dato. </span>";
  message.className = "alert alert-secondary mt-3";
});
