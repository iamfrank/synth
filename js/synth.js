import { getOscType } from "./controls.js";

const audioCtx = new AudioContext();
const keyMap = new Map();

function startTone(keycode, freq) {
  const osc = keyMap.get(keycode);
  if (!osc) {
    keyMap.set(keycode, playSound(freq));
  }
}

function endTone(keycode) {
  const { osc, gain } = keyMap.get(keycode);
  if (osc) {
    gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 1); // Release
    osc.stop(audioCtx.currentTime + 1);
  }
  keyMap.delete(keycode);
}

function playSound(freq) {
  if (!freq) {
    return;
  }
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = getOscType();
  osc.frequency.value = freq;

  gain.gain.setValueAtTime(0, audioCtx.currentTime);
  gain.gain.linearRampToValueAtTime(1, audioCtx.currentTime + 0.1); // Attack

  osc.connect(gain).connect(audioCtx.destination);
  osc.start();
  return { osc, gain };
}

export { startTone, endTone };
