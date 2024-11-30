import {
  ActionIcon,
  Box,
  Flex,
  Text,
  Popover,
  TextInput,
  Paper,
  Group,
  Select,
} from "@mantine/core";
import {
  IconCircleArrowDownFilled,
  IconEyeFilled,
  IconFileFilled,
  IconRun,
  IconStackPop,
} from "@tabler/icons-react";
import { useMemo, useState } from "react";
import {
  BATCH_LINKS,
  BATCH_TEMPLATES,
  DEFAULT_TABLE_CONFIG,
  SPEC_TYPES,
  STAGE_OPTIONS,
} from "../../../../../shared/constants/constants";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import { TableViewModal, TextModal } from "../../../../../shared/components";
import { downloadCSVFromArray } from "../../../../../shared/utilities";
import "./analysis-accordion-table.css";

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
  const [selectedInput, setSelectedInput] = useState(""); // TODO: redundant state, can be derived from selectedRow?
  const [selectedRow, setSelectedRow] = useState("");

  // TODO: is there any use for this?
  const STAGES = useMemo(() => STAGE_OPTIONS, []);
  const SPECTYPES = useMemo(() => SPEC_TYPES, []);
  const BATCHLINKS = useMemo(() => BATCH_LINKS, []);
  const BATCHTEMPLATES = useMemo(() => BATCH_TEMPLATES, []);

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

  const handleInputIconClick = (input, row) => {
    setSelectedInput(input);
    setSelectedRow(row);
    setInputModalOpened(true);
  };

  const handleRunClick = (label, row) => {
    onRun(label, row, index);
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
    const item = data.runResults[row.index]?.[0];
    if (item) {
      const data = formatRunData(item[key]);
      setSelectedRunDataTable(data);
      setSelectedRunDataTableLabel(runDataTables[key]);
      setShowRunData(true);
    }
  };

  const onDownload = (key, row) => {
    const item = data.runResults[row.index]?.[0];
    if (item) {
      const data = formatRunData(item[key]);
      downloadCSVFromArray(data, runDataTables[key]);
    }
  };

  const disableStackIcon = (row) => {
    return data.runResults ? !data.runResults?.[row.index]?.length : true;
  };

  const columns = useMemo(
    () => [
      {
        header: "Solution",
        accessorKey: "solution",
        id: "solution",
        size: 50,
      },
      {
        header: "Input",
        size: 20,
        accessorKey: "input",
        id: "input",
        Cell: ({ cell, row }) => (
          <ActionIcon
            variant="subtle"
            onClick={() => handleInputIconClick(cell.getValue(), row)}
          >
            <IconFileFilled />
          </ActionIcon>
        ),
      },
      {
        header: "Name",
        accessorKey: "name",
        id: "name",
        Cell: ({ cell, row }) => (
          <TextInput
            placeholder="Enter"
            variant="default"
            value={cell.getValue()}
            onChange={(event) =>
              updateData(event, "analysisNames", label, row, index)
            }
          />
        ),
      },
      {
        header: "Stage",
        accessorKey: "stage",
        id: "stage",
        Cell: ({ cell, row }) => (
          <Select
            placeholder="Select value"
            data={STAGES}
            value={cell.getValue()}
            onChange={(event) => updateData(event, "stages", label, row, index)}
            limit={25}
            searchable
          />
        ),
      },
      {
        header: "Spec Type",
        accessorKey: "specType",
        id: "specType",
        Cell: ({ cell, row }) => (
          <Select
            placeholder="Select value"
            data={SPECTYPES}
            value={cell.getValue()}
            onChange={(event) =>
              updateData(event, "specTypes", label, row, index)
            }
            limit={25}
            searchable
          />
        ),
      },
      {
        header: "Batch Link",
        accessorKey: "batchLink",
        id: "batchLink",
        Cell: ({ cell, row }) => (
          <Select
            placeholder="Select value"
            data={BATCHLINKS}
            value={cell.getValue()}
            onChange={(event) =>
              updateData(event, "batchLinks", label, row, index)
            }
            limit={25}
            searchable
          />
        ),
      },
      {
        header: "Batch Template",
        accessorKey: "batchType",
        id: "batchType",
        Cell: ({ cell, row }) => (
          <Select
            placeholder="Select value"
            data={BATCHTEMPLATES}
            value={cell.getValue()}
            onChange={(event) =>
              updateData(event, "batchTypes", label, row, index)
            }
            limit={25}
            searchable
          />
        ),
      },
      {
        header: "Actions",
        id: "actions",
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
                <ActionIcon variant="subtle" disabled={disableStackIcon(row)}>
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
                            onClick={() => onView(key, row)}
                          >
                            <IconEyeFilled size={20} />
                          </ActionIcon>
                          <ActionIcon
                            variant="subtle"
                            onClick={() => onDownload(key, row)}
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
        onSaveContent={(value) =>
          updateData(
            { target: { value } },
            "paragraphs",
            label,
            selectedRow,
            index
          )
        }
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
