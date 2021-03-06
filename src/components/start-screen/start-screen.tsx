import { StartScreenProps } from '../../ts-types';

const StartScreen: React.FC<StartScreenProps> = ({ cb }) => {
  return (
    <main className="html-wrapper main">
      <button
        className="main__start-button"
        type="button"
        onClick={() => {
          cb(true);
        }}
      >
        <p>Let&apos;s play</p>
      </button>
    </main>
  );
};

export default StartScreen;
