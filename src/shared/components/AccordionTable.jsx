import React, { useMemo, useState } from "react";
import {
  Button,
  Group,
  Box,
  Select,
  ActionIcon,
  TextInput,
} from "@mantine/core";
import {
  IconRun,
  IconCopy,
  IconShare,
  IconFileFilled,
  IconCheckbox,
} from "@tabler/icons-react";
import DescriptionModal from "../../components/home/DescriptionModal";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import { DEFAULT_TABLE_CONFIG } from "../constants";
import TextModal from "./TextModal";

const AccordionTable = ({ data = [], label = "", updateData }) => {
  const [contentModalOpened, setContentModalOpened] = useState(false);
  const [inputModalOpened, setInputModalOpened] = useState(false);
  const [selectedContent, setSelectedContent] = useState("");
  const [selectedInput, setSelectedInput] = useState("");

  const handleCopy = (content) => {
    navigator.clipboard
      .writeText(content)
      .then(() => {
        console.log("Copied to clipboard");
        // Optionally, you can show a success message or perform any other action
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        // Handle errors if copy fails
      });
  };

  const handleContentClick = (content) => {
    setSelectedContent(content);
    setContentModalOpened(true);
  };

  const getTableData = () => {
    const tableData = [];
    data.forEach((item) => {
      const keys = Object.keys(item);
      keys.forEach((key) => {
        tableData.push({
          solution: key,
          input: item[key],
        });
      });
    });
    return tableData;
  };

  const handleInputIconClick = (input) => {
    setSelectedInput(input.value);
    setInputModalOpened(true);
  };

  const columns = useMemo(
    () => [
      {
        header: "Solution",
        accessorKey: "solution",
      },
      {
        header: "Input",
        size: 20,
        accessorKey: "input",
        Cell: ({ cell }) => (
          <ActionIcon variant="subtle">
            <IconFileFilled
              onClick={() => handleInputIconClick(cell.getValue())}
            />
          </ActionIcon>
        ),
      },
      {
        header: "Type",
        accessorKey: "type",
        Cell: ({ cell, row }) => (
          <Select
            placeholder="Select"
            value={row[`${row.original}`]}
            variant="default"
            data={["Worksheet", "Section Worksheet"]}
            onChange={(event) => updateData(event, "type", label, row.original)}
          />
        ),
      },
      {
        header: "Name",
        accessorKey: "name",
        Cell: ({ cell, row }) => (
          <TextInput
            placeholder="Enter"
            variant="default"
            value={cell.getValue()}
            onChange={(event) => updateData(event, "name", label, row.original)}
          />
        ),
      },
      {
        header: "Content",
        accessorKey: "content",
        Cell: ({ cell }) => (
          <>
            <Button
              variant="transparent"
              justify="space-between"
              pb={10}
              onClick={handleContentClick}
              pl={0}
            >
              Worksheet Content
            </Button>
            <ActionIcon variant="subtle">
              <IconCopy onClick={handleCopy} />
            </ActionIcon>
          </>
        ),
      },
      {
        header: "Merge",
        size: 50,
        accessorKey: "merge",
        Cell: ({ cell }) => (
          <>
            <ActionIcon variant="subtle">
              <IconCheckbox />
            </ActionIcon>
            <ActionIcon variant="subtle">
              <IconRun color="green" />
            </ActionIcon>
            <ActionIcon variant="subtle">
              <IconShare />
            </ActionIcon>
          </>
        ),
      },
    ],
    []
  );

  const tableConfig = {
    columns,
    data: getTableData(),
    ...DEFAULT_TABLE_CONFIG,
    enableRowNumbers: true,
  };
  const table = useMantineReactTable(tableConfig);

  return (
    <Box>
      <MantineReactTable table={table} />
      <Group justify="right" mt="md">
        <Button>Merge</Button>
        <Button variant="outline">Cancel</Button>
      </Group>
      <TextModal
        open={inputModalOpened}
        onClose={() => setInputModalOpened(false)}
        title="Solution"
        content={selectedInput}
      />
      <DescriptionModal
        opened={contentModalOpened}
        onClose={() => setContentModalOpened(false)}
        content={selectedContent}
      />
    </Box>
  );
};

export default AccordionTable;
