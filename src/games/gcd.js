import getRandomNumber from '../generateRandomNumber.js';
import runGame from '../index.js';

const RULES = 'Find the greatest common divisor of given numbers.';
const MAX_NUMBER = 50;

const getGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }

  return getGcd(num2, num1 % num2);
};

const generateGcdGameData = () => {
  const firstNumber = getRandomNumber(MAX_NUMBER);
  const secondNumber = getRandomNumber(MAX_NUMBER);
  const task = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(getGcd(firstNumber, secondNumber));

  return { task, correctAnswer };
};

export default () => runGame(RULES, generateGcdGameData);
