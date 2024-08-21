import React, { useMemo, useState } from "react";
import { Button, Box, ActionIcon, TextInput, Flex } from "@mantine/core";
import { IconRun, IconCopy, IconFileFilled } from "@tabler/icons-react";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import { DEFAULT_TABLE_CONFIG } from "../constants";
import TextModal from "./TextModal";
import { useToast } from "./toast/useToast";
import TableViewModal from "./TableViewModal";

const TestAccordionTable = ({
  data = {},
  label = "",
  updateData,
  saveTextModalContent = () => {},
  onRun,
}) => {
  const [showRunData, setShowRunData] = useState(false);
  const [inputModalOpened, setInputModalOpened] = useState(false);
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

  const handleContentClick = (row) => {
    setSelectedRow(row);
    setShowRunData(true);
  };

  const getTableData = () => {
    const tableData = [];
    tableData.push({
      testCode: data.task_id,
      testName: label,
      input: data.calculation,
      TestCategory: data.TestCategory,
      TestTechnique: data.TestTechnique,
      TestType: data.TestType,
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
        accessorKey: "TestCategory",
        Cell: ({ cell, row }) => (
          <TextInput
            placeholder="Enter"
            variant="default"
            value={cell.getValue()}
            onChange={(event) =>
              updateData(event, "TestCategory", label, row.original)
            }
          />
        ),
      },
      {
        header: "Test Technique",
        accessorKey: "TestTechnique",
        Cell: ({ cell, row }) => (
          <TextInput
            placeholder="Enter"
            variant="default"
            value={cell.getValue()}
            onChange={(event) =>
              updateData(event, "TestTechnique", label, row.original)
            }
          />
        ),
      },
      {
        header: "Test Type",
        accessorKey: "TestType",
        Cell: ({ cell, row }) => (
          <TextInput
            placeholder="Enter"
            variant="default"
            value={cell.getValue()}
            onChange={(event) =>
              updateData(event, "TestType", label, row.original)
            }
          />
        ),
      },
      {
        header: "Content",
        accessorKey: "content",
        Cell: ({ row, cell }) => (
          <Flex align={"center"} gap={4}>
            <Button
              variant="transparent"
              justify="space-between"
              onClick={() => handleContentClick(row.original)}
              pl={8}
              pr={6}
              disabled={!cell.getValue()}
            >
              Test Details
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
        <TableViewModal
          open={showRunData}
          onClose={() => setShowRunData(false)}
          label={selectedRow.testName}
          content={selectedRow.content}
          enableRowNumbers={false}
        />
      </Box>
    </>
  );
};

export default TestAccordionTable;
