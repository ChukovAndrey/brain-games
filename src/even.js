import promptly from 'promptly';

const MAX_NUMBER = 100;
const SCORE_TO_WIN = 3;

const getRandomNumber = (max) => Math.floor(Math.random() * Math.floor(max));

const isEven = (number) => number % 2 === 0;

export default async () => {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let counter = SCORE_TO_WIN;
  let randomNumber;
  let correctAnswer;
  let answer;
  while (counter > 0) {
    randomNumber = getRandomNumber(MAX_NUMBER);
    correctAnswer = isEven(randomNumber) ? 'YES' : 'NO';
    console.log(`Question: ${randomNumber}`);
    answer = await promptly.prompt('Your answer:  ');
    if (answer.toUpperCase() === correctAnswer) {
      console.log('Correct!');
      counter -= 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer.toLowerCase()}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
