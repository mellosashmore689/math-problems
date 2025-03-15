function getRandomMathProblem() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  let operator = "+";
  if (Math.random() < 0.5) {
    operator = "-";
  } else if (Math.random() < 0.75) {
    operator = "*";
  } else {
    operator = "/";
  }
  let problem = `${num1} ${operator} ${num2}`;
  let answer = "";
  switch (operator) {
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
      answer = num1 / num2;
  }
  return { problem, answer };
}
