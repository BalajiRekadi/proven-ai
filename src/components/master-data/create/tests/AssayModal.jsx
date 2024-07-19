import { ActionIcon, Box, Flex, Modal, Image } from "@mantine/core";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import React, { useMemo } from "react";
import editLogo from "../../../../assets/edit.png";
import saveLogo from "../../../../assets/save.png";

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

  const table = useMantineReactTable({
    columns,
    data,
    initialState: { density: "xs" },
    enableTopToolbar: false,
    enableBottomToolbar: false,
    enableRowSelection: false,
    enableColumnOrdering: false,
    enableGlobalFilter: false,
    enableColumnActions: false,
    enableColumnFilters: false,
    enablePagination: false,
    enableSorting: false,
  });
  return (
    <Modal opened={open} onClose={onClose} title="Assay">
      <Box pt={24}>
        <MantineReactTable table={table} />
      </Box>
      <Flex justify={"end"} p={16} gap={10}>
        <ActionIcon variant="subtle" aria-label="Settings">
          <Image src={editLogo} w={24} />
        </ActionIcon>
        <ActionIcon variant="subtle" aria-label="Settings">
          <Image src={saveLogo} w={24} />
        </ActionIcon>
      </Flex>
    </Modal>
  );
};

export default AssayModal;
