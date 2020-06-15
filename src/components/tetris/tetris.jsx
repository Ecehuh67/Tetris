import BattleField from '../battle-field/battle-field';
// import BottomField from '../bottom-field/bottom-field';
import {
  FIELD_SIZE,
  lTetromino,
  squareTetramino,
  tTetramino,
  iTetramino,
  zTetramino,
} from '../../consts';

const Tetris = () => {
  // React.useEffect(() => {
  //   const timer = setTimeout(() => {
  //     draw();
  //   }, 500);
  //   const timer2 = setInterval(() => {
  //     moveDown();
  //   }, 1000);

  //   return () => {
  //     clearTimeout(timer);
  //     clearInterval(timer1);
  //   };
  // }, []);

  const fieldSquare = FIELD_SIZE.wide * FIELD_SIZE.height;

  const tetraminos = [
    lTetromino,
    squareTetramino,
    tTetramino,
    iTetramino,
    zTetramino,
  ];
  const currentRotation = 0;
  let currentPosition = 4;
  let currentTetramino =
    tetraminos[Math.floor(Math.random() * tetraminos.length)][currentRotation];

  console.log(currentTetramino);

  const initialFieldCells = new Array(fieldSquare)
    .fill({ id: 0, isClear: true, container: null })
    .map((item, i) => {
      return {
        ...item,
        id: i,
      };
    });
  const [fieldCell, setFieldCell] = React.useState(initialFieldCells);

  const draw = () => {
    const randomTetramino = zTetramino[1];

    setFieldCell(
      fieldCell.map((item) => {
        if (randomTetramino.some((el) => el + currentPosition === item.id)) {
          item.isClear = false;
        }
        return item;
      })
    );
  };

  const undraw = () => {
    setFieldCell(
      fieldCell.map((item) => {
        item.isClear = true;

        return item;
      })
    );
  };

  const moveDown = () => {
    undraw();
    currentPosition += FIELD_SIZE.wide;
    draw();
  };

  return (
    <main className="html-wrapper main">
      <BattleField field={fieldCell} />
    </main>
  );
};

export default Tetris;
