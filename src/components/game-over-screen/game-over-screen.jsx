const GameOverScreen = ({ score, cb }) => {
  return (
    <section className="main__layout">
      <span className="main__layout-text">GAME OVER</span>
      <button
        type="button"
        className="main__layout-button"
        onClick={() => {
          cb(false);
        }}
      >
        <span className="visually-hidden">try again</span>
      </button>
      <span className="main__layout-score">Your score: {score} points</span>
    </section>
  );
};

export default GameOverScreen;
