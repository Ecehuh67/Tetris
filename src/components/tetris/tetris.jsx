import BattleField from '../battle-field/battle-field';
import {
  FIELD_SIZE,
  lTetromino,
  squareTetramino,
  tTetramino,
  iTetramino,
  zTetramino,
  COLORS
} from '../../consts';

const Tetris = () => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      draw();
    }, 100);
    const timer2 = setInterval(() => {
      moveDown();
      freeze()
    }, 500);

    return () => {
      clearTimeout(timer);
      clearInterval(timer1);
    };
  }, []);

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

  const createRandomTetramoni = () =>
  tetraminos[Math.floor(Math.random() * tetraminos.length)][currentRotation];
  let currentTetramino = createRandomTetramoni();

  const generateRandomColor = () => {
    return COLORS[Math.floor(Math.random() * COLORS.length)]
  }
  let randomColor = generateRandomColor();

  const initialFieldCells = new Array(fieldSquare + FIELD_SIZE.wide)
    .fill({ id: 0, isClear: true, isBottom: null })
    .map((item, i) => {
      return {
        ...item,
        id: i,
        isBottom: i >= fieldSquare,
        isFrozen: false,
      };
    });
  const [fieldCell, setFieldCell] = React.useState(initialFieldCells);

  const draw = () => {
    setFieldCell(
      fieldCell.map((item) => {
        if (currentTetramino.some((el) => el + currentPosition === item.id)) {
          item.isClear = false;
          item.color = randomColor
        }

        return item;
      })
    );
  };

  const undraw = () => {
    const current = currentTetramino.map(it => it + currentPosition)

    // setFieldCell(
    //   fieldCell.map((item) => {
    //     item.isClear = true;

    //     return item;
    //   })
    // );

    setFieldCell(
      fieldCell.map((item) => {
        if(current.some(it => it ===item.id)){
          item.isClear = true
          item.color = null
        } 
          return item;
      })
    );
  };

  const moveDown = () => {
    undraw();
    currentPosition += FIELD_SIZE.wide;
    draw();
  };

  const freeze = () => {
    const lowerPoint = Math.max(...currentTetramino);
    const bottomPoint = fieldCell.indexOf(fieldCell.find((it) => it.isBottom)) - FIELD_SIZE.wide

    const frozenTetr = Math.min(...fieldCell.slice().filter((cell => cell.isFrozen === true)).map(it => it.id))
    console.log(frozenTetr)

    // if(currentPosition + lowerPoint > frozenTetr - FIELD_SIZE.wide) {
    //   console.log('here')
    // }


    if (currentPosition + lowerPoint > bottomPoint || currentPosition + lowerPoint > frozenTetr - FIELD_SIZE.wide) {
      const current = currentTetramino.map(el => el + currentPosition);

      setFieldCell(
        fieldCell.map((item) => {
          if(current.some(el => el === item.id)) {
            item.isFrozen = true;
          }
          return item
        })
      )

      // console.log(fieldCell)

      currentPosition = 4;
      currentTetramino = createRandomTetramoni();
      randomColor = generateRandomColor();
    }
  };

  return (
    <main className="html-wrapper main">
      <BattleField field={fieldCell} />
    </main>
  );
};

export default Tetris;
