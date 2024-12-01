import {
  Accordion,
  ActionIcon,
  Box,
  Button,
  Flex,
  Title,
  Tooltip,
} from "@mantine/core";
import { InputTable, UploadCard } from "../../../shared/components";
import { IconExclamationCircle, IconUpload } from "@tabler/icons-react";
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
  limitsData,
  setLimitsData,
  annotationValidations,
  setShowAnnotationsValidation,
  setAnnotationValidations,
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
        setTaskData(data.taskData);
        setLimitsData(data.limits);
        setAnnotationValidations(data.annotationValidation);
      });
    }
  };

  return (
    <Box pr={32}>
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
      <Flex gap={16} align={"center"} mt={"md"}>
        <Button
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
          radius="md"
          variant="filled"
          onClick={handleProcess}
          disabled={!areFilesUploaded}
        >
          {"Process"}
        </Button>
        {annotationValidations?.ErrorCount && (
          <Tooltip
            label="There are some annotation issues occured during process, click to view."
            arrowSize={8}
            withArrow
          >
            <ActionIcon
              variant="subtle"
              color="var(--error)"
              onClick={() => setShowAnnotationsValidation(true)}
            >
              <IconExclamationCircle />
            </ActionIcon>
          </Tooltip>
        )}
      </Flex>
      {showTaskCard && <TaskCard data={taskData} setTaskData={setTaskData} />}
      {showTaskCard && (
        <Accordion
          variant="separated"
          mt={32}
          styles={{
            item: {
              boxShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          <Accordion.Item value={"Limits"}>
            <Accordion.Control>
              <Title order={4}>Limits</Title>
            </Accordion.Control>
            <Accordion.Panel>
              <InputTable data={limitsData} updateData={setLimitsData} />
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      )}
    </Box>
  );
};

export default ImportDocs;
