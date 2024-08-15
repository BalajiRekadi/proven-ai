import { ActionIcon, Box, Flex } from "@mantine/core";
import React, { useMemo, useState } from "react";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import AssayModal from "./AssayModal";
import { DEFAULT_TABLE_CONFIG } from "../../../../../shared/constants";
import {
  IconExternalLink,
  IconFileTypeCsv,
  IconRun,
} from "@tabler/icons-react";

const AssayTable = () => {
  const [showAssayModal, setShowAssayModal] = useState(false);
  const data = [
    {
      testCode: "Mobile Phase",
      output: "csv",
      actions: ["run"],
    },
  ];

  const toggleAssayModal = () => {
    setShowAssayModal(!showAssayModal);
  };

  const columns = useMemo(
    () => [
      {
        header: "Test Code",
        accessorKey: "testCode",
        size: 50,
      },
      {
        header: "Output",
        size: 50,
        accessorKey: "output",
        Cell: ({ cell }) => (
          <ActionIcon variant="subtle" onClick={toggleAssayModal}>
            <IconFileTypeCsv />
          </ActionIcon>
        ),
      },
      {
        header: "",
        size: 50,
        accessorKey: "actions",
        Cell: ({ cell }) => (
          <Flex gap={16}>
            <ActionIcon variant="subtle">
              <IconRun color="green" />
            </ActionIcon>
            <ActionIcon variant="subtle">
              <IconExternalLink />
            </ActionIcon>
          </Flex>
        ),
      },
    ],
    []
  );

  const tableConfig = { columns, data, ...DEFAULT_TABLE_CONFIG };
  const table = useMantineReactTable(tableConfig);

  return (
    <Box w={"20rem"}>
      <MantineReactTable table={table} />
      <AssayModal open={showAssayModal} onClose={toggleAssayModal} />
    </Box>
  );
};

export default AssayTable;
