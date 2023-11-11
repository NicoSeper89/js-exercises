// 8. Realice el algoritmo para calcular e informar el perímetro y el área del círculo. Se considerará para este ejercicio que el valor de PI será 3.1416.

function getInformationCircle(radius) {
  const PI = 3.1416;

  if (radius < 0) {
    console.log("Prohibido radio negativo");
  } else {
    console.log("Radio del Círculo: " + radius);
    console.log("Perímetro del Círculo: " + 2 * PI * radius);
    console.log("Área del círculo: " + PI * (radius * radius));
  }
}