import React from "react";
import { AccordionGroup, DetailsBox } from "../../../../shared/components";
import AccordianTableData from "./AccordianTableData";

const Worksheets = () => {
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
      content: <AccordianTableData />,
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

export default Worksheets;
