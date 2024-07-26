import React from "react";
import { AccordionGroup } from "../../../../../shared/components";
import AnalysisAccordionTable from "./AnalysisAccordionTable";

const Analysis = () => {
  const analysisData = [
    {
      solution: "Mobile Phase",
      name: "PARA DISS 0121",
      input: "",
      stage: "",
      specType: "",
      batchLink: "",
      batchType: "",
    },
  ];
  const accordions = [
    {
      label: "Assay",
      content: (
        <AnalysisAccordionTable
          data={analysisData}
          label={""}
          updateData={undefined}
          onRun={undefined}
        />
      ),
    },
  ];
  return <AccordionGroup accordions={accordions} groupTitle={"Test Plan"} />;
};

export default Analysis;
