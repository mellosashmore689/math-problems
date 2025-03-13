import { random } from 'mathjs';

const problem = {
  prompt: `What is ${random(10)} x ${random(10)}?`,
  answer: `${random(10) * random(10)}`
};

console.log(problem);
