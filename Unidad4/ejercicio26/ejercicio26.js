/* 26. Se le solicita al usuario que ingrese una cantidad desconocida de números. Realice
un programa para calcular e informar:
a. La sumatoria de los valores ingresados.
b. El menor valor ingresado.
c. El mayor valor ingresado.
Materia: Lógica de programación 
*/

const form = document.getElementById("form");
const numberMessage = document.getElementById("numberMessage");
let numbers = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const number = document.getElementById("numberInput");

  if (number.value != "") {
    numbers.push(parseInt(number.value));

    numberMessage.innerHTML = numbers.reduce(
      (accumulator, currentValue, i) =>
        accumulator + '<span class="fw-bold">#' + currentValue + "</span> ",
      ""
    );
    numberMessage.className = "alert alert-primary mt-3";

    number.value = "";
  }
});

form.addEventListener("reset", function (e) {
  numberMessage.innerHTML = "<span> Esperando datos. </span>";
  numberMessage.className = "alert alert-secondary mt-3";
  numbers = [];
});

document
  .getElementById("calculateButton")
  .addEventListener("click", function (e) {
    if (numbers.length) {
      const total = numbers.reduce((acc, num) => acc + num, 0);
      let min = numbers[0];
      let max = numbers[0];

      for (i = 1; i <= numbers.length; i++) {
        if (numbers[i - 1] > max) {
          max = numbers[i - 1];
        }

        if (numbers[i - 1] < min) {
          min = numbers[i - 1];
        }
      }

      numberMessage.innerHTML =
        "Suma total: " +
        total +
        "<br />El número mayor es: " +
        max +
        "<br />El número menor es: " +
        min;

      numbers = [];
    }
  });
