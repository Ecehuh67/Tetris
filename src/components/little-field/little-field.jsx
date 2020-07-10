const LittleField = ({ field }) => {
  return (
    <section className="little-field">
      {field.map((item) => {
        return (
          <div
            className={`${
              item.isClear
                ? 'little-field__item'
                : `little-field__item little-field__item--tetramino-${item.color.slice(
                    1
                  )}`
            }`}
            key={new Date() * Math.random()}
          />
        );
      })}
    </section>
  );
};

export default LittleField;
