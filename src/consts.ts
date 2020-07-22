import { FieldSize, KeyboardKeys } from './ts-types';

export const FIELD_SIZE: FieldSize = {
  wide: 10,
  height: 15,
};

export const COLORS: string[] = [
  '#ff1d58',
  '#0049B7',
  '#fff685',
  '#8458B3',
  '#f37736',
];
export const AMOUNT_OF_ROTATION: number = 4;
export const SCORE_VALUE: number = 10;

export const KEYBOARD_KEYS: KeyboardKeys = {
  right: 'ArrowRight',
  left: 'ArrowLeft',
  down: 'ArrowDown',
  up: 'ArrowUp',
};

const lTetromino: number[][] = [
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

const squareTetramino: number[][] = [
  [0, 1, FIELD_SIZE.wide, FIELD_SIZE.wide + 1],
  [0, 1, FIELD_SIZE.wide, FIELD_SIZE.wide + 1],
  [0, 1, FIELD_SIZE.wide, FIELD_SIZE.wide + 1],
  [0, 1, FIELD_SIZE.wide, FIELD_SIZE.wide + 1],
];

const tTetramino: number[][] = [
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

const iTetramino: number[][] = [
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

const zTetramino: number[][] = [
  [0, 1, FIELD_SIZE.wide + 1, FIELD_SIZE.wide + 2],
  [2, FIELD_SIZE.wide + 1, FIELD_SIZE.wide + 2, FIELD_SIZE.wide * 2 + 1],
  [0, 1, FIELD_SIZE.wide + 1, FIELD_SIZE.wide + 2],
  [2, FIELD_SIZE.wide + 1, FIELD_SIZE.wide + 2, FIELD_SIZE.wide * 2 + 1],
];

export const tetraminos: number[][][] = [
  lTetromino,
  squareTetramino,
  tTetramino,
  iTetramino,
  zTetramino,
];
