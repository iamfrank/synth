import { InputKnob } from "./ui/knob.js";
import { KeyboardKey } from "./ui/key.js";
import { toneMap } from "./data.js";
import { startTone, endTone } from "./synth.js";

// Register web components
customElements.define("keyboard-key", KeyboardKey);
customElements.define("input-knob", InputKnob);

// Register event handlers
window.addEventListener("keydown", keydownHandler);
window.addEventListener("keyup", keyupHandler);

function keydownHandler(event) {
  const freq = toneMap.get(event.code).freq;
  if (freq) {
    startTone(event.code, freq);
    document
      .querySelector(`[data-key="${event.code}"] button`)
      .classList.add("active");
  }
}

function keyupHandler(event) {
  const tone = toneMap.get(event.code);
  if (tone) {
    endTone(event.code);
    document
      .querySelector(`[data-key="${event.code}"] button`)
      .classList.remove("active");
  }
}
