import React, { useState } from "react";
import { ActionIcon, Card, Flex, TextInput } from "@mantine/core";
import { IconCircleArrowDownFilled, IconEyeFilled } from "@tabler/icons-react";
import { downloadCSVFromArray } from "../utilities";
import TableViewModal from "./TableViewModal";

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
    downloadCSVFromArray([getContent()], "task");
  };

  const viewTaskDetails = () => {
    setShowTaskDetails(true);
  };

  const toggleModal = () => {
    setShowTaskDetails(!showTaskDetails);
  };

  const getContent = () => {
    let content = {};
    Object.keys(data).forEach((key) => {
      const value = data[key] || "NA";
      content[key] = value;
    });
    return content;
  };

  return (
    <>
      <Card shadow="sm" padding="lg" radius="md" w={"45rem"} withBorder>
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
          <Flex justify={"space-around"} gap={8} wrap={"wrap"}>
            <TextInput
              label={"Product"}
              value={data?.product}
              placeholder="NA"
              onChange={(event) => handleValueChange(event, "product")}
            />
            <TextInput
              label={"Code"}
              value={data?.code}
              placeholder="NA"
              onChange={(event) => handleValueChange(event, "code")}
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
      <TableViewModal
        open={showTaskDetails}
        onClose={toggleModal}
        label={"Task Details"}
        content={[getContent()]}
      />
    </>
  );
};

export default InfoCard;
