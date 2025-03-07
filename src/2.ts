import { getRandomInt } from 'random';
const num1 = getRandomInt(1, 9);
const num2 = getRandomInt(1, 9);
const op = ['+', '-', '*', '/'][getRandomInt(0, 3)];
let result;
switch (op) {
case '+':
result = num1 + num2;
break;
case '-':
result = num1 - num2;
break;
case '*':
result = num1 * num2;
break;
case '/':
result = num1 / num2;
}
console.log(num1, op, num2, result);