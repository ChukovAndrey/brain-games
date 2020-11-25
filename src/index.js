import promptly from 'promptly';
import greeting from './cli.js';

const SCORE_TO_WIN = 3;

export default async (game) => {
  const name = await greeting();

  const { rules } = game();
  console.log(rules);

  let counter = SCORE_TO_WIN;

  while (counter > 0) {
    const { task, correctAnswer } = game();
    console.log(`Question: ${task}`);
    const playerAnswer = await promptly.prompt('Your answer:  ');

    if (playerAnswer === String(correctAnswer)) {
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
