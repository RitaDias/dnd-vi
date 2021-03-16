import { Card, Tag } from "antd";
import DAMAGE_TYPE from "../../helper/damage-type";

import "./spells-list.styles.scss";
import { MagicImageContainer } from "./spells-list.styles.jsx";

const SpellsList = ({ spells, type }) => {
  return spells.map(({ index, name }) => (
    <Card className="spell-item" key={index}>
      <MagicImageContainer color={DAMAGE_TYPE[type]} />
      {name}
      <Tag color={DAMAGE_TYPE[type]}>{type}</Tag>
    </Card>
  ));
};

export default SpellsList;
