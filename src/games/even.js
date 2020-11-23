import {
  greeting, getAnswer, win, lose, getRandomNumber,
} from '../index.js';

const MAX_NUMBER = 100;
const SCORE_TO_WIN = 3;

const isEven = (number) => number % 2 === 0;

export default async () => {
  const name = await greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let counter = SCORE_TO_WIN;
  let randomNumber;
  let correctAnswer;
  let playerAnswer;
  while (counter > 0) {
    randomNumber = getRandomNumber(MAX_NUMBER);
    correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);
    playerAnswer = await getAnswer();
    if (playerAnswer.toLowerCase() === correctAnswer) {
      console.log('Correct!');
      counter -= 1;
    } else {
      lose(name, playerAnswer, correctAnswer);
      return;
    }
  }
  win(name);
};
