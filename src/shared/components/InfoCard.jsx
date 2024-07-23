import React, { useState } from "react";
import { ActionIcon, Card, Flex, TextInput } from "@mantine/core";
import { IconCircleArrowDownFilled, IconEyeFilled } from "@tabler/icons-react";
import { downloadJSONFromObj } from "../utilities";
import TextModal from "./TextModal";

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
    downloadJSONFromObj(data, "task");
  };

  const viewTaskDetails = () => {
    setShowTaskDetails(true);
  };

  const toggleModal = () => {
    setShowTaskDetails(!showTaskDetails);
  };

  const getContent = () => {
    let content = "";
    Object.keys(data).forEach((key) => {
      const value = data[key] || "NA";
      content = content + `${key}: ${value}\n`;
    });
    return content;
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
      <TextModal
        title="Task Details"
        open={showTaskDetails}
        onClose={toggleModal}
        content={getContent()}
      />
    </>
  );
};

export default InfoCard;
