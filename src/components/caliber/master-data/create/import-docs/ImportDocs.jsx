import React from "react";
import { Button, Flex } from "@mantine/core";
import { IconUpload } from "@tabler/icons-react";
import TaskCard from "./TaskCard";
import { useToast } from "../../../../../shared/components/toast/useToast";
import { processFiles, uploadFiles } from "../../../../../api/helpers";
import { UploadCard } from "../../../../../shared/components";

const ImportDocs = ({
  taskData,
  setTaskData,
  specFile,
  setSpecFile,
  methodFile,
  setMethodFile,
  showTaskCard,
  setShowTaskCard,
}) => {
  const toast = useToast();

  const handleUploadFiles = () => {
    toast.load("Files upload is in progress..");
    uploadFiles([specFile, methodFile]).then(() => {
      setShowTaskCard(false);
      toast.success("Files uploaded successfully");
    });
  };

  const handleProcess = () => {
    toast.load("Files processing is in progress..");
    if (specFile?.name && methodFile?.name) {
      processFiles(specFile.name, methodFile.name).then((data) => {
        toast.success("Files processed successfully");
        setShowTaskCard(true);
        setTaskData(data);
      });
    } else {
      toast.info("Please upload Files");
    }
  };

  return (
    <div style={{ width: "70%" }}>
      <Flex gap={16}>
        <UploadCard
          title={"Specification"}
          label={"File Name"}
          value={specFile}
          onChange={setSpecFile}
        />
        <UploadCard
          title={"Method"}
          label={"File Name"}
          value={methodFile}
          onChange={setMethodFile}
        />
      </Flex>
      <Flex gap={16}>
        <Button
          mt="md"
          radius="md"
          variant="outline"
          justify="space-between"
          w={150}
          rightSection={<IconUpload />}
          onClick={handleUploadFiles}
        >
          {"Upload Files"}
        </Button>
        <Button mt="md" radius="md" variant="filled" onClick={handleProcess}>
          {"Process"}
        </Button>
      </Flex>
      {showTaskCard && <TaskCard data={taskData} setTaskData={setTaskData} />}
    </div>
  );
};

export default ImportDocs;
