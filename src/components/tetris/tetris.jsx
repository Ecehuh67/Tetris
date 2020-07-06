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
  const [score, setScore] = React.useState(0);

  // entry options of the game
  let currentPosition = 4;
  let currentFigure = createRandomFigure();
  let currentTetramino = currentFigure[currentRotation];
  let randomColor = generateRandomColor();

  //
  // let frozenTetramino = null;
  let frozenCells = [];
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

  const erase = () => {
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
    erase();
    currentPosition += FIELD_SIZE.wide;
    draw();
    freeze();
  };

  const moveRight = () => {
    const current = getCurrentPosition(currentTetramino);
    if (current.some((it) => (it + 1) % FIELD_SIZE.wide === 0)) {
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

  // Speed Tetramino in 2 times
  const throwDown = () => {
    const nextStep = currentPosition + FIELD_SIZE.wide * 3;
    const isFree = currentTetramino
      .map((it) => {
        if (frozenCells.length === 0) {
          return false;
        }

        return frozenCells.map((el) => el.id).includes(it + nextStep);
      })
      .every((item) => item === false);

    if (isFree && nextStep + lowerPoint < fieldCell.length - FIELD_SIZE.wide) {
      currentPosition += FIELD_SIZE.wide * 2;
    }
  };

  const rotateFigure = () => {
    // Find next rotation of current tetramino
    const nextRotation = currentFigure[
      currentRotation + 1 > 3 ? 0 : currentRotation + 1
    ].map((it) => it + currentPosition);

    const isRight = nextRotation
      .map((it) => it % FIELD_SIZE.wide === 0)
      .every((it) => it === false);
    const isLeft = nextRotation
      .map((it) => (it + 1) % FIELD_SIZE.wide === 0)
      .every((it) => it === false);

    if (
      ((currentPosition + 1) % FIELD_SIZE.wide < FIELD_SIZE.wide / 2 &&
      !isLeft)
     || (currentPosition % FIELD_SIZE.wide > FIELD_SIZE.wide / 2 && !isRight)) {
      return;
    }

    changeCurrentRotation();
    currentTetramino = currentFigure[currentRotation];
  };

  const addScore = () => {
    let counter = 0;
    const lines = new Array(FIELD_SIZE.height).fill([]).map((__) => {
      counter += FIELD_SIZE.wide;
      return fieldCell.slice(
        counter === FIELD_SIZE.wide ? 0 : counter - FIELD_SIZE.wide,
        counter
      );
    });

    const isFulled = lines.map((line) => {
      return line.map((it) => it.isClear).every((item) => item === false);
    });
    const numberFulledLine = isFulled.indexOf(true);

    if (numberFulledLine !== -1) {
      console.log('line')
      const emptyLine = new Array(FIELD_SIZE.wide).fill('').map((item, i) => {
        return {
          id: i,
          isClear: true,
          color: null,
          isFrozen: false,
          isBottom: false,
        };
      });

      const minIndex = numberFulledLine * FIELD_SIZE.wide;

      const newData = fieldCell.slice()
      newData.splice(minIndex, FIELD_SIZE.wide);
      newData.forEach((__, i) => {
        if (i < FIELD_SIZE.wide) {
          newData.unshift(emptyLine[i]);
        }
      });
      newData.forEach((el, i) => {
        el.id = i
      });

      setFieldCell(newData)
      setScore((prev) => prev + 10);
    }
  };

  // Stop the current tetramino near bottom/figure and create new one
  const freeze = () => {
    lowerPoint = Math.max(...currentTetramino);
    const bottomPoint =
      fieldCell.slice().indexOf(fieldCell.find((it) => it.isBottom)) - FIELD_SIZE.wide;

    frozenCells = fieldCell.slice().filter((it) => it.isFrozen === true);
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

      addScore()
    }

  };

  const onKeyDown = (evt) => {
    const { key } = evt;
    if (key === KEYBOARD_KEYS.right) {
      erase();
      moveRight();
      draw();
    } else if (key === KEYBOARD_KEYS.left) {
      erase();
      moveLeft();
      draw();
    } else if (key === KEYBOARD_KEYS.down) {
      erase();
      throwDown();
      draw();
    } else if (key === KEYBOARD_KEYS.up) {
      erase();
      rotateFigure();
      draw();
    }
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      draw();
    }, 100);
    const timer2 = setInterval(() => {
      moveDown();
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
