import getRandomNumber from '../functions.js';
import runGame from '../index.js';

const MAX_NUMBER = 20;
const OPERATORS = ['+', '-', '*'];

const getRandomOperator = (arrayOfOperators) => {
  const randomIndex = getRandomNumber(arrayOfOperators.length);

  return arrayOfOperators[randomIndex];
};

const getExpressionAnswer = (firstOperand, secondOperand, operator) => {
  let correctAnswer;

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
      throw new Error(`unsupported operation "${operator}"`);
  }

  return correctAnswer;
};

const startCalcGame = () => {
  const rules = 'What is the result of the expression?';

  const firstOperand = getRandomNumber(MAX_NUMBER);
  const secondOperand = getRandomNumber(MAX_NUMBER);
  const operator = getRandomOperator(OPERATORS);
  const task = `${firstOperand} ${operator} ${secondOperand}`;
  const correctAnswer = getExpressionAnswer(firstOperand, secondOperand, operator);

  return { rules, task, correctAnswer };
};

export default () => runGame(startCalcGame);
