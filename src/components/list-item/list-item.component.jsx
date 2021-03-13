import "./list-item.styles.scss";

import { useState } from "react";
import { Card, Tag } from "antd";
import ModalContent from "../modal-content/modal-content.component";

import MONSTER_TYPES from "../../helper/monster-types";

import { Modal } from "antd";

const ListItem = ({ monster }) => {
  const { name, type } = monster;
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Card
        className="item"
        onClick={() => {
          setShowModal(!showModal);
        }}
      >
        <img
          alt="monster"
          src={`https://robohash.org/${name}.png?set=set4&size=100x100`}
        />
        {name}
        <Tag color={MONSTER_TYPES[type]}>{type}</Tag>
      </Card>

      <Modal
        visible={showModal}
        onCancel={() => {
          setShowModal(!showModal);
        }}
        footer={null}
      >
        <ModalContent currentOpenItem={monster} />
      </Modal>
    </div>
  );
};

export default ListItem;
