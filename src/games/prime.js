import {
  greeting, getAnswer, win, lose, getRandomNumber,
} from '../index.js';

const MAX_NUMBER = 100;
const SCORE_TO_WIN = 3;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export default async () => {
  const name = await greeting();
  console.log('Answer "yes" if the number is prime. Otherwise answer "no".');
  let counter = SCORE_TO_WIN;
  let randomNumber;
  let correctAnswer;
  let playerAnswer;
  while (counter > 0) {
    randomNumber = getRandomNumber(MAX_NUMBER);
    correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
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
