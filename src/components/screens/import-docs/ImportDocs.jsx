import { Button, Flex } from "@mantine/core";
import { UploadCard } from "../../../shared/components";
import { IconUpload } from "@tabler/icons-react";
import TaskCard from "./TaskCard";
import {
  useGenerateWorksheets,
  useUploadFiles,
  useProcessFiles,
} from "../../../api/hooks";
import { useStore } from "../../../store/useStore";

const ImportDocs = ({
  taskData,
  setTaskData,
  specFile,
  specFileName,
  setSpecFile,
  methodFile,
  methodFileName,
  setMethodFile,
  showTaskCard,
  setShowTaskCard,
  setData,
  areFilesUploaded,
  setAreFilesUploaded,
  showOnlyMethodUpload = false,
}) => {
  const { uploadFiles } = useUploadFiles();
  const { generateWorksheets } = useGenerateWorksheets("process");
  const { processFile } = useProcessFiles();
  const { client } = useStore();

  const handleUploadFiles = () => {
    const files = showOnlyMethodUpload ? [methodFile] : [specFile, methodFile];
    uploadFiles(files).then(() => {
      setShowTaskCard(false);
      setAreFilesUploaded(true);
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
      processFile([specFile?.name, methodFile?.name]).then((data) => {
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
            label={"Select file"}
            value={specFile}
            fileName={specFileName}
            onChange={setSpecFile}
          />
        )}
        <UploadCard
          title={"Method"}
          label={"Select file"}
          value={methodFile}
          fileName={methodFileName}
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
        <Button
          mt="md"
          radius="md"
          variant="filled"
          onClick={handleProcess}
          disabled={!areFilesUploaded}
        >
          {"Process"}
        </Button>
      </Flex>
      {showTaskCard && <TaskCard data={taskData} setTaskData={setTaskData} />}
    </div>
  );
};

export default ImportDocs;
