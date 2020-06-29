import BattleField from '../battle-field/battle-field';
import { FIELD_SIZE, KEYBOARD_KEYS } from '../../consts';
import {
  createRandomFigure,
  generateRandomColor,
  changeCurrentRotation,
  currentRotation,
} from '../../tetramino';

const Tetris = () => {
  // define amount of playground cells
  const fieldSquare = FIELD_SIZE.wide * FIELD_SIZE.height;

  // abstract Array for rendering figures
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

  // rerender State
  const [fieldCell, setFieldCell] = React.useState(initialFieldCells);

  // entry options of the game
  let currentPosition = 4;
  let currentFigure = createRandomFigure();
  let currentTetramino = currentFigure[currentRotation];
  let randomColor = generateRandomColor();

  //
  // let frozenTetramino = null;
  let lowerPoint = null;

  const getCurrentPosition = (tetramino) => {
    return tetramino.map((el) => el + currentPosition);
  };

  const draw = () => {
    setFieldCell(
      fieldCell.map((item) => {
        if (currentTetramino.some((el) => el + currentPosition === item.id)) {
          item.isClear = false;
          item.color = randomColor;
        }

        return item;
      })
    );
  };

  const undraw = () => {
    const current = currentTetramino.map((it) => it + currentPosition);

    setFieldCell(
      fieldCell.map((item) => {
        if (current.some((it) => it === item.id)) {
          item.isClear = true;
          item.color = null;
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

  // Stop the current tetramino near bottom/figure and create new one
  const freeze = () => {
    lowerPoint = Math.max(...currentTetramino);
    const bottomPoint =
      fieldCell.indexOf(fieldCell.find((it) => it.isBottom)) - FIELD_SIZE.wide;

    const frozenCells = fieldCell.slice().filter((it) => it.isFrozen === true);
    const nextMove = currentPosition + FIELD_SIZE.wide;

    // Define the next line from tetramino is free or there is a another figure
    const isFree = currentTetramino
      .map((it) => {
        if (frozenCells.length === 0) {
          return false;
        }

        return frozenCells.map((el) => el.id).includes(it + nextMove);
      })
      .every((item) => item === false);

    // Stop tetramino
    if (currentPosition + lowerPoint >= bottomPoint || !isFree) {
      const current = getCurrentPosition(currentTetramino);

      setFieldCell(
        fieldCell.map((item) => {
          if (current.some((el) => el === item.id)) {
            item.isFrozen = true;
          }
          return item;
        })
      );

      // Reset current tetramino and create new one
      currentPosition = 4;
      currentFigure = createRandomFigure();
      currentTetramino = currentFigure[currentRotation];
      randomColor = generateRandomColor();
    }
  };

  const gameOver = () => {
    const figure = currentPosition + lowerPoint + FIELD_SIZE.wide + 1;
  };

  const moveRight = () => {
    if ((currentPosition + lowerPoint + 1) % 10 === 0) {
      return;
    }
    currentPosition += 1;
  };

  const moveLeft = () => {
    const current = getCurrentPosition(currentTetramino);
    if (current.some((it) => it % FIELD_SIZE.wide === 0)) {
      return;
    }
    currentPosition -= 1;
  };

  const throwDown = () => {
    currentPosition += FIELD_SIZE.wide * 2;
  };

  const rorateFigure = () => {
    changeCurrentRotation();
    currentTetramino = currentFigure[currentRotation];
  };

  const onKeyDown = (evt) => {
    const { key } = evt;
    if (key === KEYBOARD_KEYS.right) {
      undraw();
      moveRight();
      draw();
    } else if (key === KEYBOARD_KEYS.left) {
      undraw();
      moveLeft();
      draw();
    } else if (key === KEYBOARD_KEYS.down) {
      undraw();
      throwDown();
      draw();
    } else if (key === KEYBOARD_KEYS.up) {
      undraw();
      rorateFigure();
      draw();
    }
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      draw();
    }, 100);
    const timer2 = setInterval(() => {
      moveDown();
      gameOver();
      freeze();
      draw();
    }, 500);

    return () => {
      clearTimeout(timer);
      clearInterval(timer2);
    };
  }, []);

  React.useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
  }, []);

  return (
    <main className="html-wrapper main">
      <BattleField field={fieldCell} />
    </main>
  );
};

export default Tetris;
