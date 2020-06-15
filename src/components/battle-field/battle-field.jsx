import BottomField from '../bottom-field/bottom-field';

const BattleField = ({ field }) => {
  return (
    <section className="main__field">
      {field.map((item) => {
        return (
          <div
            className={
              item.isClear
                ? 'main__field-item'
                : 'main__field-item main__field-item--tetramino'
            }
            key={new Date() * Math.random()}
          />
        );
      })}

      <BottomField/>
    </section>
  );
};

export default BattleField;
