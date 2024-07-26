import { ActionIcon, Box, Flex, TextInput } from "@mantine/core";
import { IconFileFilled, IconRun } from "@tabler/icons-react";
import React from "react";
import { useMemo, useState } from "react";
import { DEFAULT_TABLE_CONFIG } from "../../../../../shared/constants";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";

const AnalysisAccordionTable = ({
  data = [],
  label = "",
  updateData,
  onRun,
}) => {
  const [contentModalOpened, setContentModalOpened] = useState(false);
  const [inputModalOpened, setInputModalOpened] = useState(false);
  const [selectedContent, setSelectedContent] = useState("");
  const [selectedInput, setSelectedInput] = useState("");

  const handleContentClick = (content) => {
    setSelectedContent(content);
    setContentModalOpened(true);
  };

  //   const getTableData = () => {
  //     const tableData = [];
  //     data.forEach((item) => {
  //       const keys = Object.keys(item);
  //       keys.forEach((key) => {
  //         tableData.push({
  //           solution: key,
  //           input: item[key],
  //           content: item[key].content,
  //           disableWorksheet: true,
  //         });
  //       });
  //     });
  //     return tableData;
  //   };

  const handleInputIconClick = (input) => {
    setSelectedInput(input.value);
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
        Cell: ({ cell }) => (
          <ActionIcon variant="subtle">
            <IconFileFilled
              onClick={() => handleInputIconClick(cell.getValue())}
            />
          </ActionIcon>
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
        header: "Stage",
        accessorKey: "stage",
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
        header: "Spec Type",
        accessorKey: "specType",
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
        header: "Batch Link",
        accessorKey: "batchLink",
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
        header: "Batch Type",
        accessorKey: "batchType",
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
        header: "Actions",
        accessorKey: "actions",
        Cell: ({ cell, row }) => (
          <Flex align={"center"}>
            <ActionIcon variant="subtle">
              <IconRun
                color={"green"}
                onClick={() => handleRunClick(label, row.original)}
              />
            </ActionIcon>
            <ActionIcon variant="subtle">
              <IconRun onClick={() => {}} />
            </ActionIcon>
          </Flex>
        ),
      },
    ],
    []
  );

  const tableConfig = {
    columns,
    data,
    ...DEFAULT_TABLE_CONFIG,
    enableRowNumbers: true,
  };
  const table = useMantineReactTable(tableConfig);

  return (
    <Box>
      <MantineReactTable table={table} />
    </Box>
  );
};

export default AnalysisAccordionTable;
