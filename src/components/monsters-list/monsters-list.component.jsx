import { default as ListItem } from "../list-item/list-item.container";
import { default as ModalContent } from "../modal-content/modal-content.container";

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
        onCancel={toggleShowDetailModal}
        footer={null}
      >
        <ModalContent />
      </Modal>
    </div>
  );
};

export default MonsterList;
