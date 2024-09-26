import { Card, FileButton, Text, FileInput, TextInput } from "@mantine/core";
import React from "react";
import { IconCloudUp } from "@tabler/icons-react";

const UploadCard = ({
  label,
  title,
  value,
  fileName,
  onChange,
  withBorder = true,
}) => {
  const setFile = () => {};
  return (
    <Card padding="lg" radius="md" w={"20rem"} withBorder={withBorder}>
      <Card.Section p={16}>
        <Text fw={500}>{title}</Text>
      </Card.Section>
      {!fileName && (
        <FileButton onChange={setFile} accept="image/png,image/jpeg">
          {(props) => (
            <>
              <FileInput
                mt="md"
                label={""}
                value={value}
                onChange={onChange}
                placeholder={label}
                rightSection={<IconCloudUp />}
                rightSectionPointerEvents="none"
              />
            </>
          )}
        </FileButton>
      )}
      {fileName && <TextInput placeholder="Select File" value={fileName} />}
    </Card>
  );
};
export default UploadCard;
