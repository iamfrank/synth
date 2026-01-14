import { startTone, endTone } from "../synth.js";
import { toneMap } from "../data.js";

export class KeyboardKey extends HTMLElement {
  tone = {
    freq: 440,
    note: "A",
  };

  constructor() {
    super();
    this.tone = toneMap.get(this.dataset.key);
    this.render();
    this.attachListeners();
  }

  render() {
    this.innerHTML = `<button>
      <span class="key">${this.dataset.key.substring(3)}</span>
      <span class="note">${this.tone.note}</span>
    </button>`;
  }

  attachListeners() {
    const btnEl = this.querySelector("button");
    btnEl.addEventListener("pointerdown", this.pointerdownHandler.bind(this), {
      passive: false,
    });
    btnEl.addEventListener("pointerup", this.pointerupHandler.bind(this), {
      passive: false,
    });
    btnEl.addEventListener("pointercancel", this.pointerupHandler.bind(this), {
      passive: false,
    });
    btnEl.addEventListener("pointerout", this.pointerupHandler.bind(this), {
      passive: false,
    });
    btnEl.addEventListener("pointerleave", this.pointerupHandler.bind(this), {
      passive: false,
    });
  }

  pointerdownHandler() {
    startTone(this.dataset.key, this.tone.freq);
  }

  pointerupHandler() {
    endTone(this.dataset.key);
  }
}
