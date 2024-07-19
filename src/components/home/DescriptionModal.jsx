

import React from 'react';
import { Modal, Button } from '@mantine/core';
import { Title, Text } from '@mantine/core';
import './modal.css';

function DescriptionModal({ opened, onClose, content }) {
  return (
    <div>
      <Modal
        opened={opened}
        onClose={onClose}
        title="Description"
        className="custom-Modal-content"
      >
        <div className="modal-body">
          <Title order={5}>Work Sheet Field(s) List:</Title>
          <Text size="md" weight={500} color="black" align="left" mt="md">
            Chemicals (Chemicals) | | Instruments (Instruments)
          </Text>
          <div className="dotted-line"></div>
          <Title order={5}>Worksheet Content</Title>
          <Text size="md" weight={500} color="black" align="left" mt="md">
            {content}
          </Text>
          <div className="modal-footer">
            <Button onClick={onClose}>Edit</Button>
            <Button onClick={onClose}>Save</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default DescriptionModal;
