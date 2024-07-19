import React from "react";
import { AccordionGroup, DetailsBox } from "../../../../shared/components";
import AssayTable from "./AssayTable";

const Tests = () => {
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
      content: <AssayTable />,
    },
    {
      label: "Impurities",
      content: "Todo",
    },
  ];
  return (
    <>
      <DetailsBox />
      <AccordionGroup accordions={accordions} groupTitle={"Test Details"} />
    </>
  );
};

export default Tests;
