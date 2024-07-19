
import React from 'react';
import { Modal, Button } from '@mantine/core';
import { Title, Text } from '@mantine/core';
import './modal.css';
import AccordianTableData from '../master-data/create/worksheets/AccordianTableData';

function DescriptionModal({ opened, onClose, content }) {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Description"
      className="custom-Modal-content"
    >
      <div className="modal-body">
        
        {content === 'export' ? (
          <div>
           <AccordianTableData></AccordianTableData>
          </div>
        ) : (
          <>
          <Title order={5}>Work Sheet Field(s) List:</Title>
        <Text size="md" weight={500} color="black" align="left" mt="md">
          Chemicals (Chemicals) | | Instruments (Instruments)
        </Text>
        <div className="dotted-line"></div>
        <Title order={5}>Worksheet Content</Title>
          <Text size="md" weight={500} color="black" align="left" mt="md">
            This is worksheet description content
          </Text>
          </>
        )}
        <div className="modal-footer">
          <Button onClick={onClose}>Edit</Button>
          <Button onClick={onClose}>Save</Button>
        </div>
      </div>
    </Modal>
  );
}

export default DescriptionModal;
