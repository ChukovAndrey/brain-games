import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const RULES = 'What is the result of the expression?';
const MAX_NUMBER = 20;
const OPERATORS = ['+', '-', '*'];

const getRandomOperator = (arrayOfOperators) => {
  const randomIndex = getRandomNumber(arrayOfOperators.length);

  return arrayOfOperators[randomIndex];
};

const getExpressionAnswer = (firstOperand, secondOperand, operator) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      throw new Error(`unsupported operation "${operator}"`);
  }
};

const startCalcGame = () => {
  const firstOperand = getRandomNumber(MAX_NUMBER);
  const secondOperand = getRandomNumber(MAX_NUMBER);
  const operator = getRandomOperator(OPERATORS);
  const task = `${firstOperand} ${operator} ${secondOperand}`;
  const correctAnswer = String(getExpressionAnswer(firstOperand, secondOperand, operator));

  return { task, correctAnswer };
};

export default () => runGame(RULES, startCalcGame);
