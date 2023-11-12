/* 17. Se le solicita al usuario que ingrese una letra. Realice el algoritmo para informar si
el valor ingresado es una vocal.
*/

const form = document.getElementById("form");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const letter = (document.getElementById("letterInput").value).toLowerCase();

  let response = "";
  let colorBackground = "";

  if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
    response = "La letra es una vocal";
    colorBackground = "success";
  } else {
    response = "La letra no es una vocal";
    colorBackground = "danger";
  }

  message.innerHTML = "<span>" + response + "</span>";
  message.className = "alert alert-" + colorBackground + " mt-3";

  document.getElementById("letterInput").value = "";
});

form.addEventListener("reset", function (e) {
  message.innerHTML = "<span> Esperando dato. </span>";
  message.className = "alert alert-secondary mt-3";
});
