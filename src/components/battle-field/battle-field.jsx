import { FIELD_SIZE } from '../../consts';

const BattleField = () => {
  const elementCollection = new Set();
  const elementRef = (elem) => {
    elementCollection.add(elem);
  };

  // first position for figure on the top
  let currentPosition = 4;

  const fieldSquare = FIELD_SIZE.wide * FIELD_SIZE.height;

  const draw = () => {
    return null;
  };

  console.log(draw());

  return (
    <main className="html-wrapper main">
      <section className="main__field">
        {new Array(fieldSquare).fill('').map(() => {
          return (
            <div
              className="main__field-item"
              key={Math.random() * fieldSquare}
              ref={elementRef}
            />
          );
        })}
      </section>
    </main>
  );
};

export default BattleField;
