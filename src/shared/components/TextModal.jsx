import {
  Box,
  Flex,
  Modal,
  Text,
  Title,
  ActionIcon,
  Textarea,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import { IconEdit, IconDeviceFloppy } from "@tabler/icons-react";

const TextModal = ({
  open,
  onClose,
  title,
  content,
  size = "lg",
  onSaveContent = () => {},
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editableContent, setEditableContent] = useState(content);

  useEffect(() => {
    setEditableContent(content);
  }, [content]);

  const getFormattedContent = () => {
    if (!editableContent || !editableContent.split) return ["No Data Found"];
    const lines = editableContent.split("\n");
    return lines;
  };

  const onEditableContentChange = (e) => {
    setEditableContent(e.target.value);
  };

  const onEdit = () => {
    setIsEdit(true);
  };

  const onSave = () => {
    setIsEdit(false);
    onSaveContent(editableContent);
  };

  const handleClose = () => {
    onClose();
    setIsEdit(false);
  };

  return (
    <Modal
      opened={open}
      onClose={handleClose}
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
          value={editableContent}
          onChange={onEditableContentChange}
        />
      )}

      <Flex justify={"end"} p={16} gap={10}>
        <ActionIcon variant="subtle" onClick={onEdit}>
          <IconEdit />
        </ActionIcon>
        <ActionIcon variant="subtle" onClick={onSave}>
          <IconDeviceFloppy />
        </ActionIcon>
      </Flex>
    </Modal>
  );
};

export default TextModal;
