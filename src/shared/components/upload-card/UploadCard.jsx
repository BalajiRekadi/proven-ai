import { Button, Card, Text } from "@mantine/core";
import React from "react";

const UploadCard = ({ label, title, withBorder = true, shadow = "md" }) => {
  return (
    <Card
      shadow={shadow}
      padding="lg"
      radius="md"
      w={"20rem"}
      withBorder={withBorder}
    >
      <Card.Section p={16}>
        <Text fw={500}>{title}</Text>
      </Card.Section>
      <Button fullWidth mt="md" radius="md" variant="outline">
        {label}
      </Button>
    </Card>
  );
};
export default UploadCard;
