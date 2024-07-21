import React, { useState } from "react";
import { Toast, UploadCard } from "../../../../shared/components";
import { Button, Flex } from "@mantine/core";
import { IconUpload } from "@tabler/icons-react";
import TaskCard from "./TaskCard";
import { processFiles, uploadFiles } from "../../../../api/helpers";

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
  const [showToast, setShowToast] = useState(false);
  const [loadingToast, setLoadingToast] = useState(true);
  const [isPersistant, setIsPersistant] = useState(true);
  const [toastMessage, setToastMessage] = useState(
    "File upload is in progress.."
  );

  const handleUploadFiles = () => {
    setShowToast(true);
    setLoadingToast(true);
    setIsPersistant(true);
    uploadFiles([specFile, methodFile]).then((res) => {
      setShowTaskCard(false);
      setLoadingToast(false);
      setIsPersistant(false);
      setToastMessage("Files uploaded successfully");
    });
  };

  const handleToastHide = () => {
    setShowToast(false);
  };

  const handleProcess = () => {
    setShowToast(true);
    setLoadingToast(true);
    setIsPersistant(true);
    setToastMessage("Files processing is in progress..");
    if (specFile?.name && methodFile?.name) {
      processFiles(specFile.name).then((data) => {
        setLoadingToast(false);
        setIsPersistant(false);
        setToastMessage("Files processed successfully");
        data.specFile = specFile.name;
        data.methodFile = methodFile.name;
        setShowTaskCard(true);
        setTaskData(data);
      });
    } else {
      setShowToast(false);
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
      {showToast && (
        <Toast
          show={showToast}
          message={toastMessage}
          color={"green"}
          isLoading={loadingToast}
          onHide={handleToastHide}
          isPersistant={isPersistant}
        />
      )}
    </div>
  );
};

export default ImportDocs;
