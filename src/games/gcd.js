import getRandomNumber from '../lib.js';

const MAX_NUMBER = 50;

const getGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGcd(num2, num1 % num2);
};

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const firstNumber = getRandomNumber(MAX_NUMBER);
  const secondNumber = getRandomNumber(MAX_NUMBER);
  const task = `${firstNumber} ${secondNumber}`;
  const correctAnswer = getGcd(firstNumber, secondNumber);

  return { rules, task, correctAnswer };
};
