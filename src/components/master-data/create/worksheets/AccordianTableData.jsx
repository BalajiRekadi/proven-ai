import React, { useMemo, useState } from "react";
import {
  Button,
  Group,
  Box,
  Select,
  ActionIcon,
  TextInput,
} from "@mantine/core";
import {
  IconRun,
  IconCopy,
  IconShare,
  IconFileFilled,
  IconCheckbox,
} from "@tabler/icons-react";
import DescriptionModal from "../../../home/DescriptionModal";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import { DEFAULT_TABLE_CONFIG } from "../../../../shared/constants";

const AccordianTableData = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleCopy = (content) => {
    navigator.clipboard
      .writeText(content)
      .then(() => {
        console.log("Copied to clipboard");
        // Optionally, you can show a success message or perform any other action
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        // Handle errors if copy fails
      });
  };

  const handleContentClick = (content) => {
    setModalContent(content);
    setModalOpened(true);
  };

  const data = [
    {
      solution: "Mobile Phase",
      type: "Worksheet",
      name: "PARA_DISS_MP_01",
      content: "Worksheet Content",
    },
    {
      solution: "Standard Preparation",
      type: "Section Worksheet",
      name: "PARA_DISS_MP_01",
      content: "Worksheet Content",
    },
    {
      solution: "Mobile Phase",
      type: "Section Worksheet",
      name: "PARA_DISS_MP_01",
      content: "Worksheet Content",
    },
  ];

  const columns = useMemo(
    () => [
      {
        header: "Solution",
        accessorKey: "solution",
      },
      {
        header: "Input",
        size: 20,
        accessorKey: "input",
        Cell: ({ cell }) => (
          <ActionIcon variant="subtle">
            <IconFileFilled />
          </ActionIcon>
        ),
      },
      {
        header: "Type",
        accessorKey: "type",
        Cell: ({ cell }) => (
          <Select
            placeholder="Select"
            variant="default"
            data={["Worksheet", "Section Worksheet"]}
          />
        ),
      },
      {
        header: "Name",
        accessorKey: "name",
        Cell: ({ cell }) => (
          <TextInput
            placeholder="Enter"
            variant="unstyled"
            value={cell.getValue()}
          />
        ),
      },
      {
        header: "Content",
        accessorKey: "content",
        Cell: ({ cell }) => (
          <>
            <Button
              variant="transparent"
              justify="space-between"
              pb={10}
              onClick={handleContentClick}
            >
              Worksheet Content
            </Button>
            <ActionIcon variant="subtle">
              <IconCopy onClick={handleCopy} />
            </ActionIcon>
          </>
        ),
      },
      {
        header: "Merge",
        size: 50,
        accessorKey: "merge",
        Cell: ({ cell }) => (
          <>
            <ActionIcon variant="subtle">
              <IconCheckbox />
            </ActionIcon>
            <ActionIcon variant="subtle">
              <IconRun />
            </ActionIcon>
            <ActionIcon variant="subtle">
              <IconShare />
            </ActionIcon>
          </>
        ),
      },
    ],
    []
  );

  const tableConfig = {
    columns,
    data,
    ...DEFAULT_TABLE_CONFIG,
    enableRowNumbers: true,
  };
  const table = useMantineReactTable(tableConfig);

  return (
    <Box>
      <MantineReactTable table={table} />
      <Group justify="right" mt="md">
        <Button>Merge</Button>
        <Button variant="outline">Cancel</Button>
      </Group>
      <DescriptionModal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        content={modalContent}
      />
    </Box>
  );
};

export default AccordianTableData;
