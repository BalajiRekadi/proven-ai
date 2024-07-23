import { Box, Modal, Text } from "@mantine/core";
import React from "react";

const TextModal = ({ open, onClose, title, content }) => {
  const getFormattedContent = () => {
    if (!content) return [];
    const lines = content.split("\n");
    return lines;
  };

  return (
    <Modal opened={open} onClose={onClose} title={title}>
      <Box>
        {getFormattedContent().map((line) => (
          <Text w={"100%"} key={line} p={8}>
            {line}
          </Text>
        ))}
      </Box>
    </Modal>
  );
};

export default TextModal;
