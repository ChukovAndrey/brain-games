import {
  greeting, getAnswer, win, lose, getRandomNumber,
} from '../index.js';

const MAX_NUMBER = 50;
const SCORE_TO_WIN = 3;

const getGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGcd(num2, num1 % num2);
};

export default async () => {
  const name = await greeting();

  let counter = SCORE_TO_WIN;
  let firstNumber;
  let secondNumber;
  let playerAnswer;
  let correctAnswer;

  while (counter > 0) {
    console.log('Find the greatest common divisor of given numbers.');
    firstNumber = getRandomNumber(MAX_NUMBER);
    secondNumber = getRandomNumber(MAX_NUMBER);
    console.log(`Question: ${firstNumber} ${secondNumber}`);
    playerAnswer = await getAnswer();
    correctAnswer = getGcd(firstNumber, secondNumber);

    if (Number(playerAnswer) === correctAnswer) {
      console.log('Correct!');
      counter -= 1;
    } else {
      lose(name, playerAnswer, correctAnswer);
      return;
    }
  }
  win(name);
};
