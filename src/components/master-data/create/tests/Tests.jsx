import React from "react";
import { AccordionGroup } from "../../../../shared/components";
import AssayTable from "./AssayTable";

const Tests = () => {
  const accordions = [
    {
      label: "Description",
      content: "Todo",
      isCustom: true,
    },
    {
      label: "Water",
      content: "Todo",
      isCustom: true,
    },
    {
      label: "Assay",
      content: <AssayTable />,
      isCustom: true,
    },
    {
      label: "Impurities",
      content: "Todo",
      isCustom: true,
    },
  ];
  return (
    <>
      <AccordionGroup
        accordions={accordions}
        groupTitle={"Test Details"}
        updateData={() => undefined}
        onRun={() => undefined}
      />
    </>
  );
};

export default Tests;
