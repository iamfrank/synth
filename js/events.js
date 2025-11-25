import { startTone, endTone } from "./synth.js";

function keyToneMapper(keycode) {
  switch (keycode) {
    case "KeyS":
      return 262;
    case "KeyE":
      return 277;
    case "KeyD":
      return 294;
    case "KeyR":
      return 311;
    case "KeyF":
      return 330;
    case "KeyG":
      return 349;
    case "KeyY":
      return 370;
    case "KeyH":
      return 392;
    case "KeyU":
      return 415;
    case "KeyJ":
      return 440;
    case "KeyI":
      return 466;
    case "KeyK":
      return 494;
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
  const freq = keyToneMapper(event.target.dataset.keycode);
  if (freq) {
    startTone(event.target.dataset.keycode, freq);
  }
}

function pointerupHandler(event) {
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
