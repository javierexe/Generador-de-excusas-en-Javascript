let who = ["El perro ", "Mi abuela ", "El cartero ", "Mi pájaro "];
let action = ["se comió ", "me meó ", "aplastó ", "quebró "];
let what = ["la tarea ", "el teléfono ", "el auto "];
let when = [
  "antes de clases",
  "cuando estaba durmiendo",
  "mientras estaba haciendo ejercicio",
  "durante mi almuerzo",
  "mientras estaba rezando",
];

function generadorExcusas() {
  let who_Op = Math.floor(Math.random() * who.length);
  let action_Op = Math.floor(Math.random() * action.length);
  let what_Op = Math.floor(Math.random() * what.length);
  let when_Op = Math.floor(Math.random() * when.length);

  return (document.getElementById("excuse").innerHTML =
    who[who_Op] + action[action_Op] + what[what_Op] + when[when_Op]);
}
