// @ts-ignore
import React from "react"
import { Flex, Select, Text } from "@mantine/core"
import { RULES_FOR } from "../../../../shared/constants/constants"

function LabwareRules() {
  return (
    <Flex gap={16} justify={"center"} align={"center"}>
      <Text size="md" fw={500}>
        Rules for:{" "}
      </Text>
      <Select
        w={320}
        placeholder="Select Option"
        comboboxProps={{ shadow: "lg" }}
        variant="default"
        data={RULES_FOR}
      />
    </Flex>
  )
}

export default LabwareRules
