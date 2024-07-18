import React from 'react';
import { Accordion, Button, TextInput, Group, Box, Title, Text } from '@mantine/core';
import { IconEdit, IconDeviceFloppy, IconRun } from '@tabler/icons-react';

const WorkSheetDetails = () => {
    return (
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

    );
}

export default WorkSheetDetails;

