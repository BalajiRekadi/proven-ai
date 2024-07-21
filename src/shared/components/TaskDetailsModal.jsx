import { Box, Modal } from "@mantine/core";
import React from "react";

const TaskDetailsModal = ({ open, onClose, title, content }) => {
  return (
    <Modal opened={open} onClose={onClose} title={title}>
      <Box h={"20rem"} w={"20rem"}>
        <p>{JSON.stringify(content)}</p>
      </Box>
    </Modal>
  );
};

export default TaskDetailsModal;
