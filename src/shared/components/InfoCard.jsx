import React from "react";
import eyeLogo from "../../assets/eye.png";
import downloadLogo from "../../assets/download.png";
import { Card, Flex, Image, Text, Title } from "@mantine/core";

const InfoCard = () => {
  return (
    <Card shadow="sm" padding="lg" radius="md" w={"30rem"} withBorder>
      <Card.Section p={16}>
        <Flex justify={"right"} gap={8} pb={36}>
          <Image src={eyeLogo} w={16} />
          <Image src={downloadLogo} w={16} />
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
