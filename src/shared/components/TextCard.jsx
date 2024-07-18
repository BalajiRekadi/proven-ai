import { Card, Text, Image, Flex, Group } from "@mantine/core";
import React from "react";
import editLogo from "../../assets/edit.png";

const TextCard = ({ title, text }) => {
  return (
    <Card
      shadow={"none"}
      padding="lg"
      radius="md"
      w={"20rem"}
      withBorder={false}
    >
      <Card.Section p={16}>
        <Text fw={500}>{title}</Text>
      </Card.Section>
      <Card padding="lg" radius="md" shadow="sm" withBorder>
        <Card.Section>
          <Flex justify={"space-between"}>
            <Text p={10}>{text}</Text>
            <Group pr={16}>
              <Image src={editLogo} w={16} />
            </Group>
          </Flex>
        </Card.Section>
      </Card>
    </Card>
  );
};

export default TextCard;
