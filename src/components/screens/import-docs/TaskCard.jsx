import React from "react";
import { Card, Flex, Text, TextInput } from "@mantine/core";
import { IconEdit } from "@tabler/icons-react";
import { InfoCard } from "../../../shared/components";

const TaskCard = ({ data, setTaskData }) => {
  const handleCompanyChange = (event) => {
    setTaskData({ ...data, company: event.target.value });
  };
  const handleFacilityChange = (event) => {
    setTaskData({ ...data, facility: event.target.value });
  };
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      w={"80rem"}
      my={16}
      mt={48}
      withBorder
    >
      <Card.Section p={16}>
        <Text fw={600} c={"green"}>
          {`Task ID: ${data.taskId}`}
        </Text>
        <Flex gap={16} pb={16}>
          <TextInput
            w={"20rem"}
            mt="md"
            rightSectionPointerEvents="none"
            rightSection={<IconEdit />}
            label={"Company"}
            value={data.company}
            placeholder="NA"
            onChange={handleCompanyChange}
          />
          <TextInput
            w={"20rem"}
            mt="md"
            rightSectionPointerEvents="none"
            rightSection={<IconEdit />}
            label={"Facility"}
            value={data.facility}
            placeholder="NA"
            onChange={handleFacilityChange}
          />
        </Flex>

        <Flex gap={16}>
          <InfoCard
            data={data}
            setTaskData={setTaskData}
            type={"Spec"}
            typeValue={data?.specId}
          />
          <InfoCard
            data={data}
            setTaskData={setTaskData}
            type={"Method"}
            typeValue={data?.methodId}
          />
        </Flex>
      </Card.Section>
    </Card>
  );
};

export default TaskCard;
