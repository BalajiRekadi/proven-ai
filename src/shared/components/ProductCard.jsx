import { ActionIcon, Card, Flex, Group, Text } from "@mantine/core";
import {
  IconCircleArrowDownFilled,
  IconExternalLink,
  IconEyeFilled,
} from "@tabler/icons-react";
import React, { useState } from "react";
import TextModal from "./TextModal";
import { downloadJSONFromObj } from "../utilities";

const ProductCard = ({ title, content }) => {
  const [modalOpened, setModalOpened] = useState(false);

  const formatContent = () => {
    let formattedContent = "";
    Object.keys(content).forEach((key) => {
      const value = content[key];
      if (value && value[0] !== "") {
        formattedContent = formattedContent + `${key}: ${value[0]}\n`;
      }
    });
    return formattedContent;
  };

  const onView = () => {
    setModalOpened(true);
  };

  const onDownload = () => {
    downloadJSONFromObj(content, title);
  };

  return (
    <>
      <Flex align="center" justify="space-between">
        <Card shadow="sm" p="sm" radius="md" withBorder style={{ flex: 1 }}>
          <Flex justify="space-between" align="center">
            <Text fw={500}>{title}</Text>
            <Group gap="xs">
              <ActionIcon variant="subtle">
                <IconEyeFilled size={20} onClick={onView} />
              </ActionIcon>
              <ActionIcon variant="subtle">
                <IconCircleArrowDownFilled size={20} onClick={onDownload} />
              </ActionIcon>
            </Group>
          </Flex>
        </Card>
        <ActionIcon ml="md" variant="subtle">
          <IconExternalLink size={20} />
        </ActionIcon>
      </Flex>
      <TextModal
        open={modalOpened}
        onClose={() => setModalOpened(false)}
        title={"Description"}
        content={formatContent()}
      />
    </>
  );
};

export default ProductCard;