import { Button, Flex, Group, Stepper, Title } from "@mantine/core";
import { saveImportDocsData } from "../../../../api/helpers";
import React, { useState } from "react";
import { IconDatabase } from "@tabler/icons-react";
import ImportDocs from "../../../screens/import-docs/ImportDocs";
import { DetailsBox, TextModal } from "../../../../shared/components";
import Export from "../../../screens/export/Export";
import { useToast } from "../../../../shared/components/toast/useToast";
import Analysis from "./Analysis/Analysis";
import Product from "./Product";
import { useStore } from "../../../../store/useStore";

const CreateFlow = () => {
  const [active, setActive] = useState(0);
  const [modalOpened, setModalOpened] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [specFile, setSpecFile] = useState(null);
  const [methodFile, setMethodFile] = useState(null);
  const [showTaskCard, setShowTaskCard] = useState(false);
  const [taskData, setTaskData] = useState({});
  const [productDetails, setProductDetails] = useState({
    product: {},
    product_grade: {},
  });
  const [analysisData, setAnalysisData] = useState();
  const [productDetailsLoaded, setProductDetailsLoaded] = useState(false);
  const { client } = useStore();

  const toast = useToast();

  const nextStep = () =>
    setActive((current) => (current < 4 ? current + 1 : current));

  const getNextBtnLabel = () => {
    switch (active) {
      case 0:
        return "Generate";
      case 1:
        return "Generate Analysis";
      case 2:
        return "Export";
      default:
        return "Next";
    }
  };

  const handleContentClick = (content) => {
    setModalContent(content);
    setModalOpened(true);
  };

  const handleSave = () => {
    switch (active) {
      case 0: {
        saveTaskData();
        break;
      }
      case 1: {
        saveTaskData();
        break;
      }
      case 2: {
        saveTaskData();
        break;
      }
      default:
        break;
    }
  };

  const saveTaskData = () => {
    saveImportDocsData(taskData, specFile, methodFile, "labware").then(() => {
      toast.success("Deatils saved successfully");
    });
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
            setData={setProductDetails}
            showOnlyMethodUpload={client === "neuland"}
          />
        </Stepper.Step>
        <Stepper.Step label="Product">
          <DetailsBox
            data={taskData}
            setData={setTaskData}
            onSave={saveTaskData}
          />
          <Product
            taskData={taskData}
            productDetails={productDetails}
            setProductDetails={setProductDetails}
            productDetailsLoaded={productDetailsLoaded}
            setProductDetailsLoaded={setProductDetailsLoaded}
          />
        </Stepper.Step>
        <Stepper.Step label="Analysis">
          <DetailsBox
            data={taskData}
            setData={setTaskData}
            onSave={saveTaskData}
          />
          <Analysis
            taskData={taskData}
            analysisData={analysisData}
            setAnalysisData={setAnalysisData}
          />
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
          {active > 0 && active < 2 && (
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
        <TextModal
          open={modalOpened}
          onClose={() => setModalOpened(false)}
          title={"Description"}
          content={modalContent}
        />
      </Flex>
    </>
  );
};

export default CreateFlow;
