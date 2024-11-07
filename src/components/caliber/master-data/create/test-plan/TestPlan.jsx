import { AccordionGroup } from "../../../../../shared/components";
import { Box, Title } from "@mantine/core";

const TestPlan = ({ taskData }) => {
  const accordions = [
    {
      label: taskData?.specId || "Description",
      content: <div>Todo</div>,
    },
  ];
  return (
    <>
      <Box py={16} pt={32}>
        <Title order={4}>Test Plan</Title>
      </Box>
      <AccordionGroup accordions={accordions} />;
    </>
  );
};

export default TestPlan;
