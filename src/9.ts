
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let num1 = getRandomInt(10);
let num2 = getRandomInt(10);
let operation = ["+", "-", "*", "/"][getRandomInt(4)];

let result = "";
if (operation === "+") {
  result = num1 + num2;
} else if (operation === "-") {
  result = num1 - num2;
} else if (operation === "*") {
  result = num1 * num2;
} else if (operation === "/") {
  result = num1 / num2;
}

console.log(`${num1} ${operation} ${num2} = ?`);
return result;