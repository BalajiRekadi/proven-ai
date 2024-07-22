import { Accordion, Box, Group, Title } from "@mantine/core";
import { IconRun } from "@tabler/icons-react";
import React from "react";
import AccordionTable from "./AccordionTable";

const AccordionGroup = ({ accordions, groupTitle, updateData, onRun }) => {
  return (
    <>
      <Group align="center" py={16} pt={32}>
        <Title order={4}>{groupTitle}</Title>
        <IconRun size={24} />
      </Group>
      <Box>
        <Accordion
          variant="separated"
          styles={{
            item: {
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          {accordions.map((acc) => (
            <Accordion.Item value={acc.label} key={acc.label}>
              <Accordion.Control>{acc.label}</Accordion.Control>
              <Accordion.Panel>
                <AccordionTable
                  data={acc.content}
                  updateData={updateData}
                  label={acc.label}
                  onRun={onRun}
                />
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Box>
    </>
  );
};

export default AccordionGroup;
