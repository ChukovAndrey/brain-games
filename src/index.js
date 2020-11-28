import promptly from 'promptly';

const SCORE_TO_WIN = 3;

export default async (runGame) => {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name? ');
  console.log(`Hello, ${name}!`);

  let counter = 0;

  while (counter < SCORE_TO_WIN) {
    const { rules, task, correctAnswer } = runGame();
    if (counter === 0) {
      console.log(rules);
    }
    console.log(`Question: ${task}`);
    const playerAnswer = await promptly.prompt('Your answer:  ');

    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);

      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
