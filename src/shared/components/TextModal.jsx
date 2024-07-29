import { Box, Flex, Modal, Text, Title } from "@mantine/core";
import React from "react";

const TextModal = ({
  open,
  onClose,
  title,
  content,
  size = "lg",
  asTable = false,
}) => {
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
      {asTable && (
        <Box bd={"1px solid var(--light-gray)"} style={{ borderRadius: "4px" }}>
          {Object.keys(content).map((key) => (
            <>
              <Flex>
                <Text w={"50%"} bd={"1px solid var(--light-gray)"} p={8}>
                  {key}
                </Text>
                <Text w={"50%"} bd={"1px solid var(--light-gray)"} p={8}>
                  {(content && content[key]) || ""}
                </Text>
              </Flex>
            </>
          ))}
        </Box>
      )}
      {!asTable && (
        <Box>
          {getFormattedContent().map((line) => (
            <Text w={"100%"} key={line} p={8}>
              {line}
            </Text>
          ))}
        </Box>
      )}
    </Modal>
  );
};

export default TextModal;
