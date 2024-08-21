import {
  Modal,
  Title,
  Group,
  Button,
  Flex,
  ActionIcon,
  ScrollArea,
} from "@mantine/core";
import ExportTable from "./ExportTable";
import { useState } from "react";
import { IconZoomScan } from "@tabler/icons-react";
import "./exportModal.css";

const ExportModal = ({
  open,
  handleClose,
  handleExport,
  title,
  data,
  rowSelection,
  setRowSelection,
  size = "1100",
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <Modal
      opened={open}
      onClose={handleClose}
      fullScreen={isFullscreen}
      title={
        <Flex justify={"space-between"}>
          <Title order={3}>{title}</Title>
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
      size={size}
      className="export-modal"
    >
      <ScrollArea h={"70vh"}>
        <ExportTable
          data={data}
          enableRowSelection={true}
          rowSelection={rowSelection}
          setRowSelection={setRowSelection}
        />
      </ScrollArea>
      <Group justify="right" mt="md">
        <Button variant="outline" onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={handleExport}>Export</Button>
      </Group>
    </Modal>
  );
};

export default ExportModal;
