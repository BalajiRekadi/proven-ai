import React, { useState } from "react";
import { Toast, UploadCard } from "../../../../shared/components";
import { Button, Flex, Notification } from "@mantine/core";
import { IconUpload } from "@tabler/icons-react";
import { useUploadFiles } from "../../../../api/hooks";
import TaskCard from "./TaskCard";

const ImportDocs = () => {
  const { mutate: uploadFilesMutate } = useUploadFiles();
  const [specFile, setSpecFile] = useState(null);
  const [methodFile, setMethodFile] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [loadingToast, setLoadingToast] = useState(true);
  const [toastMessage, setToastMessage] = useState(
    "File upload is in progress.."
  );

  const handleUploadFiles = () => {
    setShowToast(true);
    const data = uploadFilesMutate([specFile, methodFile]);
  };

  const handleToastHide = () => {
    setShowToast(false);
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
        <Button mt="md" radius="md" variant="filled">
          {"Process"}
        </Button>
      </Flex>
      <TaskCard />
      {showToast && (
        <Toast
          show={showToast}
          message={toastMessage}
          color={"green"}
          isLoading={loadingToast}
          onHide={handleToastHide}
          isPersistant={true}
        />
      )}
    </div>
  );
};

export default ImportDocs;
