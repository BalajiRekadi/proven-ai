import {
  TextInput,
  Button,
  ActionIcon,
  Card,
  Flex,
  Select,
} from "@mantine/core";
import { IconDeviceFloppy } from "@tabler/icons-react";
import { useStore } from "../../store/useStore";
import {
  GRADE_OPTIONS,
  MODULES,
  SAMPLING_POINT_OPTIONS,
} from "../constants/constants";

const DetailsBox = ({
  data,
  setData,
  onSave,
  onPrimaryBtnClick = () => {},
  showPrimaryBtn = false,
}) => {
  const { module } = useStore();
  const handleValueChange = (event, field) => {
    const value =
      field == "grade" || field == "samplingPoint" ? event : event.target.value;
    setData({ ...data, [field]: value });
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
            <Select
              w={"18rem"}
              label="Grade"
              placeholder="Select value"
              data={GRADE_OPTIONS}
              value={data?.grade}
              onChange={(event) => handleValueChange(event, "grade")}
              searchable
            />
            <Select
              w={"18rem"}
              label="Sampling Point"
              placeholder="Select value"
              data={SAMPLING_POINT_OPTIONS}
              value={data?.samplingPoint}
              onChange={(event) => handleValueChange(event, "samplingPoint")}
              searchable
            />
          </>
        )}
      </Flex>

      <Flex justify={"end"} align={"center"} px={16} pt={16} gap={32}>
        <ActionIcon variant="subtle" onClick={onSave}>
          <IconDeviceFloppy size={24} />
        </ActionIcon>
        {showPrimaryBtn && (
          <Button
            disabled={!(data?.grade && data?.samplingPoint)}
            onClick={onPrimaryBtnClick}
          >
            Generate Product Details
          </Button>
        )}
      </Flex>
    </Card>
  );
};

export default DetailsBox;
