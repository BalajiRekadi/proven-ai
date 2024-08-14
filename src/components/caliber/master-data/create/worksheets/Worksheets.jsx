import React, { useEffect } from "react";
import {
  AccordionGroup,
  AccordionTable,
} from "../../../../../shared/components";
import { deepClone } from "../../../../../shared/utilities";
import { useStore } from "../../../../../store/useStore";
import {
  useGenerateWorksheets,
  useRunWorksheet,
} from "../../../../../api/hooks";

const Worksheets = ({ taskData, worksheetsData, setWorksheetsData }) => {
  const { client } = useStore();
  const { generateWorksheets } = useGenerateWorksheets();
  const { runWorksheets } = useRunWorksheet();

  useEffect(() => {
    if (taskData.product && !worksheetsData) {
      generateWorksheets(taskData.product).then((data) => {
        setWorksheetsData(data);
      });
    }
  }, [taskData.product]);

  const getAccordions = () => {
    let accordions = [];
    if (worksheetsData) {
      Object.keys(worksheetsData).forEach((key) => {
        if (key) {
          accordions.push({
            label: key,
            content: (
              <AccordionTable
                // TODO: Remove ternary operator when properly mapping api
                label={key}
                data={worksheetsData[key][0] == {} ? [] : worksheetsData[key]}
                updateData={updateWorkSheetData}
                onRun={handleRunClick}
              />
            ),
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
    if (client === "neuland") {
      const payload = {
        product: taskData.product,
        body: { WorkSheetContent: data.input?.value },
      };
      runWorksheets(payload).then((res) => {
        setWorksheetsData((prev) => {
          const clone = deepClone(prev);
          clone[label][0][data.solution].content =
            res["WorkSheetContent"][0]["WorkSheetContent"][1];
          return clone;
        });
      });
    } else {
      const item = deepClone(worksheetsData[label]);
      item[0] = { [data.solution]: item[0][data.solution] };
      const payload = {
        product: taskData.product,
        body: {
          [label]: item,
        },
      };
      runWorksheets(payload).then((res) => {
        setWorksheetsData((prev) => {
          const clone = deepClone(prev);
          clone[label][0][data.solution].content =
            res[label][0][data.solution][1];
          return clone;
        });
      });
    }
  };

  return (
    <AccordionGroup
      accordions={getAccordions()}
      groupTitle={"Work Sheet Details"}
    />
  );
};

export default Worksheets;
