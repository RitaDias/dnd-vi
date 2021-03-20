import "./list-item.styles.scss";

import { useState } from "react";
import { Card, Tag } from "antd";
import ModalContent from "../modal-content/modal-content.component";

import MONSTER_TYPES from "../../helper/monster-types";

import "./list-item.styles.scss";
import { DragonImageContainer } from "./list-item.styles.jsx";

import { Modal } from "antd";

const ListItem = ({ monster }) => {
  const { name, type } = monster;
  const [showModal, setShowModal] = useState(false);
  const tagLowerCase = type.toLowerCase();
  const tagType = tagLowerCase.toLowerCase().replaceAll(" ", "-");

  // credit dragon image: Freepik (https://www.freepik.com/)
  return (
    <div>
      <Card
        className="item"
        onClick={() => {
          setShowModal(!showModal);
        }}
      >
        <DragonImageContainer
          color={MONSTER_TYPES[tagType]}
          className="dragon-image"
        />
        {name}
        <Tag color={MONSTER_TYPES[tagType]}>{tagLowerCase}</Tag>
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
