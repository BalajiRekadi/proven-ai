import React from "react";
import { AccordionGroup } from "../../../../shared/components";

const TestPlan = () => {
  const accordions = [
    {
      label: "Description",
      content: <div>Hello</div>,
      isCustom: true,
    },
  ];
  return (
    <AccordionGroup
      accordions={accordions}
      groupTitle={"Test Plan"}
      updateData={() => undefined}
      onRun={() => undefined}
    />
  );
};

export default TestPlan;
