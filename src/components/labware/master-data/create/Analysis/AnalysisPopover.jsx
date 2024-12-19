import {
  Flex,
  Group,
  Paper,
  Text,
  Popover,
  ActionIcon,
  Box,
} from "@mantine/core";
import { IconCircleArrowDownFilled, IconEyeFilled } from "@tabler/icons-react";
import {
  convertObjDataToArray,
  downloadCSVFromArray,
  downloadXLSX,
} from "../../../../../shared/utilities";
import { useState } from "react";
import { TableViewModal } from "../../../../../shared/components";

const AnalysisPopover = ({ tables }) => {
  const [showRunData, setShowRunData] = useState(false);
  const [selectedRunDataTable, setSelectedRunDataTable] = useState([]);
  const [selectedRunDataTableLabel, setSelectedRunDataTableLabel] =
    useState("");

  const runDataTables = {
    merged_components_table: "Components",
    merged_analysis_table: "Analysis",
    merged_prod_gr_st_table: "Product Grade Stage",
    merged_prod_spec_table: "Product Spec",
  };

  const onView = (tableName) => {
    const data = convertObjDataToArray(tables[tableName]);
    setSelectedRunDataTable(data);
    setSelectedRunDataTableLabel(runDataTables[tableName]);
    setShowRunData(true);
  };

  const onDownload = (tableName) => {
    const data = convertObjDataToArray(tables[tableName]);
    downloadXLSX(data, runDataTables[tableName]);
  };

  return (
    <>
      <Popover.Dropdown>
        {Object.keys(runDataTables).map((key) => (
          <Box key={key}>
            <Paper withBorder shadow="xs" w={320} p={8} m={8}>
              <Flex justify={"space-between"}>
                <Text>{runDataTables[key]}</Text>
                <Group>
                  <ActionIcon variant="subtle" onClick={() => onView(key)}>
                    <IconEyeFilled size={20} />
                  </ActionIcon>
                  <ActionIcon variant="subtle" onClick={() => onDownload(key)}>
                    <IconCircleArrowDownFilled size={20} />
                  </ActionIcon>
                </Group>
              </Flex>
            </Paper>
          </Box>
        ))}
      </Popover.Dropdown>
      <TableViewModal
        open={showRunData}
        onClose={() => setShowRunData(false)}
        label={selectedRunDataTableLabel}
        content={selectedRunDataTable}
        showAsExcel={true}
      />
    </>
  );
};

export default AnalysisPopover;
