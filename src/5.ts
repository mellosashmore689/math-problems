function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numbers = [1, 2, 3, 4, 5];

const randomNum = getRandomNumber(0, numbers.length - 1);

const randomNumber = numbers[randomNum];

console.log(`Your random number is: ${randomNumber}`);
