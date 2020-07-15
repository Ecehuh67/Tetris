import BattleField from '../battle-field/battle-field';
import UserDashboard from '../user-dashboard/user-dashboard';
import {
  FIELD_SIZE,
  KEYBOARD_KEYS,
  SCORE_VALUE,
  AMOUNT_OF_ROTATION,
} from '../../consts';
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
  const [nextTetramino, setNextTetramino] = React.useState(null);
  const [isGameOver, setGameOver] = React.useState(false);

  // entry options of the game
  let currentPosition = 4;
  let currentFigure = createRandomFigure();
  let currentTetramino = currentFigure[currentRotation];
  let randomColor = generateRandomColor();
  
  // create next tetramino for showing into user's dashboard
  let followingFigure = createRandomFigure();
  let followingTetramino = followingFigure[currentRotation];
  let followingColor = generateRandomColor();

  // Cells which were colored by tetraminos
  let frozenCells = [];

  // The lowest point of tetramino
  let lowerPoint = null;

  // Get coords of tetramino
  const getCurrentPosition = (tetramino) => {
    return tetramino.map((coord) => coord + currentPosition);
  };

  // Check empty cells near a current tetramino (right/left)
  const checkFreePosition = (tetramino, step) => {
    return tetramino.map((coord) => {
      return fieldCell[step === 'right' ? coord + 1 : coord - 1].isFrozen
    }).every((frozenCell) => frozenCell === false)
  }

  // Draw current tetramino onto the field
  const draw = () => {
    setFieldCell(
      fieldCell.map((cell) => {
        const copiedCell = cell;
        
        if (currentTetramino.some((coord) => coord + currentPosition === cell.id)) {
          copiedCell.isClear = false;
          copiedCell.color = randomColor;
        }

        return cell;
      })
    );
  };

  // Delete current tetramino from the field
  const erase = () => {
    const current = currentTetramino.map((it) => it + currentPosition);

    setFieldCell(
      fieldCell.map((cell) => {
        const copiedCell = cell;

        if (current.some((it) => it === cell.id)) {
          copiedCell.isClear = true;
          copiedCell.color = null;
        }
        return cell;
      })
    );
  };

  const moveRight = () => {
    const current = getCurrentPosition(currentTetramino);

    // Define the right edge of playground and also check possibility of changing position to right on 1 step
    if (current.some((coord) => (coord + 1) % FIELD_SIZE.wide === 0) || !checkFreePosition(current, 'right')) {
      return;
    }

    currentPosition += 1;
  };

  const moveLeft = () => {
    const current = getCurrentPosition(currentTetramino);

    // Define the right edge of playground and also check possibility of changing position to left on 1 step
    if (current.some((coord) => coord % FIELD_SIZE.wide === 0) || !checkFreePosition(current, 'left')) {
      return;
    }

    currentPosition -= 1;
  };

  // Boost throwing a tetramino in 2 times
  const throwDown = () => {
    const nextPosition = currentPosition + FIELD_SIZE.wide * 3;

    // Check empty cells to be allowed to throw a tetramino down
    const isFree = currentTetramino
      .map((coord) => {
        if (frozenCells.length === 0) {
          return false;
        }

        return frozenCells.map((cell) => cell.id).includes(coord + nextPosition);
      })
      .every((frozenCell) => frozenCell === false);

    if (isFree && nextPosition + lowerPoint < fieldCell.length - FIELD_SIZE.wide) {
      currentPosition += FIELD_SIZE.wide * 2;
    }
  };

  // Rotate a tetramino around itself within amount of rotation
  const rotateFigure = () => {
    // Find next rotation of current tetramino
    const nextRotation = currentFigure[
      currentRotation + 1 > AMOUNT_OF_ROTATION - 1 ? 0 : currentRotation + 1
    ].map((coord) => coord + currentPosition);

    const isRight = nextRotation
      .map((coord) => coord % FIELD_SIZE.wide === 0)
      .every((frozenCell) => frozenCell === false);
    const isLeft = nextRotation
      .map((coord) => (coord + 1) % FIELD_SIZE.wide === 0)
      .every((frozenCell) => frozenCell === false); 

    // Limit rotation of a tetramino if its coords get out of left/right edge
    if (
      ((currentPosition + 1) % FIELD_SIZE.wide < FIELD_SIZE.wide / 2 &&
        !isLeft) ||
      (currentPosition % FIELD_SIZE.wide > FIELD_SIZE.wide / 2 && !isRight)
    ) {
      return;
    }

    changeCurrentRotation();
    currentTetramino = currentFigure[currentRotation];
  };

  // Delete a line if each cell of one is fulled by tetramino
  const addScore = () => {
    let counter = 0;

    // Divide the field onto lines contain 10 cells
    const lines = new Array(FIELD_SIZE.height).fill([]).map(() => {
      counter += FIELD_SIZE.wide;
      return fieldCell.slice(
        counter === FIELD_SIZE.wide ? 0 : counter - FIELD_SIZE.wide,
        counter
      );
    });

    // Finding fulled lines
    const isFulled = lines.map((line) => {
      return line.map((cell) => cell.isClear).every((filledCell) => filledCell === false);
    });

    // Get list of fulled lines
    const numberFulledLines = isFulled
      .map((line, i) => {
        if (line === true) {
          return i;
        }
        return '';
      })
      .filter((numb) => numb !== '');

    if (numberFulledLines.length > 0) {
      const emptyLine = new Array(FIELD_SIZE.wide * numberFulledLines.length)
        .fill('')
        .map((__, i) => {
          return {
            id: i,
            isClear: true,
            color: null,
            isFrozen: false,
            isBottom: false,
          };
        });

      // Delete fulled lines
      numberFulledLines.forEach((line, i) => {
        if (i > 0) {
          fieldCell.splice(
            line * FIELD_SIZE.wide - i * FIELD_SIZE.wide,
            FIELD_SIZE.wide
          );
        } else {
          fieldCell.splice(line * FIELD_SIZE.wide, FIELD_SIZE.wide);
        }
      });

      // Paste empty lines instead of fulled at the start
      fieldCell.forEach((__, i) => {
        if (i < FIELD_SIZE.wide * numberFulledLines.length) {
          fieldCell.unshift(emptyLine[i]);
        }
      });
      fieldCell.forEach((cell, i) => {
        const copiedCell = cell
        copiedCell.id = i;
      });

      setScore((prev) => prev + numberFulledLines.length * SCORE_VALUE);
    }
  };

  // Stop the current tetramino near bottom/figure and create new one
  const freeze = () => {
    lowerPoint = Math.max(...currentTetramino);
    const bottomPoint =
      fieldCell.slice().indexOf(fieldCell.find((cell) => cell.isBottom)) -
      FIELD_SIZE.wide;

    frozenCells = fieldCell.slice().filter((cell) => cell.isFrozen === true);
    const nextMove = currentPosition + FIELD_SIZE.wide;

    // Define the next line from tetramino is free or there is a another figure
    const isFree = currentTetramino
      .map((coord) => {
        if (frozenCells.length === 0) {
          return false;
        }

        return frozenCells.map((cell) => cell.id).includes(coord + nextMove);
      })
      .every((frozenCell) => frozenCell === false);

    // Stop tetramino
    if (currentPosition + lowerPoint >= bottomPoint || !isFree) {
      const current = getCurrentPosition(currentTetramino);

      setFieldCell(
        fieldCell.map((cell) => {
          const copiedCell = cell;
          if (current.some((coord) => coord === cell.id)) {
            copiedCell.isFrozen = true;
          }
          return copiedCell;
        })
      );

      // Reset current tetramino and create new one
      currentPosition = 4;

      // Change current tetramino
      currentFigure = followingFigure;
      currentTetramino = followingTetramino;
      randomColor = followingColor;

      // Create a new following tetramino
      followingFigure = createRandomFigure();
      followingTetramino = followingFigure[currentRotation];
      followingColor = generateRandomColor();

      setNextTetramino({
        figure: followingFigure,
        tetramino: followingTetramino,
        color: followingColor,
        isFirst: true,
      });

      addScore();
    }
  };

  const gameOver = () => {
    const current = getCurrentPosition(currentTetramino);
    const isEmpty = current.map((coord) => fieldCell[coord].isFrozen).every((frozenCell) => frozenCell === false)

    if (!isEmpty) {
      currentTetramino = [];
      setGameOver(true);
    }
  };

  const onKeyDown = (evt) => {
    const { key } = evt;

    const executeKeyFunction = (cb) => {
      erase();
      cb()
      draw();
    }

    switch(true) {
      case (key === KEYBOARD_KEYS.right):
        executeKeyFunction(moveRight);
        break;
      case (key === KEYBOARD_KEYS.left): 
        executeKeyFunction(moveLeft);
        break;
      case (key === KEYBOARD_KEYS.down):
        executeKeyFunction(throwDown);
        break;
      default:
        executeKeyFunction(rotateFigure);
    }
  };

  const moveDown = () => {
    erase();
    currentPosition += FIELD_SIZE.wide;
    draw();
    freeze();
  };

  React.useEffect(() => {
    const timer2 = setInterval(() => {
      moveDown();
      gameOver();
    }, 500);

    return () => {
      clearInterval(timer2);
    };
  }, []);

  React.useEffect(() => {
    document.addEventListener('keydown', onKeyDown);

    if (nextTetramino === null) {
      setNextTetramino({
        figure: followingFigure,
        tetramino: followingTetramino,
        color: followingColor,
      });
    }
  }, []);

  return (
    <main className="html-wrapper main">
      <BattleField field={fieldCell} />
      <UserDashboard
        score={score}
        color={randomColor}
        nextFigure={nextTetramino}
      />

      {isGameOver && <p>GAME OVER</p>}
    </main>
  );
};

export default Tetris;
