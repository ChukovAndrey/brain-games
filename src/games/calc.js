import getRandomNumber from '../generateRandomNumber.js';
import runGame from '../index.js';

const RULES = 'What is the result of the expression?';
const MAX_NUMBER = 20;
const OPERATORS = ['+', '-', '*'];

const getRandomOperator = () => {
  const randomIndex = getRandomNumber(OPERATORS.length);

  return OPERATORS[randomIndex];
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
  const operator = getRandomOperator();
  const task = `${firstOperand} ${operator} ${secondOperand}`;
  const correctAnswer = String(getExpressionAnswer(firstOperand, secondOperand, operator));

  return { task, correctAnswer };
};

export default () => runGame(RULES, startCalcGame);
