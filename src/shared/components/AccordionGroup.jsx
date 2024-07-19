import { Accordion, Box, Group, Title } from "@mantine/core";
import { IconRun } from "@tabler/icons-react";
import React from "react";

const AccordionGroup = ({ accordions, groupTitle }) => {
  return (
    <div>
      <Group
        position="left"
        mb="md"
        style={{ marginTop: "16px", marginBottom: "16px" }}
      >
        <Title order={4} style={{ display: "flex", alignItems: "center" }}>
          {groupTitle} <IconRun size={24} style={{ marginLeft: "8px" }} />
        </Title>
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
              <Accordion.Panel>{acc.content}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Box>
    </div>
  );
};

export default AccordionGroup;
