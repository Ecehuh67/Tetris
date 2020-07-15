import { tetraminos, COLORS, AMOUNT_OF_ROTATION } from './consts';

// eslint-disable-next-line import/no-mutable-exports
export let currentRotation = 0;

export const createRandomFigure = () => {
  return tetraminos[Math.floor(Math.random() * tetraminos.length)];
};

export const generateRandomColor = () => {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
};

export const changeCurrentRotation = () => {
  if (currentRotation === AMOUNT_OF_ROTATION - 1) {
    currentRotation = 0;
    return;
  }
  currentRotation += 1;
};
