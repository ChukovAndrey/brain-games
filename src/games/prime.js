import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const MAX_NUMBER = 100;
const RULES = 'Answer "yes" if the number is prime. Otherwise answer "no".';

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

const startPrimeGame = () => {
  const task = getRandomNumber(MAX_NUMBER);
  const correctAnswer = isPrime(task) ? 'yes' : 'no';

  return { task, correctAnswer };
};

export default () => runGame(RULES, startPrimeGame);
