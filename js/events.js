import { startTone, endTone } from "./synth.js";

const eventCache = [];

function keyToneMapper(keycode) {
  switch (keycode) {
    case "KeyA":
      return 220;
    case "KeyS":
      return 246.9;
    case "KeyD":
      return 261.6;
    case "KeyF":
      return 293.7;
    case "KeyG":
      return 329.6;
    case "KeyH":
      return 349.2;
    case "KeyJ":
      return 392;
    case "KeyK":
      return 440;
    default:
      return false;
  }
}

function attachHandlers(id) {
  const element = document.getElementById(id);
  element.addEventListener("pointerdown", pointerdownHandler, {
    passive: false,
  });
  element.addEventListener("pointerup", pointerupHandler, { passive: false });
  element.addEventListener("pointercancel", pointerupHandler, {
    passive: false,
  });
  element.addEventListener("pointerout", pointerupHandler, { passive: false });
  element.addEventListener("pointerleave", pointerupHandler, {
    passive: false,
  });
}

function keydownHandler(event) {
  const freq = keyToneMapper(event.code);
  if (freq) {
    startTone(event.code, freq);
    document
      .querySelector(`[data-keycode="${event.code}"]`)
      .classList.add("active");
  }
}

function keyupHandler(event) {
  const freq = keyToneMapper(event.code);
  if (freq) {
    endTone(event.code);
    document
      .querySelector(`[data-keycode="${event.code}"]`)
      .classList.remove("active");
  }
}

function pointerdownHandler(event) {
  console.log("pointerdown", event.target.id);
  const freq = keyToneMapper(event.target.dataset.keycode);
  if (freq) {
    startTone(event.target.dataset.keycode, freq);
  }
}

function pointerupHandler(event) {
  console.log("pointerup", event.target.id);
  const freq = keyToneMapper(event.target.dataset.keycode);
  if (freq) {
    endTone(event.target.dataset.keycode);
  }
}

export {
  keydownHandler,
  keyupHandler,
  pointerdownHandler,
  pointerupHandler,
  attachHandlers,
};
