import React, { useMemo, useState } from "react";
import {
  Button,
  Group,
  Box,
  Select,
  ActionIcon,
  TextInput,
  Flex,
  Checkbox,
} from "@mantine/core";
import {
  IconRun,
  IconCopy,
  IconShare,
  IconFileFilled,
} from "@tabler/icons-react";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import { DEFAULT_TABLE_CONFIG } from "../constants";
import TextModal from "./TextModal";
import { useToast } from "./toast/useToast";

const AccordionTable = ({
  data = [],
  label = "",
  updateData,
  saveTextModalContent = () => {},
  onRun,
}) => {
  const [contentModalOpened, setContentModalOpened] = useState(false);
  const [inputModalOpened, setInputModalOpened] = useState(false);
  const [selectedContent, setSelectedContent] = useState("");
  // TODO: this state is redundant, derieve from selectedRow
  const [selectedInput, setSelectedInput] = useState("");
  const [selectedRow, setSelectedRow] = useState({});
  const toast = useToast();

  const handleCopy = (content) => {
    navigator.clipboard
      .writeText(JSON.stringify(content))
      .then(() => {
        toast.info("Content copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const handleContentClick = (content) => {
    setSelectedContent(content);
    setContentModalOpened(true);
  };

  const getTableData = () => {
    const tableData = [];
    if (data.forEach) {
      data.forEach((item) => {
        const keys = Object.keys(item);
        keys.forEach((key) => {
          if (key !== "task_id") {
            tableData.push({
              solution: key,
              input: item[key],
              name: item[key].name,
              type: item[key].type,
              content: item[key].content,
              disableWorksheet: true,
            });
          }
        });
      });
    }
    return tableData;
  };

  const handleInputIconClick = (row, input) => {
    setSelectedInput(input.value);
    setSelectedRow(row);
    setInputModalOpened(true);
  };

  const handleRunClick = (label, row) => {
    onRun(label, row.original);
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
        Cell: ({ row, cell }) => (
          <ActionIcon
            variant="subtle"
            onClick={() => handleInputIconClick(row.original, cell.getValue())}
          >
            <IconFileFilled />
          </ActionIcon>
        ),
      },
      {
        header: "Type",
        accessorKey: "type",
        Cell: ({ cell, row }) => (
          <Select
            placeholder="Select"
            value={cell.getValue()}
            variant="default"
            data={["Worksheet", "Section Worksheet", "Section"]}
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
          <Flex align={"center"} gap={4}>
            <Button
              variant="transparent"
              justify="space-between"
              onClick={() => handleContentClick(cell.getValue())}
              pl={8}
              pr={6}
              disabled={!cell.getValue()}
            >
              Worksheet Content
            </Button>
            <ActionIcon
              variant="subtle"
              disabled={!cell.getValue()}
              onClick={() => handleCopy(cell.getValue())}
              size={36}
            >
              <IconCopy />
            </ActionIcon>
          </Flex>
        ),
      },
      {
        header: "Merge",
        size: 50,
        accessorKey: "merge",
        Cell: ({ row }) => (
          <>
            <ActionIcon variant="subtle">
              <Checkbox label="" />
            </ActionIcon>
            <ActionIcon
              variant="subtle"
              onClick={() => handleRunClick(label, row)}
            >
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

  const handleSaveTextModalContent = (content, property) => {
    saveTextModalContent(content, selectedRow, label, property);
  };

  return (
    <>
      <Box>
        <MantineReactTable table={table} />
        <Group justify="right" mt="md">
          <Button variant="outline">Cancel</Button>
          <Button>Merge</Button>
        </Group>
        <TextModal
          open={inputModalOpened}
          onClose={() => setInputModalOpened(false)}
          title="Solution"
          content={selectedInput}
          onSaveContent={(e) => handleSaveTextModalContent(e, "value")}
        />
        <TextModal
          open={contentModalOpened}
          onClose={() => setContentModalOpened(false)}
          title="Description"
          content={selectedContent}
          onSaveContent={(e) => handleSaveTextModalContent(e, "content")}
        />
      </Box>
    </>
  );
};

export default AccordionTable;
