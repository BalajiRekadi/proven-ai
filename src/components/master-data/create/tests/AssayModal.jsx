import { ActionIcon, Box, Flex, Modal, Image } from "@mantine/core";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import React, { useMemo } from "react";
import { DEFAULT_TABLE_CONFIG } from "../../../../shared/constants";
import { IconDeviceFloppy, IconEdit } from "@tabler/icons-react";

const AssayModal = ({ open, onClose }) => {
  const data = [
    {
      name: "Text 001",
      date: "01/01/2024",
      amount: "Rs. 2000",
      percentage: "50%",
      time: "1h 20min",
    },
    {
      name: "Text 001",
      date: "01/01/2024",
      amount: "Rs. 2000",
      percentage: "50%",
      time: "1h 20min",
    },
    {
      name: "Text 001",
      date: "01/01/2024",
      amount: "Rs. 2000",
      percentage: "50%",
      time: "1h 20min",
    },
    {
      name: "Text 001",
      date: "01/01/2024",
      amount: "Rs. 2000",
      percentage: "50%",
      time: "1h 20min",
    },
  ];

  const columns = useMemo(
    () => [
      {
        header: "Name",
        accessorKey: "name",
      },
      {
        header: "Date",
        accessorKey: "date",
      },
      {
        header: "Amount",
        accessorKey: "amount",
      },
      {
        header: "Percentage",
        accessorKey: "percentage",
      },
      {
        header: "Time",
        accessorKey: "time",
      },
    ],
    []
  );

  const tableConfig = { columns, data, ...DEFAULT_TABLE_CONFIG };
  const table = useMantineReactTable(tableConfig);

  return (
    <Modal opened={open} onClose={onClose} title="Assay">
      <Box pt={24}>
        <MantineReactTable table={table} />
      </Box>
      <Flex justify={"end"} p={16} gap={10}>
        <ActionIcon variant="subtle">
          <IconEdit />
        </ActionIcon>
        <ActionIcon variant="subtle">
          <IconDeviceFloppy />
        </ActionIcon>
      </Flex>
    </Modal>
  );
};

export default AssayModal;
