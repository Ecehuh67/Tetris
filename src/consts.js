export const FIELD_SIZE = {
  wide: 10,
  height: 15,
};

export const COLORS = ['#FF00CC', '#2ab7ca', '#fed766 ', '#2243B6', '#e6e6ea'];
export const AMOUNT_OF_ROTATION = 4;

export const KEYBOARD_KEYS = {
  right: 'ArrowRight',
  left: 'ArrowLeft',
  down: 'ArrowDown',
  up: 'ArrowUp',
};

const lTetromino = [
  [1, 2, FIELD_SIZE.wide + 1, FIELD_SIZE.wide * 2 + 1],
  [
    FIELD_SIZE.wide,
    FIELD_SIZE.wide + 1,
    FIELD_SIZE.wide + 2,
    FIELD_SIZE.wide * 2 + 2,
  ],
  [1, FIELD_SIZE.wide + 1, FIELD_SIZE.wide * 2 + 1, FIELD_SIZE.wide * 2],
  [
    FIELD_SIZE.wide,
    FIELD_SIZE.wide * 2,
    FIELD_SIZE.wide * 2 + 1,
    FIELD_SIZE.wide * 2 + 2,
  ],
];

const squareTetramino = [
  [0, 1, FIELD_SIZE.wide, FIELD_SIZE.wide + 1],
  [0, 1, FIELD_SIZE.wide, FIELD_SIZE.wide + 1],
  [0, 1, FIELD_SIZE.wide, FIELD_SIZE.wide + 1],
  [0, 1, FIELD_SIZE.wide, FIELD_SIZE.wide + 1],
];

const tTetramino = [
  [1, FIELD_SIZE.wide, FIELD_SIZE.wide + 1, FIELD_SIZE.wide + 2],
  [1, FIELD_SIZE.wide + 1, FIELD_SIZE.wide + 2, FIELD_SIZE.wide * 2 + 1],
  [
    FIELD_SIZE.wide,
    FIELD_SIZE.wide + 1,
    FIELD_SIZE.wide + 2,
    FIELD_SIZE.wide * 2 + 1,
  ],
  [1, FIELD_SIZE.wide, FIELD_SIZE.wide + 1, FIELD_SIZE.wide * 2 + 1],
];

const iTetramino = [
  [1, FIELD_SIZE.wide + 1, FIELD_SIZE.wide * 2 + 1, FIELD_SIZE.wide * 3 + 1],
  [
    FIELD_SIZE.wide,
    FIELD_SIZE.wide + 1,
    FIELD_SIZE.wide + 2,
    FIELD_SIZE.wide + 3,
  ],
  [1, FIELD_SIZE.wide + 1, FIELD_SIZE.wide * 2 + 1, FIELD_SIZE.wide * 3 + 1],
  [
    FIELD_SIZE.wide,
    FIELD_SIZE.wide + 1,
    FIELD_SIZE.wide + 2,
    FIELD_SIZE.wide + 3,
  ],
];

const zTetramino = [
  [0, 1, FIELD_SIZE.wide + 1, FIELD_SIZE.wide + 2],
  [2, FIELD_SIZE.wide + 1, FIELD_SIZE.wide + 2, FIELD_SIZE.wide * 2 + 1],
  [0, 1, FIELD_SIZE.wide + 1, FIELD_SIZE.wide + 2],
  [2, FIELD_SIZE.wide + 1, FIELD_SIZE.wide + 2, FIELD_SIZE.wide * 2 + 1],
];

export const tetraminos = [
  lTetromino,
  squareTetramino,
  tTetramino,
  iTetramino,
  zTetramino,
];
