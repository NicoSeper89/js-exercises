/* 1. Se le solicita al usuario que ingrese 4 números. Realice un programa para calcular e
informar la suma y el promedio. */

function getTotal(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += parseFloat(numbers.item(i).value);
    numbers.item(i).value = ""
  }

  return total;
}

const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const htmlNumberInputs = document.getElementsByClassName("numberInput");

  const total = getTotal(htmlNumberInputs);

  const messege = document.getElementById("message");

  messege.innerHTML =
    "Suma: " +
    total +
    "<br />" +
    "Promedio: " +
    total / htmlNumberInputs.length;

  messege.classList = "alert alert-success mt-3";

  htmlNumberInputs.value = ""
});
