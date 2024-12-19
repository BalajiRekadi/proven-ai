import { Modal, Title, Text, Space, Box, Flex, Button } from "@mantine/core";

const AnnotationValidations = ({
  open,
  handleClose,
  annotationValidations = { Issues: [] },
}) => {
  return (
    <Modal
      opened={open}
      onClose={handleClose}
      title={<Title order={3}>{"Annotation Errors"}</Title>}
      size={"xl"}
      centered
    >
      {annotationValidations.Issues.map((issue, index) => (
        <Box p={16} key={index}>
          <Title order={5}>{issue.Type}</Title>
          <Text>{issue.Message}</Text>
          <Text>{issue.MessageCount || "-"}</Text>
          <Space h="md" />
        </Box>
      ))}
      <Flex justify={"flex-end"}>
        <Button onClick={handleClose}>Close</Button>
      </Flex>
    </Modal>
  );
};

export default AnnotationValidations;
