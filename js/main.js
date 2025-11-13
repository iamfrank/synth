import {
  keydownHandler,
  keyupHandler,
  pointerdownHandler,
  pointerupHandler,
  attachHandlers,
} from "./events.js";

// Register event handlers
document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);
attachHandlers("tA3");
attachHandlers("tB3");
attachHandlers("tC4");
attachHandlers("tD4");
attachHandlers("tE4");
attachHandlers("tF4");
attachHandlers("tG4");
attachHandlers("tA4");
