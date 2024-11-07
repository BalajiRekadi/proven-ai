import React, { useEffect } from "react";
import deepClone from "../../../../../shared/utilities/deepClone";
import useSaveWorksheetData from "../../../../../api/hooks/useSaveWorksheetData";
import {
  AccordionGroup,
  TestAccordionTable,
} from "../../../../../shared/components";
import { useToast } from "../../../../../shared/components/toast/useToast";
import useRunTestDetails from "../../../../../api/hooks/useRunTestDetails";
import { Box, Title } from "@mantine/core";

const Tests = ({ testsData, taskData, setTestsData }) => {
  const { saveWorksheet } = useSaveWorksheetData("tests");
  const { runTestDetails } = useRunTestDetails();
  const toast = useToast();

  useEffect(() => {
    if (testsData) {
      toast.success("Generated Tests details successfully");
    }
  }, []);

  const saveTextModalContent = (content, row, label, property) => {
    const clone = deepClone(testsData);
    clone[label][property] = content;
    saveWorksheet({
      product: taskData.product,
      ...clone,
    }).then((res) => {
      setTestsData(clone);
    });
  };

  const updateTestsData = (event, field, accordion, data) => {
    setTestsData((prev) => {
      const clonedData = deepClone(prev);
      const test = clonedData[accordion];
      test[field] = event.target.value;
      return clonedData;
    });
  };

  const handleRunClick = (label, data) => {
    const payload = {
      Code: taskData.product,
      specid: taskData.specId,
      testname: data.testName,
      TestCode: data.testCode,
      MethodNo: taskData.methodId,
      TestCategory: data.TestCategory,
      TestTechnique: data.TestTechnique,
      TestType: data.TestType,
      Text: data.input[0],
    };
    runTestDetails(payload).then((res) => {
      setTestsData((prev) => {
        const clone = deepClone(prev);
        const test = clone[data.testName];
        test.content = res;
        return clone;
      });
    });
  };

  const getAccordions = () => {
    let accordions = [];
    if (testsData) {
      Object.keys(testsData).forEach((key) => {
        if (key) {
          accordions.push({
            label: key,
            content: (
              <TestAccordionTable
                label={key}
                data={testsData[key]}
                updateData={updateTestsData}
                saveTextModalContent={saveTextModalContent}
                onRun={handleRunClick}
              />
            ),
          });
        }
      });
    }
    return accordions;
  };

  return (
    <>
      <Box py={16} pt={32}>
        <Title order={4}>Tests Details</Title>
      </Box>
      <AccordionGroup accordions={getAccordions()} />
    </>
  );
};

export default Tests;
