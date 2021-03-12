import "./list-item.styles.scss";

import { Card, Tag } from "antd";
import MONSTER_TYPES from "../../helper/monster-types";

const ListItem = ({ toggleShowDetailModal, ...otherProps }) => {
  const { name, type } = otherProps.monster;

  return (
    <Card
      className="item"
      onClick={() => {
        toggleShowDetailModal();
      }}
    >
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
