import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import { useState } from "react";

import { Box, Input } from "@mantine/core";

import { DEFAULT_TABLE_CONFIG } from "../constants";
import deepClone from "../utilities/deepClone";

const InputTable = ({ data = [], updateData }) => {
  const [tableData, setTableData] = useState(data);

  const handleEdit = (event, cell) => {
    setTableData((prev) => {
      const newState = deepClone(prev);
      newState[cell.row.index][cell.column.id] = event.target.value;
      return newState;
    });
  };

  const getColumns = () => {
    const columnNames = Object.keys(tableData?.[0] || {});
    return columnNames.map((column) => {
      return {
        id: column,
        header: column,
        accessorKey: column,
        size: 40,
        Cell: ({ cell, row }) => (
          <>
            <Input
              variant="default"
              size="sm"
              value={cell.getValue()}
              onChange={(e) => handleEdit(e, cell)}
              onBlur={() => updateData(tableData)}
            />
          </>
        ),
      };
    });
  };

  const tableConfig = {
    columns: getColumns(),
    data: tableData,
    ...DEFAULT_TABLE_CONFIG,
    enablePagination: true,
    enableBottomToolbar: true,

    mantineTableProps: {
      withColumnBorders: false,
      striped: false,
      stickyHeader: true,
    },
    enableFullScreenToggle: true,
  };
  const table = useMantineReactTable(tableConfig as any);

  return (
    <Box pt={32}>
      <MantineReactTable table={table} />
    </Box>
  );
};

export default InputTable;
