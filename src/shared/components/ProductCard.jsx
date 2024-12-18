import { ActionIcon, Card, Flex, Group, Text } from "@mantine/core";
import {
  IconCircleArrowDownFilled,
  IconExternalLink,
  IconEyeFilled,
} from "@tabler/icons-react";
import { useState } from "react";
import { downloadCSVFromArray } from "../utilities";
import TableViewModal from "./TableViewModal";

const ProductCard = ({ title, content = {} }) => {
  const [modalOpened, setModalOpened] = useState(false);

  const formatContent = () => {
    let formattedContent = {};
    Object.keys(content).forEach((key) => {
      const value = content[key];
      if (value) {
        formattedContent[key] = value[0] || "";
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
              <ActionIcon variant="subtle" onClick={onView}>
                <IconEyeFilled size={20} />
              </ActionIcon>
              <ActionIcon variant="subtle" onClick={onDownload}>
                <IconCircleArrowDownFilled size={20} />
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
