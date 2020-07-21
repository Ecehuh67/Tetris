import type { FieldProps } from '../../ts-types';

const BattleField: React.FC = ({ field }: FieldProps) => {
  return (
    <section className="main__field">
      {field.map((item, i) => {
        return (
          <div
            className={`${
              item.isClear
                ? 'main__field-item'
                : `main__field-item main__field-item--tetramino-${item.color.slice(
                    1
                  )}`
            } ${item.isBottom ? 'main__field-item--bottom' : ''}`}
            key={i * Math.random()}
          />
        );
      })}
    </section>
  );
};

export default BattleField;
