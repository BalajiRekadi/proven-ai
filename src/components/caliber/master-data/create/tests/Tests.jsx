import React from "react";
import { AccordionGroup } from "../../../../../shared/components";
import AssayTable from "./AssayTable";

const Tests = () => {
  const accordions = [
    {
      label: "Description",
      content: "Todo",
    },
    {
      label: "Water",
      content: "Todo",
    },
    {
      label: "Assay",
      content: <AssayTable />,
    },
    {
      label: "Impurities",
      content: "Todo",
    },
  ];
  return (
    <>
      <AccordionGroup accordions={accordions} groupTitle={"Test Details"} />
    </>
  );
};

export default Tests;
