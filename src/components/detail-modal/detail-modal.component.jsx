import { Modal } from "antd";

const DetailModal = ({ currentOpenItem, toggleShowDetailModal }) => (
  <Modal
    title="Basic Modal"
    visible={true}
    onCancel={toggleShowDetailModal}
    footer={null}
  >
    {currentOpenItem.name}
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </Modal>
);

export default DetailModal;
