import { useState, useEffect } from "react";

import ListItem from "../list-item/list-item.component";

import "./monster-list.styles.scss";

const MonsterList = () => {
  let [monsterList, setMonsterList] = useState([]);

  useEffect(() => {
    async function getMonsters() {
      let response = await fetch("https://www.dnd5eapi.co/api/monsters");
      response = await response.json();
      setMonsterList(response.results);
    }
    getMonsters();
  }, []);

  return (
    <div className="list">
      {monsterList.map((monster) => (
        <ListItem key={monster.index} monster={monster} />
      ))}
    </div>
  );
};

export default MonsterList;
