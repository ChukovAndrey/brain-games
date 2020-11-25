import getRandomNumber from '../lib.js';

const isEven = (number) => number % 2 === 0;

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const task = getRandomNumber();
  const correctAnswer = isEven(task) ? 'yes' : 'no';

  return { rules, task, correctAnswer };
};
