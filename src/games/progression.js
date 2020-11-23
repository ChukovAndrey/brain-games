import {
  greeting, getAnswer, win, lose, getRandomNumber,
} from '../index.js';

const MAX_NUMBER = 10;
const SCORE_TO_WIN = 3;
const LENGTH_OF_PROGRESSION = 10;
const HIDE_PATTERN = '...';

const generateProgression = (startingPoint, step, progressionLength) => {
  const progressionArray = [];
  let progressionValue = startingPoint;
  for (let i = 0; i < progressionLength; i += 1) {
    progressionArray.push(progressionValue);
    progressionValue += step;
  }
  return progressionArray;
};

export default async () => {
  const name = await greeting();

  let counter = SCORE_TO_WIN;
  let startingPoint;
  let step;
  let progression;
  let randomIndex;
  let playerAnswer;
  let correctAnswer;

  while (counter > 0) {
    startingPoint = getRandomNumber(MAX_NUMBER);
    step = getRandomNumber(MAX_NUMBER);
    progression = generateProgression(startingPoint, step, LENGTH_OF_PROGRESSION);
    randomIndex = getRandomNumber(LENGTH_OF_PROGRESSION - 1);
    correctAnswer = progression[randomIndex];
    progression[randomIndex] = HIDE_PATTERN;

    console.log('What number is missing in the progression?');
    console.log(`Question: ${progression.join(' ')}`);
    playerAnswer = await getAnswer();

    if (Number(playerAnswer) === correctAnswer) {
      console.log('Correct!');
      counter -= 1;
    } else {
      lose(name, playerAnswer, correctAnswer);
      return;
    }
  }
  win(name);
};
