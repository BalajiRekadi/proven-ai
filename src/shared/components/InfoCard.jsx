import React from "react";
import { Card, Flex, Text, Title } from "@mantine/core";
import { IconCircleArrowDownFilled, IconEyeFilled } from "@tabler/icons-react";

const InfoCard = () => {
  return (
    <Card shadow="sm" padding="lg" radius="md" w={"30rem"} withBorder>
      <Card.Section p={16}>
        <Flex justify={"right"} gap={8} pb={36}>
          <IconEyeFilled color="var(--gray)" />
          <IconCircleArrowDownFilled color="var(--gray)" />
        </Flex>
        <Flex justify={"space-between"}>
          <Flex direction={"column"}>
            <Title order={5}>Product</Title>
            <Text>{"Paracetamol"}</Text>
          </Flex>
          <Flex direction={"column"}>
            <Title order={5}>Product</Title>
            <Text>{"Paracetamol"}</Text>
          </Flex>
          <Flex direction={"column"}>
            <Title order={5}>Product</Title>
            <Text>{"Paracetamol"}</Text>
          </Flex>
        </Flex>
      </Card.Section>
    </Card>
  );
};

export default InfoCard;
