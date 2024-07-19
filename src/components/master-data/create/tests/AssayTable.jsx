import { ActionIcon, Box } from "@mantine/core";
import React, { useMemo } from "react";
import csvLogo from "../../../../assets/csv.png";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";

const AssayTable = () => {
  const data = [
    {
      testCode: "Mobile Phase",
      output: "csv",
      actions: ["run"],
    },
  ];

  const columns = useMemo(
    () => [
      {
        header: "Test Code",
        accessorKey: "testCode",
        size: 50,
      },
      {
        header: "Output",
        size: 50,
        accessorKey: "output",
        Cell: ({ cell }) => (
          <ActionIcon variant="subtle" aria-label="Settings">
            <img src={csvLogo} className="logo" style={{ width: "16px" }} />
          </ActionIcon>
        ),
      },
      {
        header: "",
        size: 50,
        accessorKey: "actions",
        Cell: ({ cell }) => (
          <ActionIcon variant="subtle" aria-label="Settings">
            <img src={csvLogo} className="logo" style={{ width: "16px" }} />
          </ActionIcon>
        ),
      },
    ],
    []
  );

  const table = useMantineReactTable({
    columns,
    data,
    initialState: { density: "xs" },
    enableRowNumbers: true,
    enableTopToolbar: false,
    enableBottomToolbar: false,
    enableRowSelection: false,
    enableColumnOrdering: false,
    enableGlobalFilter: false,
    enableColumnActions: false,
    enableColumnFilters: false,
    enablePagination: false,
    enableSorting: false,
  });

  return (
    <Box w={"20rem"}>
      <MantineReactTable table={table} />
    </Box>
  );
};

export default AssayTable;
