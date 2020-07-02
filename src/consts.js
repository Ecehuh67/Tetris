export const FIELD_SIZE = {
  wide: 10,
  height: 15,
};

export const COLORS = ['#ff1d58', '#0049B7', '#fff685', '#8458B3', '#f37736'];
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