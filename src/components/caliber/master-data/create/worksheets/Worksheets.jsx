import React, { useEffect } from "react";
import {
  AccordionGroup,
  AccordionTable,
} from "../../../../../shared/components";
import { runNeulandWorksheet, runWorksheet } from "../../../../../api/helpers";
import { deepClone } from "../../../../../shared/utilities";
import { useToast } from "../../../../../shared/components/toast/useToast";
import { useStore } from "../../../../../store/useStore";
import { useGenerateWorksheets } from "../../../../../api/hooks";

const Worksheets = ({ taskData, worksheetsData, setWorksheetsData }) => {
  const toast = useToast();
  const { client } = useStore();
  const { generateWorksheets } = useGenerateWorksheets();

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
    toast.load("Loading worksheet content..");
    if (client === "neuland") {
      runNeulandWorksheet(taskData.product, data.input?.value).then((res) => {
        setWorksheetsData((prev) => {
          const clone = deepClone(prev);
          clone[label][0][data.solution].content =
            res["WorkSheetContent"][0]["WorkSheetContent"][1];
          return clone;
        });
        toast.success("Worksheet content loaded successfully");
      });
    } else {
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
        toast.success("Worksheet content loaded successfully");
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
