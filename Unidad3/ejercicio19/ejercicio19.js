/* 19. Se le solicita al usuario que ingrese dos números y un operador (+, -, *, /). Realice
un programa para calcular e informar la operación solicitada entre ambos números.
*/

const form = document.getElementById("form");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const number1 = parseFloat(document.getElementById("number1Input").value);
  const number2 = parseFloat(document.getElementById("number2Input").value);
  const operator = document.getElementById("operatorSelectInput").value;

  let response = "";
  let colorBackground = "success";

  switch (operator) {
    case "+":
      response = number1 + number2;
      break;
    case "-":
      response = number1 - number2;
      break;
    case "*":
      response = number1 * number2;
      break;
    case "/":
      if (number2 !== 0) {
        response = number1 / number2;
      } else {
        response = "Error: No se puede dividir por cero.";
        colorBackground = "danger";
      }
      break;
    default:
      response = "Operador no válido.";
      colorBackground = "danger";
  }

  if (colorBackground === "success"){
    response = number1 + " " + operator + " " + number2 + " = " + response;
  }

  message.innerHTML = response;
  message.className = "alert alert-" + colorBackground + " mt-3";

});

form.addEventListener("reset", function (e) {
  message.innerHTML = "<span> Esperando dato. </span>";
  message.className = "alert alert-secondary mt-3";
});
