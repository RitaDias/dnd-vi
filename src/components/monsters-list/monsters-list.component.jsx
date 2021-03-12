import ListItem from "../list-item/list-item.component";

import "./monster-list.styles.scss";

const MonsterList = ({ monsterList }) => {
  return (
    <div className="list">
      {monsterList.map((monster) => (
        <ListItem key={monster.index} monster={monster} />
      ))}
    </div>
  );
};

export default MonsterList;
