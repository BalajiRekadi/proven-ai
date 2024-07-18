import React, { useState } from "react";
import { Button, Flex, Group, Stepper, Title, Image } from "@mantine/core";
import dataLogo from "../../../assets/database.png";
import ImportDocs from "./import-docs/ImportDocs";
import Worksheets from "./worksheets/Worksheets";

const CreateFlow = () => {
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 5 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <div>
      <Group>
        <Image src={dataLogo} w={16} />
        <Title order={2}>Create Master Data</Title>
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
          Step 5 content: Get full access
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
