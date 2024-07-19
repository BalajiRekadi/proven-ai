import React, { useMemo, useState } from "react";
import { Table, Button, Group, Text, Box, Select } from '@mantine/core';
import { IconFile, IconRun, IconEdit, IconCopy, IconShare } from '@tabler/icons-react';
import DescriptionModal from "../../../home/DescriptionModal"
const AccordianTableData = () => {

   

    const handleCopy = (content) => {
        navigator.clipboard.writeText(content)
            .then(() => {
                console.log('Copied to clipboard');
                // Optionally, you can show a success message or perform any other action
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
                // Handle errors if copy fails
            });
    };
    const data = [
        { id: '3.1', solution: 'Mobile Phase', type: 'Worksheet', name: 'PARA_DISS_MP_01', content: 'Worksheet Content' },
        { id: '3.2', solution: 'Standard Preparation', type: 'Section Worksheet', name: 'PARA_DISS_MP_01', content: 'Worksheet Content' },
        { id: '3.3', solution: 'Mobile Phase', type: 'Section Worksheet', name: 'PARA_DISS_MP_01', content: 'Worksheet Content' },
    ];

    const rows = data.map((item) => (
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.solution}</td>
            <td><IconFile size={24} /></td>
            <td>
                <Select
                    value={item.type}
                    data={['Worksheet', 'Section Worksheet']}
                />
            </td>
            <td  >{item.name} </td>
            <td style={{ cursor: 'pointer' }}  >{item.content} <IconCopy size={24} style={{ cursor: 'pointer' }} onClick={() => handleCopy(item.content)} /></td>
            <td>
                <Group spacing="xs">
                    <IconEdit size={24} style={{ cursor: 'pointer' }} />
                    <IconRun size={24} style={{ cursor: 'pointer' }} />
                    <IconShare size={24} style={{ cursor: 'pointer' }} />
                </Group>
            </td>
        </tr>
    ));


    return (
        <Box
            style={{
                padding: '16px',
                backgroundColor: '#f9f9f9',
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            }}
        >
            <Table style={{
                borderCollapse: 'separate',
                borderSpacing: '0 8px',
            }}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Solution</th>
                        <th>Input</th>
                        <th>Type</th>
                        <th>Name</th>
                        <th>Content</th>
                        <th>Merge</th>
                    </tr>
                </thead>
                <tbody
                    style={{
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                        
                    }}>{rows}</tbody>
            </Table>
            <Group position="right" mt="md">
                <Button color="blue">Merge</Button>
                <Button color="gray">Cancel</Button>
            </Group>
        </Box>
    );
}

export default AccordianTableData;



