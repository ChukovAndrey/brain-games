import getRandomNumber from '../functions.js';

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

export default () => {
  const rules = 'Answer "yes" if the number is prime. Otherwise answer "no".';
  const task = getRandomNumber();
  const correctAnswer = isPrime(task) ? 'yes' : 'no';

  return { rules, task, correctAnswer };
};
