import { Box, Flex, Modal, ScrollArea, Text, Title } from "@mantine/core";
import React from "react";

const TableViewModal = ({ open, onClose, label, content = {} }) => {
  return (
    <Modal
      opened={open}
      onClose={onClose}
      title={label}
      closeOnClickOutside={false}
    >
      <ScrollArea h={"80vh"} w={"80vw"}>
        <Flex gap={16}>
          {Object.keys(content).map((index) => (
            <Box key={index}>
              <Title order={4} key={index}>
                {index}
              </Title>
              {content[index].map((val, index) => (
                <>
                  {val && <Text key={val + index}>{val}</Text>}
                  {!val && <Text key={val + index}>{"-"}</Text>}
                </>
              ))}
            </Box>
          ))}
        </Flex>
      </ScrollArea>
    </Modal>
  );
};

export default TableViewModal;
