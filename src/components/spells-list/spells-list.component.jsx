import { Card, Tag } from "antd";
import DAMAGE_TYPE from "../../helper/damage-type";

import "./spells-list.styles.scss";

const SpellsList = ({ spells, type }) => {
  return spells.map(({ index, name }) => (
    <Card className="spell-item" key={index}>
      {name} <Tag color={DAMAGE_TYPE[type]}>{type} </Tag>
    </Card>
  ));
};

export default SpellsList;
