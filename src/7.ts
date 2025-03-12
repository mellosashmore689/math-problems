  import { getRandomInt } from 'ts-random'
  
// Returns a random number between 1 and 10
const randNum = () => getRandomInt(1, 10);

// Returns a random math problem with a correct answer
const genMathProblem = (operator: string) => {
    const num1 = randNum();
    const num2 = randNum();
    let correctAnswer;
  
    switch (operator) {
      case '+':
        correctAnswer = num1 + num2;
        break;
      case '-':
        correctAnswer = num1 - num2;
        break;
      case '*':
        correctAnswer = num1 * num2;
        break;
      default:
        throw new Error('Invalid operator');
    }
  
    return {
      question: `${num1} ${operator} ${num2}`,
      answer: correctAnswer,
    };
  };
  
// Example usage:
const problem = genMathProblem('+');
console.log(problem);