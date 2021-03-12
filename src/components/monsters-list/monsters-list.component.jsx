import { default as ListItem } from "../list-item/list-item.container";
import { default as DetailModal } from "../detail-modal/detail-modal.container";

import "./monster-list.styles.scss";

const MonsterList = ({ monsterList, showDetailModal }) => {
  return (
    <div className="list">
      {monsterList.map((monster) => (
        <ListItem key={monster.index} monster={monster} />
      ))}

      {showDetailModal ? <DetailModal /> : null}
    </div>
  );
};

export default MonsterList;
