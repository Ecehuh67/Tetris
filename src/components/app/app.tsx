import '../../less/style.less';
import Tetris from '../tetris/tetris';
import StartScreen from '../start-screen/start-screen';

const App: React.FC = () => {
  const [isStarted, setStartGame] = React.useState<boolean>(false);
  return (
    <>
      {isStarted && <Tetris cb={setStartGame} />}
      {!isStarted && <StartScreen cb={setStartGame} />}
    </>
  );
};

export default App;
