/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
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

  let who_Op = Math.floor(Math.random() * who.length);
  let action_Op = Math.floor(Math.random() * action.length);
  let what_Op = Math.floor(Math.random() * what.length);
  let when_Op = Math.floor(Math.random() * when.length);

  document.getElementById("excuse").innerHTML =
    who[who_Op] + action[action_Op] + what[what_Op] + when[when_Op];

  console.log("Hello Rigo from the console!");
};
