import {
  getOscType,
  getRelease,
  getVolume,
  getAttack,
  getSustain,
  getDecay,
} from "./controls.js";

const audioCtx = new AudioContext();
const keyMap = new Map();
const feedForward = [0.00020298, 0.0004059599, 0.00020298];
const feedBack = [1.0126964558, -1.9991880801, 0.9873035442];

function startTone(keycode, freq) {
  const cache = keyMap.get(keycode);
  if (!cache) {
    keyMap.set(keycode, playSound(freq));
  }
}

function endTone(keycode) {
  const cache = keyMap.get(keycode);
  if (cache) {
    const release = getRelease();
    cache.gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + release); // Release
    cache.osc.stop(audioCtx.currentTime + release);
  }
  keyMap.delete(keycode);
}

function playSound(freq) {
  if (!freq) {
    return;
  }
  const osc = audioCtx.createOscillator();
  const iirFilter = audioCtx.createIIRFilter(feedForward, feedBack);
  const gain = audioCtx.createGain();
  const volume = getVolume();
  const attack = getAttack();
  const decay = getDecay() + attack;
  const sustain = getVolume() * getSustain();

  osc.type = getOscType();
  osc.frequency.value = freq;

  gain.gain.setValueAtTime(0, audioCtx.currentTime);
  gain.gain.linearRampToValueAtTime(volume, audioCtx.currentTime + attack); // Attack
  gain.gain.linearRampToValueAtTime(sustain, audioCtx.currentTime + decay); // Decay to sustain level

  osc.connect(gain).connect(iirFilter).connect(audioCtx.destination);
  osc.start();
  return { osc, gain };
}

export { startTone, endTone };
