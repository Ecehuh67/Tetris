const BattleField = ({ field }) => {
  React.useEffect(() => {
    console.log(field);
  }, []);
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
    </section>
  );
};

export default BattleField;
