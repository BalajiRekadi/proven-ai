import { Accordion, Box } from "@mantine/core";

const AccordionGroup = ({ accordions }) => {
  return (
    <>
      <Box>
        <Accordion
          variant="separated"
          styles={{
            item: {
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          {accordions.map((acc) => (
            <Accordion.Item value={acc.label} key={acc.label}>
              <Accordion.Control>{acc.label}</Accordion.Control>
              <Accordion.Panel>{acc.content}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Box>
    </>
  );
};

export default AccordionGroup;
