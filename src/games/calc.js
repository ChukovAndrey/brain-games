import getRandomNumber from '../functions.js';

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
      break;
  }

  return correctAnswer;
};

export default () => {
  const rules = 'What is the result of the expression?';

  const firstOperand = getRandomNumber(MAX_NUMBER);
  const secondOperand = getRandomNumber(MAX_NUMBER);
  const operator = getRandomOperator(OPERATORS);
  const task = `${firstOperand} ${operator} ${secondOperand}`;
  const correctAnswer = getExpressionAnswer(firstOperand, secondOperand, operator);

  return { rules, task, correctAnswer };
};
