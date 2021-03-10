import { useState, useEffect } from "react";

import "./list-item.styles.scss";

import { Card, Tag } from "antd";
import MONSTER_TYPES from "../../helper/monster-types";

const ListItem = (props) => {
  const { name, index, url } = props.monster;
  const [monsterDetails, setMonsterDetails] = useState({});
  const [type, setType] = useState("");

  useEffect(() => {
    async function getMonsterProperties() {
      let response = await fetch(`https://www.dnd5eapi.co${url}`);
      response = await response.json();
      setMonsterDetails(response);
      setType(response.type.trim().toLowerCase().replaceAll(" ", "-"));
    }

    getMonsterProperties();
  }, [url, monsterDetails.type]);

  return (
    <Card className="item">
      <img
        alt="monster"
        src={`https://robohash.org/${index}.png?set=set4&size=100x100`}
      />
      <Tag color={MONSTER_TYPES[type]}>{type}</Tag>
      {name}
    </Card>
  );
};

export default ListItem;
