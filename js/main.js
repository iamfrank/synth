import {
  keydownHandler,
  keyupHandler,
  pointerdownHandler,
  pointerupHandler,
} from "./events.js";

document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);

document
  .getElementById("tA3")
  .addEventListener("pointerdown", pointerdownHandler);
document
  .getElementById("tB3")
  .addEventListener("pointerdown", pointerdownHandler);
document
  .getElementById("tC4")
  .addEventListener("pointerdown", pointerdownHandler);
document
  .getElementById("tD4")
  .addEventListener("pointerdown", pointerdownHandler);
document
  .getElementById("tE4")
  .addEventListener("pointerdown", pointerdownHandler);
document
  .getElementById("tF4")
  .addEventListener("pointerdown", pointerdownHandler);
document
  .getElementById("tG4")
  .addEventListener("pointerdown", pointerdownHandler);
document
  .getElementById("tA4")
  .addEventListener("pointerdown", pointerdownHandler);

document.getElementById("tA3").addEventListener("pointerup", pointerupHandler);
document.getElementById("tB3").addEventListener("pointerup", pointerupHandler);
document.getElementById("tC4").addEventListener("pointerup", pointerupHandler);
document.getElementById("tD4").addEventListener("pointerup", pointerupHandler);
document.getElementById("tE4").addEventListener("pointerup", pointerupHandler);
document.getElementById("tF4").addEventListener("pointerup", pointerupHandler);
document.getElementById("tG4").addEventListener("pointerup", pointerupHandler);
document.getElementById("tA4").addEventListener("pointerup", pointerupHandler);
