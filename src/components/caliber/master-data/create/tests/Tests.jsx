import React from "react";
import deepClone from "../../../../../shared/utilities/deepClone";
import useSaveWorksheetData from "../../../../../api/hooks/useSaveWorksheetData";
import {
  AccordionGroup,
  TestAccordionTable,
} from "../../../../../shared/components";

const Tests = ({ testsData, taskData, setTestsData }) => {
  const { saveWorksheet } = useSaveWorksheetData("tests");

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

  const getAccordions = () => {
    let accordions = [];
    if (testsData) {
      Object.keys(testsData).forEach((key) => {
        if (key) {
          accordions.push({
            label: key,
            content: (
              <TestAccordionTable
                // TODO: Remove ternary operator when properly mapping api
                label={key}
                data={testsData[key]}
                updateData={updateTestsData}
                saveTextModalContent={saveTextModalContent}
                onRun={undefined}
              />
            ),
          });
        }
      });
    }
    return accordions;
  };

  return (
    <AccordionGroup accordions={getAccordions()} groupTitle={"Tests Details"} />
  );
};

export default Tests;
