function getOscType() {
  return document.getElementById("osctype").value;
}

function getVolume() {
  return document.getElementById("vol").value;
}

function getAttack() {
  return document.getElementById("attack").value;
}

function getDecay() {
  return document.getElementById("decay").value;
}

function getSustain() {
  return document.getElementById("sustain").value;
}

function getRelease() {
  return document.getElementById("release").value;
}

export { getOscType, getVolume, getAttack, getDecay, getSustain, getRelease };
