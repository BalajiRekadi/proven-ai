import { Button, Flex, Group, Stepper, Title, Stack } from "@mantine/core";
import { saveImportDocsData } from "../../../../api/helpers";
import { useState, useEffect } from "react";
import { IconDatabase } from "@tabler/icons-react";
import ImportDocs from "../../../screens/import-docs/ImportDocs";
import { DetailsBox, TextModal } from "../../../../shared/components";
import Export from "../../../screens/export/Export";
import { useToast } from "../../../../shared/components/toast/useToast";
import Analysis from "./Analysis/Analysis";
import Product from "./Product";
import { useStore } from "../../../../store/useStore";
import { useTaskDetails } from "../../../../api/hooks";
import { generateProductDetails } from "../../../../api/helpers";
import AnnotationValidations from "./AnnotationValidations";

const CreateFlow = () => {
  const [active, setActive] = useState(0);
  const [modalOpened, setModalOpened] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [specFile, setSpecFile] = useState(null);
  const [methodFile, setMethodFile] = useState(null);
  const [specFileName, setSpecFileName] = useState("");
  const [methodFileName, setMethodFileName] = useState("");
  const [showTaskCard, setShowTaskCard] = useState(false);
  const [taskData, setTaskData] = useState({});
  const [limitsData, setLimitsData] = useState({});
  const [productDetails, setProductDetails] = useState({
    product: {},
    product_grade: {},
  });
  const [analysisData, setAnalysisData] = useState();
  const [productDetailsLoaded, setProductDetailsLoaded] = useState(false);
  const { module, client, selectedTaskId } = useStore();
  const toast = useToast();
  const { getTaskDetails } = useTaskDetails();
  const [areFilesUploaded, setAreFilesUploaded] = useState(false);
  const [annotationValidations, setAnnotationValidations] = useState({
    Issues: [],
  });
  const [showAnnotationsValidation, setShowAnnotationsValidation] =
    useState(false);

  // populate generated data when clicking on a task in dashboard
  useEffect(() => {
    if (selectedTaskId) {
      getTaskDetails(selectedTaskId).then((res) => {
        setSpecFileName(res.taskData.specFileName);
        setMethodFileName(res.taskData.methodFileName);
        // import docs step
        setTaskData(res.taskData);
        setLimitsData(res.limitsData);
        setAreFilesUploaded(true);
        setShowTaskCard(true);
        // product step
        setProductDetails(res.productData);
        setProductDetailsLoaded(true);
        // Analysis step
        setAnalysisData(res.analysisData);
        // show annotation validations
        if (res.annotationValidation?.ErrorCount) {
          setShowAnnotationsValidation(true);
        }
        setAnnotationValidations(res.annotationValidation);
      });
    }
  }, [selectedTaskId]);

  const nextStep = () =>
    setActive((current) => (current < 4 ? current + 1 : current));

  const handleGenerateProductDetails = () => {
    if (!productDetailsLoaded) {
      toast.load("Generating product details");
      generateProductDetails(taskData, module, client).then((res) => {
        toast.success("Generated product details successfully");
        setProductDetailsLoaded(true);
        setProductDetails(res);
      });
    }
  };

  const getNextBtnLabel = () => {
    switch (active) {
      case 0:
        return "Next";
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
    saveImportDocsData(
      taskData,
      limitsData,
      specFile,
      methodFile,
      module,
      client
    ).then(() => {
      toast.success("Deatils saved successfully");
    });
  };

  const disableNextBtn = () => {
    switch (active) {
      case 0:
        return !showTaskCard;
      case 1:
        return !productDetailsLoaded;
      case 2:
        return false;
      default:
        return false;
    }
  };

  return (
    <Stack>
      <Group align="center">
        <IconDatabase stroke={3} size={32} />
        <Title order={2}>Create Master Data</Title>
      </Group>

      <Stack justify="space-between" h={"85vh"}>
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
              specFileName={specFileName}
              methodFileName={methodFileName}
              setSpecFile={setSpecFile}
              setMethodFile={setMethodFile}
              setData={setProductDetails}
              showOnlyMethodUpload={client === "neuland"}
              areFilesUploaded={areFilesUploaded}
              setAreFilesUploaded={setAreFilesUploaded}
              limitsData={limitsData}
              setLimitsData={setLimitsData}
            />
          </Stepper.Step>
          <Stepper.Step label="Product">
            <DetailsBox
              data={taskData}
              setData={setTaskData}
              onSave={saveTaskData}
              showPrimaryBtn={true}
              onPrimaryBtnClick={handleGenerateProductDetails}
            />
            <Product
              productDetails={productDetails}
              productDetailsLoaded={productDetailsLoaded}
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

        <Flex justify="space-between" py="xl" mx="32">
          <Button variant="filled" onClick={handleSave}>
            Save
          </Button>
          <Group>
            {active > 0 && active < 2 && (
              <Button
                variant="filled"
                onClick={() => handleContentClick("Todo")}
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
        </Flex>
      </Stack>

      <TextModal
        open={modalOpened}
        onClose={() => setModalOpened(false)}
        title={"Description"}
        content={modalContent}
      />

      <AnnotationValidations
        annotationValidations={annotationValidations}
        open={showAnnotationsValidation}
        handleClose={() => setShowAnnotationsValidation(false)}
      />
    </Stack>
  );
};

export default CreateFlow;
