import React, { useState } from "react";
import ImportDocs from "../import-docs/ImportDocs";
import { Button, Flex, Group, Stepper } from "@mantine/core";

const CreateFlow = () => {
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 5 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
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
          Step 2 content: Verify email
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
          <Button onClick={nextStep}>Generate Worksheets</Button>
        </Group>
      </Flex>
    </>
  );
};
export default CreateFlow;
