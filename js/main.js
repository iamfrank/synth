import { keydownHandler, keyupHandler, attachHandlers } from "./events.js";
import { InputKnob } from "./ui/knob.js";

// Register web components
customElements.define("input-knob", InputKnob);

// Register event handlers
document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);
attachHandlers("tC4");
attachHandlers("tCsharp4");
attachHandlers("tD4");
attachHandlers("tDsharp4");
attachHandlers("tE4");
attachHandlers("tF4");
attachHandlers("tFsharp4");
attachHandlers("tG4");
attachHandlers("tGsharp4");
attachHandlers("tA4");
attachHandlers("tAsharp4");
attachHandlers("tB4");
