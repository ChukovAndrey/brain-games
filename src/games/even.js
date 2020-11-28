import getRandomNumber from '../functions.js';
import runGame from '../index.js';

const isEven = (number) => number % 2 === 0;

const startEvenGame = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const task = getRandomNumber();
  const correctAnswer = isEven(task) ? 'yes' : 'no';

  return { rules, task, correctAnswer };
};

export default () => runGame(startEvenGame);
