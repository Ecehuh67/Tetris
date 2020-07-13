import LittleField from '../little-field/little-field';

const UserDashboard = ({ score, color, nextFigure }) => {
  const tetrField = new Array(16).fill('').map((__, i) => {
    return {
      id: i,
      isClear: true,
    };
  });

  let convertedFigure = null;

  if (nextFigure !== null) {
    convertedFigure = nextFigure.tetramino.map((cor) => {
      if (nextFigure === null) {
        return;
      }

      let newCor = null;
      switch (true) {
        case cor >= 10 && cor < 20:
          newCor = cor - 6;
          break;
        case cor >= 20 && cor < 30:
          newCor = cor - 12;
          break;
        case cor >= 30 && cor < 40:
          newCor = cor - 18;
          break;
        default:
          newCor = cor;
          break;
      }

      return newCor;
    });
  }

  tetrField.forEach((item) => {
    if (nextFigure === null) {
      return;
    }

    const isColored = convertedFigure.includes(item.id);
    if (isColored) {
      item.isClear = false;
      item.color = nextFigure.color;
    }
  });

  return (
    <section className="main__dashboard">
      <h1 className="visually-hidden">User screen</h1>
      <div className="main__dashboard-score score-table">
        <h2 className="score-table__title">Your Score:</h2>
        <span className="score-table__points">{score} points</span>
      </div>
      <p className="main__dashboard-paragraph">Next Tetramino:</p>
      <div className="main__dashboard-tetramino">
        <LittleField field={tetrField} />
      </div>
    </section>
  );
};

export default UserDashboard;
