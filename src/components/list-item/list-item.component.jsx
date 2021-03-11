import "./list-item.styles.scss";

import { Card, Tag } from "antd";
import MONSTER_TYPES from "../../helper/monster-types";

const ListItem = (props) => {
  const { name, type } = props.monster;

  return (
    <Card className="item">
      <img
        alt="monster"
        src={`https://robohash.org/${name}.png?set=set4&size=100x100`}
      />
      <Tag color={MONSTER_TYPES[type]}>{type}</Tag>
      {name}
    </Card>
  );
};

export default ListItem;
