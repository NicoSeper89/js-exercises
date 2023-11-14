/* 27. Como resultado de una encuesta se recogen los siguientes datos: sexo (H: Hombre,
M: Mujer), edad (en años) y altura (en centímetros). Realice un programa para calcular
e informar:
a. El porcentaje de mujeres mayores a 25 años.
 b. El porcentaje de hombres menores de 18 años.
 c. El promedio de edad de las mujeres.
 d. El promedio de altura de los hombres.
 e. La menor edad ingresada.
 f. La mayor altura ingresada
*/

const form = document.getElementById("form");
const responseContainer = document.getElementById("responsesMessagesContainer");
let persons = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const gender = document.getElementById("genderSelectInput");
  const years = document.getElementById("yearsInput");
  const height = document.getElementById("heightInput");

  persons.push({
    gender: gender.value,
    years: parseInt(years.value),
    height: parseInt(height.value),
  });

  responseContainer.innerHTML = persons.reduce(
    (acc, persons) =>
      acc +
      `<div class="alert alert-primary" role="alert"> <span>Sexo: ${persons.gender}<br/>Años: ${persons.years}<br/>Altura: ${persons.height}</span> </div>`,
    ""
  );

  years.value = "";
  height.value = "";
});

form.addEventListener("reset", function (e) {
  responseContainer.innerHTML =
    '<div class="alert alert-secondary" role="alert" > <span>Esperando datos.</span> </div>';
  persons = [];
});

document
  .getElementById("calculateButton")
  .addEventListener("click", function (e) {
    if (persons.length > 0) {
      responseContainer.innerHTML =
        `<div class="alert alert-success" role="alert"> <span>Porcentaje de mujeres mayores a 25 años: ` +
        (
          (persons.filter(
            (person) => person.gender === "mujer" && person.years > 25
          ).length /
            persons.length) *
          100
        ).toFixed(2) +
        `%<br/>Porcentaje de hombres menores de 18 años: ` +
        (
          (persons.filter(
            (person) => person.gender === "hombre" && person.years < 18
          ).length /
            persons.length) *
          100
        ).toFixed(2) +
        "%<br/>Promedio de edad de las mujeres: " +
        (
          persons
            .filter((person) => person.gender === "mujer")
            .reduce((acc, person) => acc + person.years, 0) /
          persons.filter((person) => person.gender === "mujer").length
        ).toFixed(2) +
        " años<br/>Promedio de altura de los hombres: " +
        (
          persons
            .filter((person) => person.gender === "hombre")
            .reduce((acc, person) => acc + person.height, 0) /
          persons.filter((person) => person.gender === "hombre").length
        ).toFixed(2) +
        " cm.<br />Mayor altura ingresada: " +
        Math.max(...persons.map((person) => person.years));
    }

    persons = [];
  });
