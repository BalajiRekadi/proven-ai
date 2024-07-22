import React, { useState } from "react";
import { Button, Flex, Group, Stepper, Title } from "@mantine/core";
import ImportDocs from "./import-docs/ImportDocs";
import Worksheets from "./worksheets/Worksheets";
import { IconDatabase } from "@tabler/icons-react";
import Export from "./export/Export";
import Tests from "./tests/Tests";
import TestPlan from "./test-plan/TestPlan";
import "./create.css";
import DescriptionModal from "../../home/DescriptionModal";
import { saveImportDocsData, saveWorksheetData } from "../../../api/helpers";
import { Toast } from "../../../shared/components";
import { appendDocxExtension } from "../../../shared/utilities";

const CreateFlow = () => {
  const [active, setActive] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [specFile, setSpecFile] = useState(null);
  const [methodFile, setMethodFile] = useState(null);
  const [showTaskCard, setShowTaskCard] = useState(false);
  const [taskData, setTaskData] = useState({});
  const [worksheetsData, setWorksheetsData] = useState();

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

  const handleContentClick = (content) => {
    setModalContent(content);
    setModalOpened(true);
  };

  // TODO: define separate footer btns for each step and rework this method
  const handleSave = () => {
    if (active == 0) {
      const payload = {
        ...taskData,
        filename1: appendDocxExtension(specFile?.name),
        filename2: appendDocxExtension(methodFile?.name),
        Product: taskData.product,
        MARKET: taskData.market,
        company: taskData.company,
        facility: taskData.facility,
      };
      saveImportDocsData(payload).then((data) => {
        setShowToast(true);
      });
    } else if (active == 1) {
      saveWorksheetData({
        product: taskData.product,
        ...worksheetsData,
      }).then((res) => {
        setShowToast(true);
      });
    }
  };

  const handleToastHide = () => {
    setShowToast(false);
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
          />
        </Stepper.Step>
        <Stepper.Step label="Worksheets">
          <Worksheets
            taskData={taskData}
            setTaskData={setTaskData}
            worksheetsData={worksheetsData}
            setWorksheetsData={setWorksheetsData}
          />
        </Stepper.Step>
        <Stepper.Step label="Tests">
          <Tests />
        </Stepper.Step>
        <Stepper.Step label="Test Plan">
          <TestPlan />
        </Stepper.Step>
        <Stepper.Step label="Export">
          <Export />
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
              onClick={() => handleContentClick("export")}
            >
              Export
            </Button>
          )}
          {active <= 3 && (
            <Button onClick={nextStep}>{getNextBtnLabel()}</Button>
          )}
        </Group>
        <DescriptionModal
          opened={modalOpened}
          onClose={() => setModalOpened(false)}
          content={modalContent}
        />
      </Flex>
      {showToast && (
        <Toast
          show={showToast}
          message={"Saved details successfully"}
          color={"green"}
          isLoading={false}
          onHide={handleToastHide}
          isPersistant={false}
        />
      )}
    </>
  );
};

export default CreateFlow;
