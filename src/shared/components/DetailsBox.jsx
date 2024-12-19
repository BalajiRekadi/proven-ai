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
import { useMemo } from "react";

const DetailsBox = ({
  data,
  setData,
  onSave,
  onPrimaryBtnClick = () => {},
  showPrimaryBtn = false,
}) => {
  const GRADEOPTIONS = useMemo(() => GRADE_OPTIONS.flatMap((i) => i), []);
  const SAMPLINGPOINTOPTIONS = useMemo(
    () => SAMPLING_POINT_OPTIONS.flatMap((i) => i),
    []
  );

  const { module } = useStore();
  const handleValueChange = (event, field) => {
    const value =
      field == "grade" || field == "samplingPoint" ? event : event.target.value;
    setData({ ...data, [field]: value });
  };

  const filterOptions = ({ options, search }) => {
    return options.filter((option) =>
      option.label.toLowerCase().trim().startsWith(search.toLowerCase())
    );
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
              data={GRADEOPTIONS}
              value={data?.grade}
              limit={50}
              filter={filterOptions}
              onChange={(event) => handleValueChange(event, "grade")}
              searchable
            />
            <Select
              w={"18rem"}
              label="Sampling Point"
              placeholder="Select value"
              data={SAMPLINGPOINTOPTIONS}
              value={data?.samplingPoint}
              limit={50}
              filter={filterOptions}
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
