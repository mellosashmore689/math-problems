function getRandomTSCode() {
  let result;
  const min = 100;
  const max = 999;
  result = Math.floor(Math.random() * (max - min + 1) + min);
  return result;
}
