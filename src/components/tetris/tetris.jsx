import BattleField from '../battle-field/battle-field';
import { FIELD_SIZE, lTetromino } from '../../consts';

const Tetris = () => {
  const fieldSquare = FIELD_SIZE.wide * FIELD_SIZE.height;
  let currentPosition = 4;

  let elementsCollection = new Array(fieldSquare)
    .fill({ id: 0, isClear: true, container: null })
    .map((item, i) => {
      return {
        ...item,
        id: i,
      };
    });

  const draw = () => {
    const randomTetramino = lTetromino[1];

    elementsCollection.forEach((item) => {
      if (randomTetramino.some((el) => el + currentPosition === item.id)) {
        item.isClear = false;
      }
    });
  };

  const undraw = () => {
    elementsCollection.forEach((item) => {
      item.isClear = true;
    });
  };

  const moveDown = () => {
    undraw();
    currentPosition += FIELD_SIZE.wide;
    draw();
  };

  draw();
  setTimeout(() => {
    elementsCollection = [{ id: 1, isClear: false }];
    console.log(elementsCollection);
  }, 5000);
  // setTimeout(() => {
  //   console.log('timer');
  //   moveDown();
  // }, 5000);

  return (
    <main className="html-wrapper main">
      <BattleField field={elementsCollection} />
    </main>
  );
};

export default Tetris;
