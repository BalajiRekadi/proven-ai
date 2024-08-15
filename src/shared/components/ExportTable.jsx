import { ActionIcon } from "@mantine/core";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import { useMemo } from "react";
import { IconAlertCircle, IconFileDownload } from "@tabler/icons-react";
import { DEFAULT_TABLE_CONFIG } from "../constants";

const ExportTable = ({
  data,
  rowSelection,
  setRowSelection,
  enableRowSelection = false,
}) => {
  console.log("xxx", rowSelection);
  const foo = (e) => {
    setRowSelection(e);
  };

  const columns = useMemo(
    () => [
      {
        header: "Code",
        accessorKey: "code",
      },
      {
        header: "Specification",
        accessorKey: "specification",
      },
      {
        header: "Method",
        accessorKey: "methodId",
      },
      {
        header: "Name",
        accessorKey: "name",
      },
      {
        header: "Type",
        accessorKey: "type",
      },
      {
        header: "Content",
        accessorKey: "content",
        Cell: ({ cell }) => (
          <ActionIcon variant="subtle">
            <IconFileDownload />
          </ActionIcon>
        ),
      },
      {
        header: "Exception Report",
        accessorKey: "exceptionReport",
        Cell: ({ cell }) => (
          <IconAlertCircle
            size={20}
            style={{ marginRight: "8px", color: "var(--secondary)" }}
          />
        ),
      },
    ],
    []
  );

  const tableConfig = {
    columns,
    data,
    ...DEFAULT_TABLE_CONFIG,
    enableRowSelection,
    enableRowNumbers: !enableRowSelection,
    // getRowId: (originalRow) => originalRow,
    onRowSelectionChange: foo,
    state: { rowSelection },
    mantineTableProps: {
      striped: true,
    },
  };
  const table = useMantineReactTable(tableConfig);

  return <MantineReactTable table={table} />;
};

export default ExportTable;
