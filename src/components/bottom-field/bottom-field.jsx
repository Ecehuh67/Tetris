import { FIELD_SIZE } from '../../consts';

const BottomField = () => {
  return new Array(FIELD_SIZE.wide)
    .fill('')
    .map(() => <div className="bottom" key={new Date() * Math.random()} />);
};

export default BottomField;
