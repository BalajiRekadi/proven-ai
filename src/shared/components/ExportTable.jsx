import { ActionIcon } from "@mantine/core"
import { MantineReactTable, useMantineReactTable } from "mantine-react-table"
import { useMemo } from "react"
import { IconAlertCircle, IconFileDownload } from "@tabler/icons-react"
import { DEFAULT_TABLE_CONFIG } from "../constants/constants"
import { downloadFile } from "../utilities"

// TODO: This and TableViewModal are almost same. Define a common Component
const ExportTable = ({
  data,
  rowSelection = [],
  setRowSelection = (e) => {},
  enableRowSelection = false,
}) => {
  const foo = (e) => {
    setRowSelection(e)
  }

  const onDownload = (row) => {
    // downloadDocx(row.content, row.name);
    downloadFile({
      data: row.content,
      fileName: `${row.name}.txt`,
      fileType: "text",
    })
  }

  const columns = useMemo(
    () => [
      {
        header: "Code",
        accessorKey: "code",
        id: "code",
        size: 30,
      },
      {
        header: "Specification",
        accessorKey: "specification",
        id: "specification",
        size: 30,
      },
      {
        header: "Method",
        accessorKey: "methodId",
        id: "methodId",
        size: 30,
      },
      {
        header: "Name",
        accessorKey: "name",
        id: "name",
        size: 30,
      },
      {
        header: "Type",
        accessorKey: "type",
        id: "type",
        size: 30,
      },
      {
        size: 30,
        header: "Content",
        accessorKey: "content",
        id: "content",
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
        id: "exceptionReport",
        Cell: ({ cell }) => (
          <IconAlertCircle
            size={20}
            style={{ marginRight: "8px", color: "var(--secondary)" }}
          />
        ),
      },
    ],
    []
  )

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
  }
  const table = useMantineReactTable(tableConfig)

  return <MantineReactTable table={table} />
}

export default ExportTable
