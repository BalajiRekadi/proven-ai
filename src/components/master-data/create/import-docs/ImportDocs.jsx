import React from "react";
import { UploadCard } from "../../../../shared/components";
import { Button, Flex } from "@mantine/core";
import TaskCard from "./TaskCard";

const ImportDocs = () => {
  return (
    <div style={{ width: "70%" }}>
      <Flex gap={16}>
        <UploadCard title={"Specification"} label={"File Upload"} />
        <UploadCard title={"Method"} label={"File Upload"} />
      </Flex>
      <Flex gap={16}>
        <Button mt="md" radius="md" variant="outline">
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
