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

const TestAccordionTable = ({
  data = {},
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
    tableData.push({
      testCode: data.task_id,
      testName: label,
      input: data.calculation,
      category: data.category,
      technique: data.technoque,
      type: data.type,
      content: data.content,
      disableWorksheet: true,
    });
    return tableData;
  };

  const handleInputIconClick = (row, input) => {
    setSelectedInput(input[0]);
    setSelectedRow(row);
    setInputModalOpened(true);
  };

  const handleRunClick = (label, row) => {
    onRun(label, row.original);
  };

  const columns = useMemo(
    () => [
      {
        header: "Test Code",
        accessorKey: "testCode",
      },
      {
        header: "Test Name",
        accessorKey: "testName",
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
        header: "Test Category",
        accessorKey: "category",
        Cell: ({ cell, row }) => (
          <TextInput
            placeholder="Enter"
            variant="default"
            value={cell.getValue()}
            onChange={(event) =>
              updateData(event, "category", label, row.original)
            }
          />
        ),
      },
      {
        header: "Test Technique",
        accessorKey: "technique",
        Cell: ({ cell, row }) => (
          <TextInput
            placeholder="Enter"
            variant="default"
            value={cell.getValue()}
            onChange={(event) =>
              updateData(event, "technique", label, row.original)
            }
          />
        ),
      },
      {
        header: "Test Type",
        accessorKey: "type",
        Cell: ({ cell, row }) => (
          <TextInput
            placeholder="Enter"
            variant="default"
            value={cell.getValue()}
            onChange={(event) => updateData(event, "type", label, row.original)}
          />
        ),
      },
      {
        header: "Content",
        accessorKey: "content",
        Cell: ({ cell }) => (
          <Flex align={"center"}>
            <Button
              variant="transparent"
              justify="space-between"
              onClick={() => handleContentClick(cell.getValue())}
              pl={4}
              disabled={!cell.getValue()}
            >
              Test Details
            </Button>
            <ActionIcon
              variant="subtle"
              disabled={!cell.getValue()}
              onClick={() => handleCopy(cell.getValue())}
            >
              <IconCopy />
            </ActionIcon>
          </Flex>
        ),
      },
      {
        header: "Run",
        size: 50,
        accessorKey: "run",
        Cell: ({ row }) => (
          <>
            <ActionIcon
              variant="subtle"
              onClick={() => handleRunClick(label, row)}
            >
              <IconRun color="green" />
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
    const value = property == "calculation" ? [content] : content;
    saveTextModalContent(value, selectedRow, label, property);
  };

  return (
    <>
      <Box>
        <MantineReactTable table={table} />
        <TextModal
          open={inputModalOpened}
          onClose={() => setInputModalOpened(false)}
          title="Solution"
          content={selectedInput}
          onSaveContent={(e) => handleSaveTextModalContent(e, "calculation")}
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

export default TestAccordionTable;
