
// Generate a random math problem
let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);
let op = ["+", "-", "*", "/"][Math.floor(Math.random() * 4)];
let answer;
switch (op) {
  case "+":
    answer = num1 + num2;
    break;
  case "-":
    answer = num1 - num2;
    break;
  case "*":
    answer = num1 * num2;
    break;
  case "/":
    if (num2 == 0) {
      op = ["+", "-", "*"][Math.floor(Math.random() * 3)];
      return generateProblem();
    } else {
      answer = Math.floor(num1 / num2);
    }
}
return `${num1} ${op} ${num2} = ${answer}`;