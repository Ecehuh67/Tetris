import type { FieldProps } from '../../ts-types';

const BattleField: React.FC<FieldProps> = ({ field }) => {
  return (
    <section className="main__field">
      {field.map((item) => {
        return (
          <div
            className={`${
              item.isClear
                ? 'main__field-item'
                : `main__field-item main__field-item--tetramino-${item.color.slice(
                    1
                  )}`
            } ${item.isBottom ? 'main__field-item--bottom' : ''}`}
            key={new Date().toString() + Math.random()}
          />
        );
      })}
    </section>
  );
};

export default BattleField;
