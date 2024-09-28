import {
  ActionIcon,
  Box,
  Flex,
  Text,
  Popover,
  TextInput,
  Paper,
  Group,
} from "@mantine/core";
import {
  IconCircleArrowDownFilled,
  IconEyeFilled,
  IconFileFilled,
  IconRun,
  IconStackPop,
} from "@tabler/icons-react";
import React from "react";
import { useMemo, useState } from "react";
import { DEFAULT_TABLE_CONFIG } from "../../../../../shared/constants";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import { TableViewModal, TextModal } from "../../../../../shared/components";
import { downloadCSVFromArray } from "../../../../../shared/utilities";
import "./analysis-accordion-table.css";
import deepClone from "../../../../../shared/utilities/deepClone";

const AnalysisAccordionTable = ({
  index,
  data = {},
  label = "",
  updateData,
  onRun,
}) => {
  const [showRunData, setShowRunData] = useState(false);
  const [inputModalOpened, setInputModalOpened] = useState(false);
  const [selectedRunDataTable, setSelectedRunDataTable] = useState([]);
  const [selectedRunDataTableLabel, setSelectedRunDataTableLabel] =
    useState("");
  const [selectedInput, setSelectedInput] = useState("");

  const runDataTables = {
    components_table: "Components",
    analysis_table: "Analysis",
    prod_gr_st_table: "Product Grade Stage",
    prod_spec_table: "Product Spec",
  };

  const getTableData = () => {
    const tableData = [];
    data.subHeadings.forEach((item, index) => {
      tableData.push({
        solution: item,
        input: data.paragraphs[index],
        content: data.runResults[index],
        name: data.analysisNames[index],
        stage: data.stages[index],
        specType: data.specTypes[index],
        batchLink: data.batchLinks[index],
        batchType: data.batchTypes[index],
      });
    });
    return tableData;
  };

  const handleInputIconClick = (input) => {
    setSelectedInput(input);
    setInputModalOpened(true);
  };

  const handleRunClick = (label, row) => {
    onRun(label, row.original, index);
  };

  const formatRunData = (data) => {
    const keys = Object.keys(data);
    const length = data[keys[0]].length;
    const formattedData = [];
    for (let i = 0; i < length; i++) {
      const item = {};
      keys.forEach((key) => {
        item[key] = data[key][i];
      });
      formattedData.push(item);
    }
    return formattedData;
  };

  const onView = (key, row) => {
    const fieldIndex = data.subHeadings.findIndex((i) => i == row.solution);
    const item = data.runData[fieldIndex];
    if (item) {
      const data = formatRunData(item[key]);
      setSelectedRunDataTable(data);
      setSelectedRunDataTableLabel(runDataTables[key]);
      setShowRunData(true);
    }
  };

  const onDownload = (key, row) => {
    const fieldIndex = data.subHeadings.findIndex((i) => i == row.solution);
    const item = data.runData[fieldIndex];
    if (item) {
      const data = formatRunData(item[key]);
      downloadCSVFromArray(data, runDataTables[key]);
    }
    // const data = formatRunData(row.original.input?.runData[key]);
    // downloadCSVFromArray(data, runDataTables[key]);
  };

  const disableStackIcon = (row) => {
    const fieldIndex = data.subHeadings.findIndex((i) => i == row.solution);
    return data.runData ? !data.runData[fieldIndex] : true;
  };

  const columns = useMemo(
    () => [
      {
        header: "Solution",
        accessorKey: "solution",
        size: 50,
      },
      {
        header: "Input",
        size: 20,
        accessorKey: "input",
        Cell: ({ cell }) => (
          <ActionIcon
            variant="subtle"
            onClick={() => handleInputIconClick(cell.getValue())}
          >
            <IconFileFilled />
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
            onChange={(event) =>
              updateData(event, "analysisNames", label, row.original, index)
            }
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
            onChange={(event) =>
              updateData(event, "stages", label, row.original, index)
            }
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
            onChange={(event) =>
              updateData(event, "specTypes", label, row.original, index)
            }
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
            onChange={(event) =>
              updateData(event, "batchLinks", label, row.original, index)
            }
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
            onChange={(event) =>
              updateData(event, "batchTypes", label, row.original, index)
            }
          />
        ),
      },
      {
        header: "Actions",
        Cell: ({ row }) => (
          <Flex align={"center"} gap={24}>
            <ActionIcon
              variant="subtle"
              onClick={() => handleRunClick(label, row)}
            >
              <IconRun color={"green"} />
            </ActionIcon>
            <Popover position="top" withArrow shadow="md">
              <Popover.Target>
                <ActionIcon
                  variant="subtle"
                  disabled={disableStackIcon(row.original)}
                >
                  <IconStackPop />
                </ActionIcon>
              </Popover.Target>
              <Popover.Dropdown>
                {Object.keys(runDataTables).map((key) => (
                  <>
                    <Paper withBorder shadow="xs" w={320} p={8} m={8}>
                      <Flex justify={"space-between"}>
                        <Text>{runDataTables[key]}</Text>
                        <Group>
                          <ActionIcon
                            variant="subtle"
                            onClick={() => onView(key, row.original)}
                          >
                            <IconEyeFilled size={20} />
                          </ActionIcon>
                          <ActionIcon
                            variant="subtle"
                            onClick={() => onDownload(key, row.original)}
                          >
                            <IconCircleArrowDownFilled size={20} />
                          </ActionIcon>
                        </Group>
                      </Flex>
                    </Paper>
                  </>
                ))}
              </Popover.Dropdown>
            </Popover>
          </Flex>
        ),
      },
    ],
    [data]
  );

  const tableConfig = {
    columns,
    data: getTableData(),
    ...DEFAULT_TABLE_CONFIG,
    enableRowNumbers: true,
    enableStickyHeader: true,
    mantineTableProps: {
      sx: {
        maxHeight: "30rem",
      },
    },
  };
  const table = useMantineReactTable(tableConfig);

  return (
    <>
      <Box mah={"30rem"} className="analysis-table">
        <MantineReactTable table={table} />
      </Box>
      <TextModal
        open={inputModalOpened}
        onClose={() => setInputModalOpened(false)}
        title="Solution"
        content={selectedInput}
        // onSaveContent={updateData(event, "batchLinks", label, row.original, index)}
      />
      <TableViewModal
        open={showRunData}
        onClose={() => setShowRunData(false)}
        label={selectedRunDataTableLabel}
        content={selectedRunDataTable}
      />
    </>
  );
};

export default AnalysisAccordionTable;
