import { Modal, Title, Group, Button } from "@mantine/core";
import ExportTable from "./ExportTable";

const ExportModal = ({
  open,
  handleClose,
  handleExport,
  title,
  data,
  size = "1100",
}) => {
  return (
    <Modal
      opened={open}
      onClose={handleClose}
      title={<Title order={3}>{title}</Title>}
      size={size}
    >
      <ExportTable data={data} enableRowSelection={true} />
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
