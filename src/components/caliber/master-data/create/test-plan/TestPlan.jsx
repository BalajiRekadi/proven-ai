import React from "react";
import { AccordionGroup } from "../../../../../shared/components";

const TestPlan = ({ taskData }) => {
  const accordions = [
    {
      label: taskData?.specId || "Description",
      content: <div>Todo</div>,
    },
  ];
  return <AccordionGroup accordions={accordions} groupTitle={"Test Plan"} />;
};

export default TestPlan;
