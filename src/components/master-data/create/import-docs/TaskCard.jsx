import React from "react";
import { InfoCard, TextCard } from "../../../../shared/components";
import { Card, Flex, Text } from "@mantine/core";

const TaskCard = () => {
  return (
    <Card shadow="sm" padding="lg" radius="md" w={"60rem"} my={16} withBorder>
      <Card.Section p={16}>
        <Text fw={500} c={"green"}>
          {"Task ID: 1000121"}
        </Text>
        <Flex gap={16} pb={16}>
          <TextCard title={"Company"} text={"DRL"} />
          <TextCard title={"Facility"} text={"FTO"} />
        </Flex>

        <Flex gap={16}>
          <InfoCard />
          <InfoCard />
        </Flex>
      </Card.Section>
    </Card>
  );
};

export default TaskCard;
