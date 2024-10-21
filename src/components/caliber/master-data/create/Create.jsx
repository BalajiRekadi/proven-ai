import { useEffect, useState } from "react";
import { Button, Flex, Group, Stepper, Title } from "@mantine/core";
import ImportDocs from "../../../screens/import-docs/ImportDocs";
import Worksheets from "./worksheets/Worksheets";
import { IconDatabase } from "@tabler/icons-react";
import Export from "../../../screens/export/Export";
import Tests from "./tests/Tests";
import TestPlan from "./test-plan/TestPlan";
import { saveImportDocsData } from "../../../../api/helpers";
import { useSaveWorksheetData, useTaskDetails } from "../../../../api/hooks";
import { DetailsBox } from "../../../../shared/components";
import { useToast } from "../../../../shared/components/toast/useToast";
import { useStore } from "../../../../store/useStore";
import ExportModal from "../../../../shared/components/ExportModal";
import "./create.css";

const CreateFlow = () => {
  const [active, setActive] = useState(0);
  const [openExportModal, setOpenExportModal] = useState(false);
  const [specFile, setSpecFile] = useState(null);
  const [methodFile, setMethodFile] = useState(null);
  const [showTaskCard, setShowTaskCard] = useState(false);
  const [areFilesUploaded, setAreFilesUploaded] = useState(false);
  const [taskData, setTaskData] = useState({});
  const [worksheetsData, setWorksheetsData] = useState();
  const [testsData, setTestsData] = useState();
  const [rowSelection, setRowSelection] = useState({});
  const { selectedTaskId } = useStore();
  const toast = useToast();
  const { client } = useStore();
  const { saveWorksheet } = useSaveWorksheetData();
  const { saveWorksheet: saveTestData } = useSaveWorksheetData("tests");
  const { getTaskDetails } = useTaskDetails();

  useEffect(() => {
    if (selectedTaskId) {
      getTaskDetails(selectedTaskId).then((res) => {
        setTaskData(res.taskData);
        setAreFilesUploaded(true);
        setShowTaskCard(true);
      });
    }
  }, []);

  const nextStep = () =>
    setActive((current) => (current < 5 ? current + 1 : current));

  const getNextBtnLabel = () => {
    switch (active) {
      case 0:
        return "Generate Worksheets";
      case 1:
        return "Generate Tests";
      case 2:
        return "Generate Test Plan";
      case 3:
        return "Export";
      default:
        return "Next";
    }
  };

  const disableNextBtn = () => {
    switch (active) {
      case 0:
        return !showTaskCard;
      case 1:
        return false;
      case 2:
        return false;
      case 3:
        return false;
      default:
        return false;
    }
  };

  const handleExportClick = () => {
    if (active === 1) {
      setOpenExportModal(true);
    }
  };

  const handleSave = () => {
    switch (active) {
      case 0: {
        saveTaskData();
        break;
      }
      case 1: {
        saveWorksheet({
          product: taskData.product,
          ...worksheetsData,
        }).then((res) => {
          toast.success("Details saved successfully");
        });
        break;
      }
      case 2: {
        saveTestData({
          product: taskData.product,
          ...testsData,
        }).then((res) => {
          toast.success("Details saved successfully");
        });
        break;
      }
      default:
        break;
    }
  };

  const saveTaskData = () => {
    saveImportDocsData(taskData, specFile, methodFile).then(() => {
      toast.success("Deatils saved successfully");
    });
  };

  const getExportTableData = () => {
    const data = [];
    if (worksheetsData) {
      Object.values(worksheetsData).forEach((item) => {
        const rows = Object.keys(item[0]);
        rows.forEach((rowKey) => {
          const row = item[0][rowKey] || {};
          if (row.content) {
            data.push({
              code: taskData.code,
              specification: taskData.specId || "-",
              methodId: taskData.methodId || "-",
              name: row.name,
              type: row.type,
              content: row.content,
            });
          }
        });
      });
    }
    return data;
  };

  const getExportStepData = () => {
    const indices = Object.keys(rowSelection);
    const data = getExportTableData();
    const exportData = [];
    indices.forEach((item) => {
      exportData.push(data[item]);
    });
    return exportData;
  };

  const handleExport = () => {
    setOpenExportModal(false);
    setActive(4);
  };

  return (
    <>
      <Group align="center">
        <IconDatabase stroke={3} size={32} />
        <Title order={2}>Create Master Data</Title>
      </Group>

      <Stepper
        active={active}
        onStepClick={setActive}
        size="sm"
        p={32}
        className="master-data-create-stepper"
      >
        <Stepper.Step label="Input Docs">
          <ImportDocs
            taskData={taskData}
            setTaskData={setTaskData}
            showTaskCard={showTaskCard}
            setShowTaskCard={setShowTaskCard}
            specFile={specFile}
            methodFile={methodFile}
            setSpecFile={setSpecFile}
            setMethodFile={setMethodFile}
            setData={setWorksheetsData}
            showOnlyMethodUpload={client === "neuland"}
            areFilesUploaded={areFilesUploaded}
            setAreFilesUploaded={setAreFilesUploaded}
          />
        </Stepper.Step>
        <Stepper.Step label="Worksheets">
          <DetailsBox
            data={taskData}
            setData={setTaskData}
            onSave={saveTaskData}
          />
          <Worksheets
            taskData={taskData}
            worksheetsData={worksheetsData}
            setWorksheetsData={setWorksheetsData}
            setTestsData={setTestsData}
          />
        </Stepper.Step>
        <Stepper.Step label="Tests">
          <DetailsBox
            data={taskData}
            setData={setTaskData}
            onSave={saveTaskData}
          />
          <Tests
            testsData={testsData}
            taskData={taskData}
            setTestsData={setTestsData}
          />
        </Stepper.Step>
        <Stepper.Step label="Test Plan">
          <DetailsBox
            data={taskData}
            setData={setTaskData}
            onSave={saveTaskData}
          />
          <TestPlan taskData={taskData} />
        </Stepper.Step>
        <Stepper.Step label="Export">
          <Export data={getExportStepData()} />
        </Stepper.Step>
      </Stepper>

      <Flex justify="space-between" mt="xl" mx="32">
        <Button variant="filled" onClick={handleSave}>
          Save
        </Button>
        <Group>
          {active > 0 && active < 3 && (
            <Button
              variant="filled"
              onClick={() => handleExportClick("export")}
            >
              Export
            </Button>
          )}
          {active <= 3 && (
            <Button onClick={nextStep} disabled={disableNextBtn()}>
              {getNextBtnLabel()}
            </Button>
          )}
        </Group>
        <ExportModal
          open={openExportModal}
          handleClose={() => setOpenExportModal(false)}
          title={"Export"}
          data={getExportTableData()}
          handleExport={handleExport}
          rowSelection={rowSelection}
          setRowSelection={setRowSelection}
        />
      </Flex>
    </>
  );
};

export default CreateFlow;
