/* 25. Se le solicita al usuario que ingrese las notas del parcial de los alumnos de una
comisión. Se desconoce la cantidad de alumnos. Realice el algoritmo para informar:
 El porcentaje de alumnos aprobados (nota igual o superior a 4).
 El porcentaje de alumnos desaprobados (nota inferior a 4).
 El promedio de las notas.
Tenga en cuenta que solamente las notas pueden ir del 1 al 10.
*/

const form = document.getElementById("form");
const scoreMessage = document.getElementById("scoreMessage");
let scores = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const score = document.getElementById("scoreInput");
  const regex = /^([1-9](\.\d{1})?|10)$/;

  if (regex.test(score.value)) {
    scores.push(parseFloat(score.value));

    scoreMessage.innerHTML = scores.reduce(
      (accumulator, currentValue, i) =>
        accumulator +
        "Nota Alumno " +
        (i + 1) +
        ':<span class="fw-bold"> ' +
        currentValue +
        "</span><br />",
      ""
    );
    scoreMessage.className = "alert alert-primary mt-3";

    score.value = "";
  }
});

form.addEventListener("reset", function (e) {
  scoreMessage.innerHTML = "<span> Esperando datos. </span>";
  scoreMessage.className = "alert alert-secondary mt-3";
  scores = [];
});

document
  .getElementById("calculateButton")
  .addEventListener("click", function (e) {
    if (scores.length > 0) {
      const approved = scores.filter((num) => num >= 4);
      const approvedPercentage = (approved.length / scores.length) * 100;
      const average = (scores.reduce((acc, num) => acc + num, 0) / scores.length).toFixed(2);

      scoreMessage.innerHTML =
        "Porcentaje de alumnos aprobados: " +
        approvedPercentage.toFixed(2) +
        "%<br />Porcentaje de alumnos desaprobados: " +
        (100 - approvedPercentage).toFixed(2) +
        "%<br />Promedio de calificaciones: " +
        (average);

      scores = [];
    }
  });
