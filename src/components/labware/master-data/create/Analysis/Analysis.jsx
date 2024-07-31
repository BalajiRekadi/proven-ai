import React, { useEffect } from "react";
import { AccordionGroup } from "../../../../../shared/components";
import AnalysisAccordionTable from "./AnalysisAccordionTable";
import { useToast } from "../../../../../shared/components/toast/useToast";
import { fetchWorksheets, runAnalysis } from "../../../../../api/helpers";
import { deepClone } from "../../../../../shared/utilities";

const Analysis = ({ taskData, analysisData, setAnalysisData }) => {
  const toast = useToast();

  useEffect(() => {
    if (taskData.code && !analysisData) {
      toast.load("Generating Analysis..");
      fetchWorksheets(taskData.code).then((data) => {
        toast.success("Analysis generated successfully");
        setAnalysisData(data);
      });
    }
  }, [taskData.code]);

  const updateAnalysisData = (event, field, accordion, data) => {
    setAnalysisData((prev) => {
      const clonedData = deepClone(prev);
      const solutions = clonedData[accordion];
      solutions[data.solution][field] = event.target.value;
      return clonedData;
    });
  };

  const handleRunClick = (label, data) => {
    toast.load("Loading solution details..");
    let item = deepClone(analysisData[label]);
    item = { [data.solution]: item[data.solution] };
    runAnalysis(taskData, label, item, data.solution)
      .then((res) => {
        setAnalysisData((prev) => {
          const clone = deepClone(prev);
          clone[label][data.solution].runData = res;
          return clone;
        });
        toast.success("Solution data loaded successfully");
      })
      .catch((err) => {
        toast.error("Failed to load data");
      });
  };

  const getAccordions = () => {
    let accordions = [];
    if (analysisData) {
      Object.keys(analysisData).forEach((key) => {
        accordions.push({
          label: key,
          content: (
            <AnalysisAccordionTable
              data={analysisData[key]}
              label={key}
              updateData={updateAnalysisData}
              onRun={handleRunClick}
            />
          ),
        });
      });
    }
    return accordions;
  };

  return (
    <AccordionGroup
      accordions={getAccordions()}
      groupTitle={"Analysis Details"}
    />
  );
};

export default Analysis;
