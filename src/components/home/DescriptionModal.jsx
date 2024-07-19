import React, { useState } from 'react';
import { Modal, Button } from '@mantine/core';
import { Title } from '@mantine/core';
import { Text } from '@mantine/core';
import './modal.css'
function DescriptionModal() {
  const [opened, setOpened] = useState(false);

  return (
    <div >
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Description"
      
       className='custom-Modal-content'
      >
        <div className='modal-body'>
        <Title order={5}>Work Sheet Field(s) List:</Title>
      <Text size="md" weight={500} color="black" align="left" mt="md">
      Chemicals (Chemicals) | | Instruments (Instruments)
      </Text>
      <div className="dotted-line"></div>
      <Title order={5}>Worksheet Content</Title>
      <Text size="md" weight={500} color="black" align="left" mt="md">
      Chemicals (Chemicals) | | Instruments (Instruments)
      </Text>
      <Text size="md" weight={500} color="black" align="left" mt="md">
      Chemicals (Chemicals) | | Instruments (Instruments)
      </Text>
      <Text size="md" weight={500} color="black" align="left" mt="md">
      Chemicals (Chemicals) | | Instruments (Instruments)
      </Text>
      <Text size="md" weight={500} color="black" align="left" mt="md">
      Chemicals (Chemicals) | | Instruments (Instruments)
      </Text>
      <div className="modal-footer">
          <Button  onClick={() => setOpened(false)}>edit</Button>
          <Button onClick={() => setOpened(false)}>Save</Button>
        </div>
    
        </div>
      </Modal>

      <Button onClick={() => setOpened(true)}>Open Modal</Button>
    </div>
  );
}

export default  DescriptionModal;

