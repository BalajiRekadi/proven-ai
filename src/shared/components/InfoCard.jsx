import React, { useState } from "react";
import { ActionIcon, Card, Flex, TextInput } from "@mantine/core";
import { IconCircleArrowDownFilled, IconEyeFilled } from "@tabler/icons-react";
import { downloadJSONFromObj } from "../utilities";
import TaskDetailsModal from "./TaskDetailsModal";

const InfoCard = ({ data, type, typeValue, setTaskData }) => {
  const [showTaskDetails, setShowTaskDetails] = useState(false);

  const handleValueChange = (event, field) => {
    if (field === "Spec") {
      setTaskData({ ...data, specId: event.target.value });
    } else if (field === "Method") {
      setTaskData({ ...data, methodId: event.target.value });
    } else {
      setTaskData({ ...data, [field]: event.target.value });
    }
  };

  const handleDownload = () => {
    downloadJSONFromObj(data, "task.json");
  };

  const viewTaskDetails = () => {
    setShowTaskDetails(true);
  };

  const toggleModal = () => {
    setShowTaskDetails(!showTaskDetails);
  };

  return (
    <>
      <Card shadow="sm" padding="lg" radius="md" w={"30rem"} withBorder>
        <Card.Section p={16}>
          <Flex justify={"right"} gap={8} pb={36}>
            <ActionIcon variant="subtle">
              <IconEyeFilled color="var(--gray)" onClick={viewTaskDetails} />
            </ActionIcon>
            <ActionIcon variant="subtle">
              <IconCircleArrowDownFilled
                color="var(--gray)"
                onClick={handleDownload}
              />
            </ActionIcon>
          </Flex>
          <Flex justify={"space-between"} gap={8}>
            <TextInput
              label={"Product"}
              value={data?.product}
              placeholder="NA"
              onChange={(event) => handleValueChange(event, "product")}
            />
            <TextInput
              label={"Market"}
              value={data?.market}
              placeholder="NA"
              onChange={(event) => handleValueChange(event, "market")}
            />
            <TextInput
              label={type}
              value={typeValue}
              placeholder="NA"
              onChange={(event) => handleValueChange(event, type)}
            />
          </Flex>
        </Card.Section>
      </Card>
      <TaskDetailsModal
        title="Task Details"
        open={showTaskDetails}
        onClose={toggleModal}
        content={data}
      />
    </>
  );
};

export default InfoCard;
