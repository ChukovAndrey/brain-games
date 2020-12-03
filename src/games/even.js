import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const RULES = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const startEvenGame = () => {
  const task = getRandomNumber();
  const correctAnswer = isEven(task) ? 'yes' : 'no';

  return { task, correctAnswer };
};

export default () => runGame(RULES, startEvenGame);
