import React, { useState } from "react";
import { Button, Flex, Group, Stepper, Title, Image, Card, Text } from "@mantine/core";
import dataLogo from "../../../assets/database.png";
import ImportDocs from "./import-docs/ImportDocs";
import Worksheets from "./worksheets/Worksheets";
import { IconAlertCircle } from '@tabler/icons-react';
import Export from "./export/Export";

const CreateFlow = () => {
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 5 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <div>

      <Group align="center">
        <Image src={dataLogo} alt="Logo" w={16} />
        <Title order={2}>Create Master Data</Title>
        <Card
          shadow="sm"
          style={{
            marginBottom: '16px',
            padding: '8px',
            display: 'flex',
            alignItems: 'center',
            marginLeft: '16px', // Adjust spacing as needed
            width: '15%',
            border: '0.5px solid orange'
          }}
        >
          <div style={{ display: 'flex' }}>
            <Text size="sm" color="gray">
              File is in progress
            </Text>
            <IconAlertCircle size={20} style={{ marginRight: '8px', color: '#FF9800' }} />

          </div>
        </Card>
      </Group>
      <Stepper
        active={active}
        onStepClick={setActive}
        size="sm"
        w={"70%"}
        p={32}
      >
        <Stepper.Step label="Input Docs">
          <ImportDocs />
        </Stepper.Step>
        <Stepper.Step label="Worksheets">
          <Worksheets />
        </Stepper.Step>
        <Stepper.Step label="Tests">
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Step label="Test Plan">
          Step 4 content: Get full access
        </Stepper.Step>
        <Stepper.Step label="Export">
          <Export />
        </Stepper.Step>
      </Stepper>

      <Flex justify="space-between" mt="xl" mx="32">
        <Button variant="filled" onClick={prevStep}>
          Save
        </Button>
        <Group>
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
          <Button onClick={nextStep}>Generate Tests</Button>
        </Group>
      </Flex>
    </div>
  );
};
export default CreateFlow;
