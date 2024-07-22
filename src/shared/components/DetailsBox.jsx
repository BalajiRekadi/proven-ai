import React from "react";
import { TextInput, Group, ActionIcon, Card, Flex } from "@mantine/core";
import { IconDeviceFloppy } from "@tabler/icons-react";

const DetailsBox = ({ data, setData, onSave }) => {
  const handleValueChange = (event, field) => {
    setData({ ...data, [field]: event.target.value });
  };

  return (
    <Card shadow="sm" padding="lg" radius="md" my={16} withBorder>
      <Group justify="apart" grow>
        <TextInput
          placeholder="Enter"
          label="Product / Material Code"
          value={data?.product}
          onChange={(event) => handleValueChange(event, "product")}
        />
        <TextInput
          placeholder="Enter"
          label="Spec No."
          value={data?.specId}
          onChange={(event) => handleValueChange(event, "specId")}
        />
        <TextInput
          placeholder="Enter"
          label="Method No."
          value={data?.methodId}
          onChange={(event) => handleValueChange(event, "methodId")}
        />
        <TextInput
          placeholder="Enter"
          label="Market / Pharmacopeia"
          value={data?.market}
          onChange={(event) => handleValueChange(event, "market")}
        />
      </Group>

      <Flex justify={"end"} px={16} pt={16}>
        <ActionIcon variant="subtle" onClick={onSave}>
          <IconDeviceFloppy size={24} />
        </ActionIcon>
      </Flex>
    </Card>
  );
};

export default DetailsBox;
