import { Card, Flex, Group, TextInput, Title } from "@mantine/core";
import { IconEdit } from "@tabler/icons-react";
import { InfoCard } from "../../../shared/components";

const TaskCard = ({ data, setTaskData }) => {
  const handleValueChange = (event, key) => {
    setTaskData({ ...data, [key]: event.target.value });
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
        <Group>
          <Title order={5}>Task ID:</Title>
          <Title order={5} c={"green"}>
            {data.taskId}
          </Title>
        </Group>
        <Flex gap={16} pb={16}>
          <TextInput
            w={"20rem"}
            mt="md"
            rightSectionPointerEvents="none"
            rightSection={<IconEdit />}
            label={"Company"}
            value={data.company}
            placeholder="NA"
            onChange={(e) => handleValueChange(e, "company")}
          />
          <TextInput
            w={"20rem"}
            mt="md"
            rightSectionPointerEvents="none"
            rightSection={<IconEdit />}
            label={"Facility"}
            value={data.facility}
            placeholder="NA"
            onChange={(e) => handleValueChange(e, "facility")}
          />
          <TextInput
            w={"20rem"}
            mt="md"
            rightSectionPointerEvents="none"
            rightSection={<IconEdit />}
            label={"Label claim"}
            value={data.labelClaim}
            placeholder="NA"
            onChange={(e) => handleValueChange(e, "labelClaim")}
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
