import React, { useEffect, useState } from "react";
import {
  AccordionGroup,
  DetailsBox,
  Toast,
} from "../../../../shared/components";
import { fetchWorksheets, saveImportDocsData } from "../../../../api/helpers";
import { deepClone } from "../../../../shared/utilities";

const Worksheets = ({
  taskData,
  setTaskData,
  worksheetsData,
  setWorksheetsData,
}) => {
  const [showToast, setShowToast] = useState(true);
  const [loadingToast, setLoadingToast] = useState(true);
  const [isPersistant, setIsPersistant] = useState(true);
  const [toastMessage, setToastMessage] = useState(
    "Work Sheet Details are loading.."
  );
  const [showSaveToast, setShowSaveToast] = useState(false);

  useEffect(() => {
    if (!taskData.product) {
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

  const saveTaskData = () => {
    const payload = {
      ...taskData,
      Product: taskData.product,
      MARKET: taskData.market,
      company: taskData.company,
      facility: taskData.facility,
    };
    saveImportDocsData(payload).then((data) => {
      setShowSaveToast(true);
    });
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

  return (
    <>
      <DetailsBox data={taskData} setData={setTaskData} onSave={saveTaskData} />
      <AccordionGroup
        accordions={getAccordions()}
        updateData={updateWorkSheetData}
        groupTitle={"Work Sheet Details"}
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
      {showSaveToast && (
        <Toast
          show={showToast}
          message={"Details saved successfully"}
          color={"green"}
          isLoading={false}
          onHide={() => setShowSaveToast(false)}
          isPersistant={false}
        />
      )}
    </>
  );
};

export default Worksheets;
