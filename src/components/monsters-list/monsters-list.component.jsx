import { default as ListItem } from "../list-item/list-item.container";
import { Modal } from "antd";

import "./monster-list.styles.scss";

const MonsterList = ({
  monsterList,
  showDetailModal,
  toggleShowDetailModal
}) => {
  return (
    <div className="list">
      {monsterList.map((monster) => (
        <ListItem key={monster.index} monster={monster} />
      ))}

      <Modal
        title="Basic Modal"
        visible={showDetailModal}
        onOk={toggleShowDetailModal}
        onCancel={toggleShowDetailModal}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default MonsterList;
