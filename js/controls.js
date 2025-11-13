function getOscType() {
  return document.getElementById("osctype").value;
}

function getVolume() {
  return Number(document.getElementById("vol").value);
}

function getAttack() {
  return Number(document.getElementById("attack").value);
}

function getDecay() {
  return Number(document.getElementById("decay").value);
}

function getSustain() {
  return Number(document.getElementById("sustain").value);
}

function getRelease() {
  return Number(document.getElementById("release").value);
}

export { getOscType, getVolume, getAttack, getDecay, getSustain, getRelease };
