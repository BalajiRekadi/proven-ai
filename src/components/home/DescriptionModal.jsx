import React from "react";
import { Modal, Button } from "@mantine/core";
import { Title, Text } from "@mantine/core";
import "./modal.css";
import AccordionTable from "../../shared/components/AccordionTable";

function DescriptionModal({ opened, onClose, content }) {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Description"
      className="custom-Modal-content"
    >
      <div className="modal-body">
        <>
          <p>{content}</p>
        </>
        <div className="modal-footer">
          <Button onClick={onClose}>Edit</Button>
          <Button onClick={onClose}>Save</Button>
        </div>
      </div>
    </Modal>
  );
}

export default DescriptionModal;
