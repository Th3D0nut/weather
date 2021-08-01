function capitalizer(string) {
  let partOne = string.slice(0, 1);
  const partTwo = string.slice(1);

  partOne = partOne.toUpperCase();

  return partOne + partTwo;
}

function removeUnderscores(string) {
  return string.split('_').join(' ');
}

function correctString(string) {
  return removeUnderscores(capitalizer(string));
}

export { capitalizer, correctString }