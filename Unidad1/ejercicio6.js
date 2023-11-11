// 6. Realice el algoritmo para calcular e informar el resto de la división entera entre los valores.

function getRemainderOfDivision(dividend, divisor) {
  if (divisor === 0) {
    console.log("No se puede dividir entre cero");
  } else {
    console.log("División: " + dividend + "/" + divisor);
    console.log("Resultado: " + dividend / divisor);
    console.log("Resto: " + (dividend % divisor));
  }
}
