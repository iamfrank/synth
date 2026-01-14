const baseFreq = 440;
const tones = ["A", "A#", "B", "C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab"];

function calcNote(keyNumber = 49) {
  return Math.round(Math.pow(2, (keyNumber - 49) / 12) * baseFreq);
}

function calcTone(keyNumber = 49) {
  let toneIdx = (keyNumber % 12) - 1;
  if (toneIdx < 0) {
    toneIdx = 11;
  }
  return tones[toneIdx];
}

export const toneMap = new Map([
  ["KeyA", { freq: calcNote(43), note: calcTone(43) }],
  ["KeyS", { freq: calcNote(44), note: calcTone(44) }],
  ["KeyD", { freq: calcNote(45), note: calcTone(45) }],
  ["KeyF", { freq: calcNote(46), note: calcTone(46) }],
  ["KeyG", { freq: calcNote(47), note: calcTone(47) }],
  ["KeyH", { freq: calcNote(48), note: calcTone(48) }],
  ["KeyJ", { freq: calcNote(49), note: calcTone(49) }],
  ["KeyK", { freq: calcNote(50), note: calcTone(50) }],
  ["KeyL", { freq: calcNote(51), note: calcTone(51) }],
]);
