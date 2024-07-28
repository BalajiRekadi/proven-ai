import {
  ActionIcon,
  Box,
  Flex,
  Text,
  Popover,
  TextInput,
  Paper,
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
import { downloadJSONFromObj } from "../../../../../shared/utilities";

const AnalysisAccordionTable = ({
  data = {},
  label = "",
  updateData,
  onRun,
}) => {
  const [showRunData, setShowRunData] = useState(false);
  const [inputModalOpened, setInputModalOpened] = useState(false);
  const [selectedRunDataTable, setSelectedRunDataTable] = useState("");
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
    const keys = Object.keys(data);
    keys.forEach((key) => {
      tableData.push({
        solution: key,
        input: data[key],
        content: data[key].content,
        disableWorksheet: true,
        name: data[key].name,
        stage: data[key].stage,
        specType: data[key].specType,
        batchLink: data[key].batchLink,
        batchType: data[key].batchType,
        runData: {},
      });
    });
    return tableData;
  };

  const handleInputIconClick = (input) => {
    setSelectedInput(input.value);
    setInputModalOpened(true);
  };

  const handleRunClick = (label, row) => {
    onRun(label, row.original);
  };

  const onView = (label, key, row) => {
    if (row.original.input?.runData) {
      setSelectedRunDataTable(row.original.input?.runData[key]);
      setSelectedRunDataTableLabel(runDataTables[key]);
      setShowRunData(true);
    }
  };

  const onDownload = (key, row) => {
    if (row.original.input?.runData) {
      downloadJSONFromObj(row.original.input?.runData[key], key);
    }
  };

  const disableStackIcon = (data) => {
    return !data.input?.runData;
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
            onChange={(event) =>
              updateData(event, "stage", label, row.original)
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
              updateData(event, "specType", label, row.original)
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
              updateData(event, "batchLink", label, row.original)
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
              updateData(event, "batchType", label, row.original)
            }
          />
        ),
      },
      {
        header: "Actions",
        Cell: ({ row }) => (
          <Flex align={"center"} gap={24}>
            <ActionIcon variant="subtle">
              <IconRun
                color={"green"}
                onClick={() => handleRunClick(label, row)}
              />
            </ActionIcon>
            <Popover width={200} position="top" withArrow shadow="md">
              <Popover.Target>
                <ActionIcon
                  variant="subtle"
                  disabled={disableStackIcon(row.original)}
                >
                  <IconStackPop onClick={undefined} />
                </ActionIcon>
              </Popover.Target>
              <Popover.Dropdown>
                {Object.keys(runDataTables).map((key) => (
                  <>
                    <Paper>
                      <Text>{runDataTables[key]}</Text>
                      <Box>
                        <ActionIcon variant="subtle">
                          <IconEyeFilled
                            size={20}
                            onClick={() => onView(runDataTables[key], key, row)}
                          />
                        </ActionIcon>
                        <ActionIcon variant="subtle">
                          <IconCircleArrowDownFilled
                            size={20}
                            onClick={() => onDownload(key, row)}
                          />
                        </ActionIcon>
                      </Box>
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
    antineTableProps: {
      sx: {
        tableLayout: "fixed",
      },
    },
  };
  const table = useMantineReactTable(tableConfig);

  return (
    <>
      <Box>
        <MantineReactTable table={table} />
      </Box>
      <TextModal
        open={inputModalOpened}
        onClose={() => setInputModalOpened(false)}
        title="Solution"
        content={selectedInput}
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
