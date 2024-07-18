import React from 'react';
import { Accordion, Button, TextInput, Group, Box, Title, Text } from '@mantine/core';
import { IconEdit, IconDeviceFloppy, IconRun } from '@tabler/icons-react';

const Worksheets = () => {
  return (
    <>
      <Box
        style={{
          padding: '16px',
          backgroundColor: '#f9f9f9',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        }}
      >
        <Group position="apart" grow>
          <TextInput
            label="Product / Material Code"
            value="100001234"
            readOnly />
          <TextInput
            label="Spec No."
            value="F0-100001234-00"
            readOnly />
          <TextInput
            label="Method No."
            value="M0-100001234-00"
            readOnly />
          <TextInput
            label="Market/Pharmacopeia"
            value="USA"
            readOnly />
        </Group>

        <Box
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: '16px',
          }}
        >
          <IconEdit size={24} style={{ cursor: 'pointer', marginRight: '8px' }} />
          <IconDeviceFloppy size={24} style={{ cursor: 'pointer' }} />
        </Box>
      </Box>


      <Group position="left" mb="md">
        <Title order={4} style={{ display: 'flex', alignItems: 'center' }}>
          Work Sheet Details <IconRun size={24} style={{ marginLeft: '8px' }} />
        </Title>
      </Group>
      <Box
        style={{
          padding: '16px',
          backgroundColor: '#f9f9f9',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        }}
      >

        <Accordion styles={{
          item: {
            backgroundColor: '#fff',
            borderRadius: '8px',
            marginBottom: '8px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          },
          control: {
            padding: '12px 16px',
          },
          panel: {
            padding: '16px',
          },
        }}>
          <Accordion.Item value="description">
            <Accordion.Control>1 Description</Accordion.Control>
            <Accordion.Panel>
              Content for Description
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="water">
            <Accordion.Control>2 Water</Accordion.Control>
            <Accordion.Panel>
              Content for Water
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="assay">
            <Accordion.Control>3 Assay</Accordion.Control>
            <Accordion.Panel>
              Content for Assay
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="impurities">
            <Accordion.Control>4 Impurities</Accordion.Control>
            <Accordion.Panel>
              Content for Impurities
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Box></>
  );
}

export default Worksheets;

