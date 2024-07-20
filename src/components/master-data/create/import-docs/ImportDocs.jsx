import React from "react";
import { UploadCard } from "../../../../shared/components";
import { Button, Flex } from "@mantine/core";
import TaskCard from "./TaskCard";
import { IconUpload } from "@tabler/icons-react";

const ImportDocs = () => {
  return (
    <div style={{ width: "70%" }}>
      <Flex gap={16}>
        <UploadCard title={"Specification"} label={"File Name"} />
        <UploadCard title={"Method"} label={"File Name"} />
      </Flex>
      <Flex gap={16}>
        <Button
          mt="md"
          radius="md"
          variant="outline"
          justify="space-between"
          w={150}
          rightSection={<IconUpload />}
        >
          {"Upload File"}
        </Button>
        <Button mt="md" radius="md" variant="filled">
          {"Process"}
        </Button>
      </Flex>
      <TaskCard />
    </div>
  );
};

export default ImportDocs;
