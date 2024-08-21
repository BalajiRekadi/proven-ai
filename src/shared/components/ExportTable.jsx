import { ActionIcon } from "@mantine/core";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import { useMemo } from "react";
import { IconAlertCircle, IconFileDownload } from "@tabler/icons-react";
import { DEFAULT_TABLE_CONFIG } from "../constants";
import { downloadDocx, downloadFile } from "../utilities";

// TODO: This and TableViewModal are almost same. Define a common Component
const ExportTable = ({
  data,
  rowSelection = [],
  setRowSelection = () => {},
  enableRowSelection = false,
}) => {
  const foo = (e) => {
    setRowSelection(e);
  };

  const onDownload = (row) => {
    // downloadDocx(row.content, row.name);
    downloadFile({
      data: row.content,
      fileName: `${row.name}.txt`,
      fileType: "text",
    });
  };

  const columns = useMemo(
    () => [
      {
        header: "Code",
        accessorKey: "code",
        size: 30,
      },
      {
        header: "Specification",
        accessorKey: "specification",
        size: 30,
      },
      {
        header: "Method",
        accessorKey: "methodId",
        size: 30,
      },
      {
        header: "Name",
        accessorKey: "name",
        size: 30,
      },
      {
        header: "Type",
        accessorKey: "type",
        size: 30,
      },
      {
        size: 30,
        header: "Content",
        accessorKey: "content",
        Cell: ({ row }) => (
          <ActionIcon variant="subtle" onClick={() => onDownload(row.original)}>
            <IconFileDownload />
          </ActionIcon>
        ),
      },
      {
        size: 30,
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
    mantineTableBodyRowProps: ({ row }) => ({
      onClick: row.getToggleSelectedHandler(),
      sx: { cursor: "pointer" },
    }),
    enableRowNumbers: !enableRowSelection,
    enableStickyHeader: true,
    onRowSelectionChange: foo,
    state: { rowSelection },
    mantineTableProps: {
      striped: true,
      stickyHeader: true,
      stickyHeaderOffset: 60,
    },
    mantineTableContainerProps: { sx: { maxHeight: "200px" } },
  };
  const table = useMantineReactTable(tableConfig);

  return <MantineReactTable table={table} />;
};

export default ExportTable;
