import "./list-item.styles.scss";

import { Card, Tag } from "antd";
import MONSTER_TYPES from "../../helper/monster-types";

const ListItem = ({
  toggleShowDetailModal,
  updateCurrentOpenItem,
  ...otherProps
}) => {
  const { name, type } = otherProps.monster;

  return (
    <Card
      className="item"
      onClick={() => {
        updateCurrentOpenItem(otherProps.monster);
        toggleShowDetailModal();
      }}
    >
      <img
        alt="monster"
        src={`https://robohash.org/${name}.png?set=set4&size=100x100`}
      />
      {name}
      <Tag color={MONSTER_TYPES[type]}>{type}</Tag>
    </Card>
  );
};

export default ListItem;
