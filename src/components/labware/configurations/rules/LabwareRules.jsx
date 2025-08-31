// @ts-ignore
import React, { useRef, useState } from "react"
import { Box, Button, Flex, Group, Select, Text, Title } from "@mantine/core"
import { RULES_FOR } from "../../../../shared/constants/constants"
import { useRules } from "../../../../api/hooks"
import { ExcelTable } from "../../../../shared/components"
import useSaveRules from "../../../../api/hooks/useSaveRules"
import { IconDeviceIpadHorizontalCog } from "@tabler/icons-react"

function LabwareRules() {
  const [type, setType] = useState("")
  const { data } = useRules(type)

  const [tableData, setTableData] = useState([])

  const { saveRules } = useSaveRules()

  React.useEffect(() => {
    if (data) {
      const freshData = data.map((row, index) => ({
        ...row,
        _rowId: new Date().getTime(), // unique per type
      }))
      setTableData(freshData)
    }
  }, [data, type])

  const handleCellEdit = (row, table, column, newValue) => {
    setTableData((prev) => {
      const updated = [...prev]
      updated[row.index] = {
        ...updated[row.index],
        [column.id]: newValue,
      }
      return updated
    })
  }

  const handleRowAction = (row, action) => {
    const cols = Object.keys(tableData?.[0]) || []
    const item = {}
    cols.forEach((c) => {
      item[c] = ""
    })
    item._rowId = new Date().getTime()
    if (action === "above") {
      setTableData((prev) => {
        const rows = structuredClone(prev)
        rows.splice(row.index, 0, item)
        return rows
      })
    }
    if (action === "below") {
      setTableData((prev) => {
        const rows = structuredClone(prev)
        rows.splice(row.index + 1, 0, item)
        return rows
      })
    }
    if (action === "delete") {
      setTableData((prev) => {
        const rows = structuredClone(prev)
        rows.splice(row.index, 1)
        return rows
      })
    }
  }

  const handleSave = () => {
    saveRules({ type, rules: tableData })
  }

  return (
    <Box>
      <Group align="center">
        <IconDeviceIpadHorizontalCog stroke={3} size={32} />
        <Title order={2}>Configure Rules</Title>
      </Group>
      <Flex gap={16} justify={"flex-start"} align={"center"} my={24}>
        <Text size="md" fw={500}>
          Rules for:{" "}
        </Text>
        <Select
          w={320}
          placeholder="Select Option"
          comboboxProps={{ shadow: "lg" }}
          variant="default"
          data={RULES_FOR}
          onChange={(event) => setType(event)}
        />
      </Flex>
      <ExcelTable
        key={type}
        label={"Rules"}
        content={tableData}
        enableRowNumbers={false}
        enableRowActions={true}
        handleCellEdit={handleCellEdit}
        handleRowAction={handleRowAction}
      />
      <Flex justify={"flex-end"}>
        <Button m={16} onClick={handleSave}>
          Save Rules
        </Button>
      </Flex>
    </Box>
  )
}

export default LabwareRules
