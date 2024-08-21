import { ActionIcon, Box, Flex, Modal, Title } from "@mantine/core";
import React, { useMemo, useState } from "react";
import { DEFAULT_TABLE_CONFIG } from "../constants";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import "./tableViewModal.css";
import { IconZoomScan } from "@tabler/icons-react";

const TableViewModal = ({
  open,
  onClose,
  label,
  size = "70rem",
  content = [],
  enableRowNumbers = true,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const columns = useMemo(() => {
    if (content.length < 1) return [];
    const keys = Object.keys(content[0]);
    const cols = keys.filter(Boolean).map((key) => {
      return {
        header: key,
        id: key,
        accessorKey: key,
        size: 150,
      };
    });
    return cols;
  }, [content]);

  const tableConfig = {
    columns,
    data: content,
    ...DEFAULT_TABLE_CONFIG,
    enableRowNumbers,
    mantineTableProps: {
      striped: true,
      withColumnBorders: true,
      sx: {
        maxHeight: "30rem",
      },
    },
  };
  const table = useMantineReactTable(tableConfig);

  return (
    <Modal
      opened={open}
      onClose={onClose}
      zIndex={400}
      size={size}
      centered={true}
      closeOnClickOutside={false}
      fullScreen={isFullscreen}
      title={
        <Flex justify={"space-between"}>
          <Title order={3}>{label}</Title>
          <ActionIcon
            ml="md"
            variant="subtle"
            mr={8}
            onClick={() => setIsFullscreen(!isFullscreen)}
          >
            <IconZoomScan size={20} />
          </ActionIcon>
        </Flex>
      }
      className="table-view-modal"
    >
      <Box h={"70vh"}>
        <MantineReactTable table={table} />
      </Box>
    </Modal>
  );
};

export default TableViewModal;

{
  /* <Box bd={"1px solid var(--light-gray)"} style={{ borderRadius: "6px" }}>
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
</Box> */
}
