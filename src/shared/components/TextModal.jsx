import {
  Box,
  Flex,
  Modal,
  Text,
  Title,
  ActionIcon,
  Textarea,
} from "@mantine/core";
import React, { useState } from "react";
import { IconEdit, IconDeviceFloppy } from "@tabler/icons-react";

const TextModal = ({ open, onClose, title, content, size = "lg" }) => {
  const [isEdit, setIsEdit] = useState(false);

  const getFormattedContent = () => {
    if (!content) return [];
    const lines = content.split("\n");
    return lines;
  };

  return (
    <Modal
      opened={open}
      onClose={onClose}
      title={<Title order={3}>{title}</Title>}
      size={size}
    >
      {!isEdit && (
        <Box>
          {getFormattedContent().map((line) => (
            <Text w={"100%"} key={line} p={8}>
              {line}
            </Text>
          ))}
        </Box>
      )}

      {isEdit && (
        <Textarea
          size="md"
          label=""
          autosize
          minRows={10}
          placeholder="Enter Description"
          value={content}
        />
      )}

      <Flex justify={"end"} p={16} gap={10}>
        <ActionIcon variant="subtle" onClick={() => setIsEdit(true)}>
          <IconEdit />
        </ActionIcon>
        <ActionIcon variant="subtle" onClick={() => setIsEdit(false)}>
          <IconDeviceFloppy />
        </ActionIcon>
      </Flex>
    </Modal>
  );
};

export default TextModal;
