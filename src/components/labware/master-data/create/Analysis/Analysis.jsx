import { useEffect, useState } from "react";
import { AccordionGroup } from "../../../../../shared/components";
import AnalysisAccordionTable from "./AnalysisAccordionTable";
import { useToast } from "../../../../../shared/components/toast/useToast";
import { runAnalysis } from "../../../../../api/helpers";
import { deepClone } from "../../../../../shared/utilities";
import { useGenerateWorksheets } from "../../../../../api/hooks";
import { useStore } from "../../../../../store/useStore";
import { Box, Button, Flex, Popover, Title } from "@mantine/core";
import { IconStackPop } from "@tabler/icons-react";
import useMergeAll from "../../../../../api/hooks/useMergeAllAnalysis";
import AnalysisPopover from "./AnalysisPopover";

const Analysis = ({ taskData, analysisData, setAnalysisData }) => {
  const toast = useToast();
  const { module, client } = useStore();
  const { generateWorksheets } = useGenerateWorksheets("analysis");
  const { mergeAll } = useMergeAll();
  const [mergedData, setMergedData] = useState(null);

  useEffect(() => {
    if (taskData.code && !analysisData) {
      toast.load("Generating Analysis..");
      generateWorksheets(taskData.taskId).then((data) => {
        setAnalysisData(data);
      });
    }
  }, [taskData.code]);

  const updateAnalysisData = (event, field, accordion, row, index, column) => {
    setAnalysisData((prev) => {
      const clonedData = deepClone(prev);
      const solution = clonedData[index];
      const value =
        field == "stages" ||
        field == "specTypes" ||
        field == "batchLinks" ||
        field == "batchTypes" ||
        field == "analysisNames"
          ? event
          : event.target.value;
      solution[field][row.index] = value;
      return clonedData;
    });
  };

  const handleRunClick = (label, data, index) => {
    toast.load("Loading solution details..");
    let item = deepClone(analysisData[index]);

    runAnalysis(taskData.taskId, item, module, client, data.index)
      .then((res) => {
        setAnalysisData((prev) => {
          const clone = deepClone(prev);
          if (!clone[index].runResults) {
            clone[index].runResults = [];
          }
          clone[index].runResults[data.index] = [res];
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

  const hanldeMergeAll = () => {
    mergeAll(taskData.taskId).then((data) => {
      setMergedData(data);
    });
  };

  return (
    <>
      <Box py={16} pt={32}>
        <Title order={4}>Analysis Details</Title>
        <Flex justify={"flex-end"}>
          <Button.Group>
            <Button variant="light" onClick={() => hanldeMergeAll()}>
              Merge all
            </Button>
            <Popover position="top" withArrow shadow="md">
              <Popover.Target>
                <Button
                  p={0}
                  pl={10}
                  disabled={!mergedData}
                  leftSection={<IconStackPop size={24} />}
                ></Button>
              </Popover.Target>
              <AnalysisPopover tables={mergedData} />
            </Popover>
          </Button.Group>
        </Flex>
      </Box>
      <AccordionGroup accordions={getAccordions()} />
    </>
  );
};

export default Analysis;
