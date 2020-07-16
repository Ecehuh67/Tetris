import '../../less/style.less';
import Tetris from '../tetris/tetris';
import StartScrenn from '../start-screen/start-screen';

const App = () => {
  const [isStarted, setStartGame] = React.useState(false);
  return (
    <>
      {
        isStarted && 
        <Tetris cb={setStartGame}/>
      }
      {
        !isStarted &&
        <StartScrenn cb={setStartGame}/>
      }
    </>
  );
};

export default App;
