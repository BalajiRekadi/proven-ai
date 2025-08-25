import "./excelTable.css"

import { MantineReactTable, useMantineReactTable } from "mantine-react-table"
import { useMemo } from "react"

import { Box } from "@mantine/core"

import {
  COMPONENT_DEFAULTS,
  COMPONENT_DOUBLE_CHECKS,
  COMPONENT_MANUALS,
  DEFAULT_TABLE_CONFIG,
  PRODUCT_SPEC_DEFAULTS,
  PRODUCT_SPEC_DOUBLE_CHECKS,
  PRODUCT_SPEC_MANUALS,
} from "../constants/constants"

const ExcelTable = ({
  label,
  content = [],
  enableRowNumbers = true,
  handleCellEdit,
}: any) => {
  const getClassName = (header) => {
    if (label == "Components") {
      if (COMPONENT_DEFAULTS.includes(header)) {
        return "default-header"
      } else if (COMPONENT_DOUBLE_CHECKS.includes(header)) {
        return "double-check-header"
      } else if (COMPONENT_MANUALS.includes(header)) {
        return "manual-header"
      } else {
        return ""
      }
    }
    if (label == "Product Spec") {
      if (PRODUCT_SPEC_DEFAULTS.includes(header)) {
        return "default-header"
      } else if (PRODUCT_SPEC_DOUBLE_CHECKS.includes(header)) {
        return "double-check-header"
      } else if (PRODUCT_SPEC_MANUALS.includes(header)) {
        return "manual-header"
      } else {
        return ""
      }
    }
  }

  const columns = useMemo(() => {
    if (content.length < 1) return []
    let keys = Object.keys(content[0])
    keys = keys.filter((k) => k !== "_rowId")
    const cols = keys.filter(Boolean).map((key) => {
      return {
        header: key,
        Header: ({ column }) => (
          <Box className={`common ${getClassName(key)}`}>
            {column.columnDef.header}
          </Box>
        ),
        id: key,
        accessorKey: key,
      }
    })
    return cols
  }, [content])

  const tableConfig = useMemo(
    () => ({
      ...DEFAULT_TABLE_CONFIG,
      columns,
      data: content,
      enableColumnResizing: false,
      // defaultColumn: { minSize: 250, maxSize: 1500, size: 500 },
      enableRowNumbers,
      getRowId: (row) => row._rowId || row.id,
      mantineTableProps: {
        striped: true,
        withColumnBorders: true,
        highlightOnHover: false,
        sx: {
          height: "70vh",
          maxHeight: "20rem",
        },
      },
      enableEditing: true,
      editDisplayMode: "table",
      mantineEditTextInputProps: ({ table, column, row }) => ({
        //onBlur is more efficient, but could use onChange instead
        onBlur: (event) =>
          handleCellEdit(row, table, column, event.target.value),
        variant: "unstyled",
        size: "md",
      }),
    }),
    [content, columns]
  )

  const table = useMantineReactTable(tableConfig)

  return (
    <Box className="excel-table" h={"70vh"}>
      <MantineReactTable table={table} />
    </Box>
  )
}

export default ExcelTable
