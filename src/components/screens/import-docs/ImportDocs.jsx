import { Button, Flex } from "@mantine/core";
import {
  fetchNeulandWorksheets,
  processFiles,
  uploadFiles,
} from "../../../api/helpers";
import { useToast } from "../../../shared/components/toast/useToast";
import React from "react";
import { UploadCard } from "../../../shared/components";
import { IconUpload } from "@tabler/icons-react";
import TaskCard from "./TaskCard";
import { useStore } from "../../../store/useStore";

const ImportDocs = ({
  taskData,
  setTaskData,
  specFile,
  setSpecFile,
  methodFile,
  setMethodFile,
  showTaskCard,
  setShowTaskCard,
  setWorksheetsData,
}) => {
  const toast = useToast();
  const { client } = useStore();

  const handleUploadFiles = () => {
    toast.load("Files upload is in progress..");
    uploadFiles([specFile, methodFile]).then(() => {
      setShowTaskCard(false);
      toast.success("Files uploaded successfully");
    });
  };

  const handleProcess = () => {
    toast.load("Files processing is in progress..");
    if (!specFile?.name && !methodFile?.name) {
      toast.info("Please upload Files");
    } else {
      if (client === "neuland") {
        fetchNeulandWorksheets(specFile?.name).then((data) => {
          toast.success("Files processed successfully");
          setShowTaskCard(true);
          setTaskData(data.taskData);
          setWorksheetsData(data.worksheetData);
        });
      } else {
        processFiles(specFile.name, methodFile.name).then((data) => {
          toast.success("Files processed successfully");
          setShowTaskCard(true);
          setTaskData(data);
        });
      }
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
