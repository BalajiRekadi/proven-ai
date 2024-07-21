import { TextInput } from "@mantine/core";
import React from "react";
import { IconEdit } from "@tabler/icons-react";

const TextCard = ({ title, text, onChange }) => {
  return (
    <TextInput
      mt="md"
      rightSectionPointerEvents="none"
      rightSection={<IconEdit />}
      label={title}
      value={text}
      placeholder="Enter"
      onChange={onChange}
    />
  );
};

export default TextCard;
