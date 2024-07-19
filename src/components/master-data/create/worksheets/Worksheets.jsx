import React from "react";
import { AccordionGroup, DetailsBox } from "../../../../shared/components";
import AccordianTableData from "./AccordianTableData";

const Worksheets = () => {
  const accordions = [
    {
      label: "Description",
      content: <AccordianTableData />,
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
      <AccordionGroup accordions={accordions} />
    </>
  );
};

export default Worksheets;
