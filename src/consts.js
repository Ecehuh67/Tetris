export const FIELD_SIZE = {
  wide: 10,
  height: 15,
};

export const COLORS = ['#fe4a49', '#2ab7ca', '#fed766 ', '#6497b1', '#e6e6ea'];

export const lTetromino = [
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

export const squareTetramino = [
  [0, 1, FIELD_SIZE.wide, FIELD_SIZE.wide + 1],
  [0, 1, FIELD_SIZE.wide, FIELD_SIZE.wide + 1],
  [0, 1, FIELD_SIZE.wide, FIELD_SIZE.wide + 1],
  [0, 1, FIELD_SIZE.wide, FIELD_SIZE.wide + 1],
];

export const tTetramino = [
  [1, FIELD_SIZE.wide, FIELD_SIZE.wide + 1, FIELD_SIZE.wide + 2],
  [1, FIELD_SIZE.wide + 1, FIELD_SIZE.wide + 2, FIELD_SIZE.wide * 2 + 1],
  [
    FIELD_SIZE.wide,
    FIELD_SIZE.wide + 1,
    FIELD_SIZE.wide + 2,
    FIELD_SIZE.wide * 3 + 1,
  ],
  [1, FIELD_SIZE.wide, FIELD_SIZE.wide + 1, FIELD_SIZE.wide * 2 + 1],
];

export const iTetramino = [
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