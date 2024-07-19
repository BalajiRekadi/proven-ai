import React from "react";
import {
  Accordion,
  Button,
  TextInput,
  Group,
  Box,
  Title,
  Text,
} from "@mantine/core";
import { IconRun } from "@tabler/icons-react";
import AccordianTableData from "./AccordianTableData";
import { DetailsBox } from "../../../../shared/components";
const Worksheets = () => {
  return (
    <>
      <DetailsBox />

      <div>
        <Group
          position="left"
          mb="md"
          style={{ marginTop: "16px", marginBottom: "16px" }}
        >
          <Title order={4} style={{ display: "flex", alignItems: "center" }}>
            Work Sheet Details{" "}
            <IconRun size={24} style={{ marginLeft: "8px" }} />
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
            <Accordion.Item value="description">
              <Accordion.Control>1 Description</Accordion.Control>
              <Accordion.Panel>
                <AccordianTableData />
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="water">
              <Accordion.Control>2 Water</Accordion.Control>
              <Accordion.Panel>Content for Water</Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="assay">
              <Accordion.Control>3 Assay</Accordion.Control>
              <Accordion.Panel>Content for Assay</Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="impurities">
              <Accordion.Control>4 Impurities</Accordion.Control>
              <Accordion.Panel>Content for Impurities</Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Box>
      </div>
    </>
  );
};

export default Worksheets;
