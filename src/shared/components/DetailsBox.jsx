import React from "react";
import { TextInput, ActionIcon, Card, Flex } from "@mantine/core";
import { IconDeviceFloppy } from "@tabler/icons-react";
import { useStore } from "../../store/useStore";
import { MODULES } from "../constants";

const DetailsBox = ({ data, setData, onSave }) => {
  const { module } = useStore();
  const handleValueChange = (event, field) => {
    setData({ ...data, [field]: event.target.value });
  };

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      my={16}
      bg={"var(--lighter-gray)"}
      withBorder
    >
      <Flex justify="start" wrap="wrap" gap={24}>
        <TextInput
          w={"18rem"}
          placeholder="Enter"
          label="Code"
          value={data?.code}
          onChange={(event) => handleValueChange(event, "code")}
        />
        <TextInput
          w={"18rem"}
          placeholder="Enter"
          label="Product / Material"
          value={data?.product}
          onChange={(event) => handleValueChange(event, "product")}
        />
        <TextInput
          w={"18rem"}
          placeholder="Enter"
          label="Spec No."
          value={data?.specId}
          onChange={(event) => handleValueChange(event, "specId")}
        />
        <TextInput
          w={"18rem"}
          placeholder="Enter"
          label="Method No."
          value={data?.methodId}
          onChange={(event) => handleValueChange(event, "methodId")}
        />
        <TextInput
          w={"18rem"}
          placeholder="Enter"
          label="Market / Pharmacopeia"
          value={data?.market}
          onChange={(event) => handleValueChange(event, "market")}
        />
        {module === MODULES.LABWARE.value && (
          <>
            <TextInput
              w={"18rem"}
              placeholder="Enter"
              label="Grade"
              value={data?.grade}
              onChange={(event) => handleValueChange(event, "grade")}
            />
            <TextInput
              w={"18rem"}
              placeholder="Enter"
              label="Sampling Point"
              value={data?.samplingPoint}
              onChange={(event) => handleValueChange(event, "samplingPoint")}
            />
          </>
        )}
      </Flex>

      <Flex justify={"end"} px={16} pt={16}>
        <ActionIcon variant="subtle" onClick={onSave}>
          <IconDeviceFloppy size={24} />
        </ActionIcon>
      </Flex>
    </Card>
  );
};

export default DetailsBox;
