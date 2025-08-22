// @ts-ignore
import React, { useRef, useState } from "react"
import { Box, Button, Flex, Select, Text } from "@mantine/core"
import { RULES_FOR } from "../../../../shared/constants/constants"
import { useRules } from "../../../../api/hooks"
import { ExcelTable } from "../../../../shared/components"
import useSaveRules from "../../../../api/hooks/useSaveRules"

function LabwareRules() {
  const [type, setType] = useState("")
  const { data } = useRules(type)

  const [tableData, setTableData] = useState([])

  const { saveRules } = useSaveRules()

  React.useEffect(() => {
    if (data) {
      const freshData = data.map((row, index) => ({
        ...row,
        _rowId: `${type}-${index}`, // unique per type
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

  const handleSave = () => {
    saveRules({ type, rules: tableData })
  }

  return (
    <Box>
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
        enableRowNumbers={true}
        handleCellEdit={handleCellEdit}
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
