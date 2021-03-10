import { useState, useEffect } from "react";

import "./list-item.styles.scss";

import { CardItem } from "./list-item.styles";

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
    <CardItem monsterType={type}>
      <img
        alt="monster"
        src={`https://robohash.org/${index}.png?set=set4&size=100x100`}
      />
      {name}
    </CardItem>
  );
};

export default ListItem;
