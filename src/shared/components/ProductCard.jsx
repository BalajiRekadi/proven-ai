import { ActionIcon, Card, Flex, Group, Text } from "@mantine/core";
import {
  IconCircleArrowDownFilled,
  IconExternalLink,
  IconEyeFilled,
} from "@tabler/icons-react";
import React, { useState } from "react";
import TextModal from "./TextModal";
import { downloadCSVFromArray, downloadJSONFromObj } from "../utilities";
import TableViewModal from "./TableViewModal";

const ProductCard = ({ title, content }) => {
  const [modalOpened, setModalOpened] = useState(false);

  const formatContent = () => {
    let formattedContent = {};
    Object.keys(content).forEach((key) => {
      const value = content[key];
      if (value && value[0] !== "") {
        formattedContent[key] = (value && value[0]) || "";
      }
    });
    return formattedContent;
  };

  const onView = () => {
    setModalOpened(true);
  };

  const onDownload = () => {
    downloadCSVFromArray([formatContent()], title);
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
      <TableViewModal
        open={modalOpened}
        onClose={() => setModalOpened(false)}
        label={title}
        content={[formatContent()]}
      />
    </>
  );
};

export default ProductCard;
