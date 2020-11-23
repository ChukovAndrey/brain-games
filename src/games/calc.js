import {
  greeting, getAnswer, win, lose, getRandomNumber,
} from '../index.js';

const MAX_NUMBER = 20;
const SCORE_TO_WIN = 3;
const OPERATORS = ['+', '-', '*'];

const getRandomOperator = (arrayOfOperators) => {
  const randomIndex = getRandomNumber(arrayOfOperators.length);
  return arrayOfOperators[randomIndex];
};

export default async () => {
  const name = await greeting();

  let counter = SCORE_TO_WIN;
  let firstOperand;
  let secondOperand;
  let operator;
  let playerAnswer;
  let correctAnswer;

  while (counter > 0) {
    firstOperand = getRandomNumber(MAX_NUMBER);
    secondOperand = getRandomNumber(MAX_NUMBER);
    operator = getRandomOperator(OPERATORS);

    switch (operator) {
      case '+':
        correctAnswer = firstOperand + secondOperand;
        break;
      case '-':
        correctAnswer = firstOperand - secondOperand;
        break;
      case '*':
        correctAnswer = firstOperand * secondOperand;
        break;
      default:
        break;
    }
    console.log('What is the result of the expression?');
    console.log(`Question: ${firstOperand} ${operator} ${secondOperand}`);
    playerAnswer = await getAnswer();

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
