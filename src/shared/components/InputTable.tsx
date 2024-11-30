import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import { useState } from "react";

import { ActionIcon, Button, Flex, Input } from "@mantine/core";
import { IconPlaylistAdd, IconX } from "@tabler/icons-react";

import { DEFAULT_TABLE_CONFIG } from "../constants/constants";
import deepClone from "../utilities/deepClone";

const InputTable = ({ data = [], updateData }) => {
  const [tableData, setTableData] = useState(data);
  const columnNames = Object.keys(data?.[0] || {});

  const handleEdit = (event, cell) => {
    setTableData((prev) => {
      const newState = deepClone(prev);
      newState[cell.row.index][cell.column.id] = event.target.value;
      return newState;
    });
  };

  const handleDelete = (row) => {
    setTableData((prev) => {
      const newState = deepClone(prev);
      newState.splice(row.index, 1);
      return newState;
    });
  };

  const getColumns = () => {
    const columns = columnNames.map((column) => {
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
    columns.push({
      id: "delete",
      header: "",
      size: 20,
      Cell: ({ row }) => (
        <ActionIcon
          variant="light"
          color="var(--error)"
          onClick={() => {
            handleDelete(row);
          }}
        >
          <IconX color="var(--error)" />
        </ActionIcon>
      ),
    });
    return columns;
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

  const handleAdd = () => {
    setTableData((prev) => {
      const item = {};
      columnNames.forEach((key) => {
        item[key] = "";
      });
      return [item, ...deepClone(prev)];
    });
  };

  return (
    <>
      <Flex justify={"flex-end"} pb={16}>
        <Button leftSection={<IconPlaylistAdd />} onClick={handleAdd}>
          Add
        </Button>
      </Flex>
      <MantineReactTable table={table} />
    </>
  );
};

export default InputTable;
