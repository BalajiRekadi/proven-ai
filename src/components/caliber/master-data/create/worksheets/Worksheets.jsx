import React, { useEffect } from "react";
import {
  AccordionGroup,
  AccordionTable,
} from "../../../../../shared/components";
import { fetchWorksheets, runWorksheet } from "../../../../../api/helpers";
import { deepClone } from "../../../../../shared/utilities";
import { useToast } from "../../../../../shared/components/toast/useToast";

const Worksheets = ({ taskData, worksheetsData, setWorksheetsData }) => {
  const toast = useToast();
  useEffect(() => {
    if (taskData.product && !worksheetsData) {
      toast.load("Worksheet details are loading..");
      fetchWorksheets(taskData.product).then((data) => {
        toast.success("Worksheet details have been loaded successfully");
        setWorksheetsData(data);
      });
    }
  }, [taskData.product]);

  const getAccordions = () => {
    let accordions = [];
    if (worksheetsData) {
      Object.keys(worksheetsData).forEach((key) => {
        accordions.push({
          label: key,
          content: (
            <AccordionTable
              // TODO: Remove ternary operator when properly mapping api
              data={worksheetsData[key][0] == {} ? [] : worksheetsData[key]}
              updateData={updateWorkSheetData}
              onRun={handleRunClick}
            />
          ),
        });
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
  };

  return (
    <AccordionGroup
      accordions={getAccordions()}
      groupTitle={"Work Sheet Details"}
    />
  );
};

export default Worksheets;
