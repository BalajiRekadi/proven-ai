import React, { useState } from "react";
import { Toast, UploadCard } from "../../../../shared/components";
import { Button, Flex } from "@mantine/core";
import { IconUpload } from "@tabler/icons-react";
import TaskCard from "./TaskCard";
import { processFiles, uploadFiles } from "../../../../api/helpers";

const ImportDocs = () => {
  const [specFile, setSpecFile] = useState(null);
  const [methodFile, setMethodFile] = useState(null);
  const [taskData, setTaskData] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [loadingToast, setLoadingToast] = useState(true);
  const [isPersistant, setIsPersistant] = useState(true);
  const [toastMessage, setToastMessage] = useState(
    "File upload is in progress.."
  );

  const handleUploadFiles = () => {
    setShowToast(true);
    setTimeout(() => {
      uploadFiles([specFile, methodFile]).then((res) => {
        setLoadingToast(false);
        setIsPersistant(false);
        setToastMessage("Files uploaded successfully");
      });
    }, 2000);
  };

  const handleToastHide = () => {
    setShowToast(false);
  };

  const handleProcess = () => {
    setShowToast(true);
    setLoadingToast(false);
    setIsPersistant(true);
    setToastMessage("Files processing is in progress..");
    setTimeout(() => {
      processFiles().then((res) => {
        setLoadingToast(false);
        setIsPersistant(false);
        setToastMessage("Files processed successfully");
        setTaskData(res);
      });
    }, 2000);
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
      <TaskCard data={taskData} />
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
