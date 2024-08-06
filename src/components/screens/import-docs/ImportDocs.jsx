import { Button, Flex } from "@mantine/core";
import { processFiles, uploadFiles } from "../../../api/helpers";
import { useToast } from "../../../shared/components/toast/useToast";
import React from "react";
import { UploadCard } from "../../../shared/components";
import { IconUpload } from "@tabler/icons-react";
import TaskCard from "./TaskCard";
import { IMPORT_DOCS_DETAILS } from "../../../shared/constants";
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
    toast.load(IMPORT_DOCS_DETAILS.load);
    uploadFiles([specFile, methodFile]).then(() => {
      setShowTaskCard(false);
      toast.success(IMPORT_DOCS_DETAILS.success);
    });
  };

  const handleProcess = () => {
    toast.load(IMPORT_DOCS_DETAILS.loadProcess);
    if (specFile?.name && methodFile?.name) {
      processFiles(specFile.name, methodFile.name).then((data) => {
        toast.success(IMPORT_DOCS_DETAILS.loadProcessSuccess);
        setShowTaskCard(true);
        setTaskData(data);
      });
    } else {
      toast.info(IMPORT_DOCS_DETAILS.info);
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
