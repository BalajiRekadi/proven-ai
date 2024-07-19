import { Accordion, Box, Group, Title } from "@mantine/core";
import { IconRun } from "@tabler/icons-react";
import React from "react";

const AccordionGroup = ({ accordions }) => {
  return (
    <div>
      <Group
        position="left"
        mb="md"
        style={{ marginTop: "16px", marginBottom: "16px" }}
      >
        <Title order={4} style={{ display: "flex", alignItems: "center" }}>
          Work Sheet Details <IconRun size={24} style={{ marginLeft: "8px" }} />
        </Title>
      </Group>
      <Box
        style={{
          padding: "16px",
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <Accordion
          styles={{
            item: {
              backgroundColor: "#fff",
              borderRadius: "8px",
              marginBottom: "8px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            },
            control: {
              padding: "8px 16px",
            },
            panel: {
              padding: "16px",
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
