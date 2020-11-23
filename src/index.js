import promptly from 'promptly';

export const greeting = async () => {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const getAnswer = async () => {
  const answer = await promptly.prompt('Your answer:  ');
  return answer;
};

export const win = (name) => {
  console.log(`Congratulations, ${name}!`);
};

export const lose = (name, playerAnswer, correctAnswer) => {
  console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
};

export const getRandomNumber = (max) => Math.floor(Math.random() * Math.floor(max));
