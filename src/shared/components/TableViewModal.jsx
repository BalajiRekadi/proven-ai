import { Box, Flex, Modal, ScrollArea, Text, Title } from "@mantine/core";
import React from "react";

const TableViewModal = ({ open, onClose, label, content = {} }) => {
  return (
    <Modal
      opened={open}
      onClose={onClose}
      title={<Title order={3}>{label}</Title>}
      closeOnClickOutside={false}
      fullScreen={true}
    >
      <Box bd={"1px solid var(--light-gray)"} style={{ borderRadius: "6px" }}>
        <ScrollArea p={0}>
          <Flex>
            <>
              {Object.keys(content).map((key) => (
                <Title
                  order={5}
                  key={key}
                  p={8}
                  miw={"17rem"}
                  lineClamp={1}
                  bd={"1px solid var(--light-gray)"}
                  bg={"gray"}
                >
                  {key}
                </Title>
              ))}
            </>
          </Flex>
          <Flex>
            {Object.keys(content).map((index) => (
              <Box key={index}>
                {content[index].map((val, index) => (
                  <>
                    {val && (
                      <ScrollArea
                        w={"17rem"}
                        h={"3rem"}
                        bd={"1px solid var(--light-gray)"}
                      >
                        <Text key={val + index} p={8}>
                          {val}
                        </Text>
                      </ScrollArea>
                    )}
                    {!val && (
                      <ScrollArea
                        w={"17rem"}
                        h={"3rem"}
                        bd={"1px solid var(--light-gray)"}
                      >
                        <Text key={val + index} p={8}>
                          {" "}
                        </Text>
                      </ScrollArea>
                    )}
                  </>
                ))}
              </Box>
            ))}
          </Flex>
        </ScrollArea>
      </Box>
    </Modal>
  );
};

export default TableViewModal;
