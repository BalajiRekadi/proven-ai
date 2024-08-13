import { Button, Flex } from "@mantine/core";
import React from "react";
import { UploadCard } from "../../../shared/components";
import { IconUpload } from "@tabler/icons-react";
import TaskCard from "./TaskCard";
import { useGenerateWorksheets, useUploadFiles } from "../../../api/hooks";
import { useStore } from "../../../store/useStore";
import { processFiles } from "../../../api/helpers";

const ImportDocs = ({
  taskData,
  setTaskData,
  specFile,
  setSpecFile,
  methodFile,
  setMethodFile,
  showTaskCard,
  setShowTaskCard,
  setData,
  showOnlyMethodUpload = false,
}) => {
  const { uploadFiles } = useUploadFiles();
  const { generateWorksheets } = useGenerateWorksheets("process");
  const { client } = useStore();

  const handleUploadFiles = () => {
    const files = showOnlyMethodUpload ? [methodFile] : [specFile, methodFile];
    uploadFiles(files).then(() => {
      setShowTaskCard(false);
    });
  };

  const handleProcess = () => {
    if (client === "neuland") {
      generateWorksheets(methodFile?.name).then((data) => {
        setShowTaskCard(true);
        setTaskData(data.taskData);
        setData(data.worksheetData);
      });
    } else {
      processFiles(specFile?.name, methodFile?.name).then((data) => {
        setShowTaskCard(true);
        setTaskData(data);
      });
    }
  };

  return (
    <div style={{ width: "70%" }}>
      <Flex gap={16}>
        {!showOnlyMethodUpload && (
          <UploadCard
            title={"Specification"}
            label={"File Name"}
            value={specFile}
            onChange={setSpecFile}
          />
        )}
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
