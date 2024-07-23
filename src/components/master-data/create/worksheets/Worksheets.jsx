import React, { useEffect, useState } from "react";
import { AccordionGroup, Toast } from "../../../../shared/components";
import { fetchWorksheets, runWorksheet } from "../../../../api/helpers";
import { deepClone } from "../../../../shared/utilities";

const Worksheets = ({ taskData, worksheetsData, setWorksheetsData }) => {
  const [showToast, setShowToast] = useState(false);
  const [loadingToast, setLoadingToast] = useState(true);
  const [isPersistant, setIsPersistant] = useState(true);
  const [toastMessage, setToastMessage] = useState(
    "Work Sheet Details are loading.."
  );

  useEffect(() => {
    if (taskData.product && !worksheetsData) {
      setShowToast(true);
      fetchWorksheets(taskData.product).then((data) => {
        setLoadingToast(false);
        setIsPersistant(false);
        setToastMessage("Worksheet details loaded successfully");
        setWorksheetsData(data);
      });
    }
  }, [taskData.product]);

  const getAccordions = () => {
    let accordions = [];
    if (worksheetsData) {
      Object.keys(worksheetsData).forEach((key) => {
        if (!key.includes("__")) {
          accordions.push({
            label: key,
            content: worksheetsData[key],
          });
        }
      });
    }
    return accordions;
  };

  const updateWorkSheetData = (event, field, accordion, data) => {
    setWorksheetsData((prev) => {
      const clonedData = deepClone(prev);
      const solutions = clonedData[accordion];
      solutions.forEach((sol) => {
        sol[data.solution][field] =
          field == "type" ? event : event.target.value;
      });
      return clonedData;
    });
  };

  const handleRunClick = (label, data) => {
    setShowToast(true);
    setToastMessage("Loading worksheet content..");
    setLoadingToast(true);
    setIsPersistant(true);
    const item = deepClone(worksheetsData[label]);
    item[0] = { [data.solution]: item[0][data.solution] };
    runWorksheet(taskData.product || "3000714", {
      [label]: item,
    }).then((res) => {
      setWorksheetsData((prev) => {
        const clone = deepClone(prev);
        clone[label][0][data.solution].content =
          res[label][0][data.solution][1];
        return clone;
      });
      setShowToast(true);
      setToastMessage("Worksheet content loaded successfully");
      setLoadingToast(false);
      setIsPersistant(false);
    });
  };

  return (
    <>
      <AccordionGroup
        accordions={getAccordions()}
        updateData={updateWorkSheetData}
        groupTitle={"Work Sheet Details"}
        onRun={handleRunClick}
      />
      {showToast && (
        <Toast
          show={showToast}
          message={toastMessage}
          color={"green"}
          isLoading={loadingToast}
          onHide={() => setShowToast(false)}
          isPersistant={isPersistant}
        />
      )}
    </>
  );
};

export default Worksheets;
