import React, { useEffect } from "react";
import { AccordionGroup } from "../../../../../shared/components";
import AnalysisAccordionTable from "./AnalysisAccordionTable";
import { useToast } from "../../../../../shared/components/toast/useToast";
import { runAnalysis } from "../../../../../api/helpers";
import { deepClone } from "../../../../../shared/utilities";
import { useGenerateWorksheets } from "../../../../../api/hooks";
import { useStore } from "../../../../../store/useStore";

const Analysis = ({ taskData, analysisData, setAnalysisData }) => {
  const toast = useToast();
  const { module, client } = useStore();
  const { generateWorksheets } = useGenerateWorksheets("analysis");

  useEffect(() => {
    // TODO: Remove comment
    if (taskData.code && !analysisData) {
      toast.load("Generating Analysis..");
      generateWorksheets(taskData.taskId).then((data) => {
        setAnalysisData(data);
      });
    }
  }, [taskData.code]);

  const updateAnalysisData = (event, field, accordion, data, index) => {
    setAnalysisData((prev) => {
      const clonedData = deepClone(prev);
      const solution = clonedData[index];
      const fieldIndex = solution.subHeadings.findIndex(
        (i) => i == data.solution
      );
      solution[field][fieldIndex] = event.target.value;
      return clonedData;
    });
  };

  const handleRunClick = (label, data, index) => {
    toast.load("Loading solution details..");
    let item = deepClone(analysisData[index]);
    const fieldIndex = item.subHeadings.findIndex((i) => i == data.solution);

    runAnalysis(
      taskData.taskId,
      label,
      item,
      data.solution,
      module,
      client,
      fieldIndex
    )
      .then((res) => {
        setAnalysisData((prev) => {
          const clone = deepClone(prev);
          if (!clone[index].runData) {
            clone[index].runData = [];
          }
          clone[index].runData[fieldIndex] = res;
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
      analysisData.forEach((accordion, index) => {
        accordions.push({
          label: accordion.heading,
          content: (
            <AnalysisAccordionTable
              index={index}
              data={accordion}
              label={accordion.heading}
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
