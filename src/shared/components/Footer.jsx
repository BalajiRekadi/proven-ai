import { Flex, Button, Group } from "@mantine/core";

const Footer = (
  handleSave,
  active,
  handleContentClick,
  nextStep,
  getNextBtnLabel
) => {
  return (
    <Flex justify="space-between" mt="xl" mx="32">
      <Button variant="filled" onClick={handleSave}>
        Save
      </Button>
      <Group>
        {active > 0 && active < 2 && (
          <Button variant="filled" onClick={() => handleContentClick("Todo")}>
            Export
          </Button>
        )}
        {active <= 3 && <Button onClick={nextStep}>{getNextBtnLabel()}</Button>}
      </Group>
    </Flex>
  );
};

export default Footer;
