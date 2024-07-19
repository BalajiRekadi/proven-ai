import React from "react";
import { AccordionGroup, DetailsBox } from "../../../../shared/components";

const TestPlan = () => {
  const accordions = [
    {
      label: "Description",
      content: <div>Hello</div>,
    },
    {
      label: "Water",
      content: "Todo",
    },
    {
      label: "Assay",
      content: "Todo",
    },
    {
      label: "Impurities",
      content: "Todo",
    },
  ];
  return (
    <>
      <DetailsBox />
      <AccordionGroup
        accordions={accordions}
        groupTitle={"Work Sheet Details"}
      />
    </>
  );
};

export default TestPlan;
