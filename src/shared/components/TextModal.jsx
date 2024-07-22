import { Box, Modal, Text } from "@mantine/core";
import React from "react";

const TextModal = ({ open, onClose, title, content }) => {
  const getFormattedContent = () => {
    const lines = content.split('\n')
    return lines;
  }

  return (
    <Modal opened={open} onClose={onClose} title={title}>
      <Box>
        {getFormattedContent().map((line)=>(
          <Text w={'100%'} p={8}>{line}</Text>
        ))}
      </Box>
    </Modal>
  );
};

export default TextModal;
