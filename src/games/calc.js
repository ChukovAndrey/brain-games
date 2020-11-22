import promptly from 'promptly';

const MAX_NUMBER = 100;
const SCORE_TO_WIN = 3;
const OPERATORS = ['+', '-', '*'];

const getRandomNumber = (max) => Math.floor(Math.random() * Math.floor(max));

const getRandomOperator = (arrayOfOperators) => {
  const randomIndex = getRandomNumber(arrayOfOperators.length);
  return arrayOfOperators[randomIndex];
};

export default async () => {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name? ');
  console.log(`Hello, ${name}!`);

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
    playerAnswer = await promptly.prompt('Your answer:  ');

    if (Number(playerAnswer) === correctAnswer) {
      console.log('Correct!');
      counter -= 1;
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
