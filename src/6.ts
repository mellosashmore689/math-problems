// Random Math Problem Code Generator

function getRandomMathProblem() {
  // Generate two random numbers between 1 and 10
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;

  // Generate a random math operator (+, -, *, /)
  const operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];

  // Create the problem statement
  let problem = `${num1} ${operator} ${num2}`;

  // Check if the operator is division and the result should be a decimal
  if (operator === '/' && num2 !== 0) {
    problem += '.';
  }

  return problem;
}

// Example usage:
console.log(getRandomMathProblem());
