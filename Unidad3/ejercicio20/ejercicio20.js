/* 20. Se le solicita al usuario que ingrese los tres lados de un triángulo. Realice el
algoritmo para informar si el triángulo es equilátero, isósceles o escaleno
*/

const form = document.getElementById("form");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const side1 = parseFloat(document.getElementById("side1Input").value);
  const side2 = parseFloat(document.getElementById("side2Input").value);
  const side3 = parseFloat(document.getElementById("side3Input").value);

  let response = "";

  if (side1 != 0 && side2 != 0 && side3 != 0) {
    
    if ((side1 === side2) && (side2 === side3)) {
      response = "equilátero";
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
      response = "isósceles";
    } else {
      response = "escaleno";
    }

    response = "El triángulo es: " + response;
    message.className = "alert alert-succe  ss mt-3";
  } else {
    response = "Ningún lado puede ser de 0";
    message.className = "alert alert-danger mt-3";
  }

  message.innerHTML = response;
});

form.addEventListener("reset", function (e) {
  message.innerHTML = "<span> Esperando dato. </span>";
  message.className = "alert alert-secondary mt-3";
});
