import { ActionIcon, Box, Flex, Modal, Image } from "@mantine/core";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import React, { useMemo } from "react";
import { IconDeviceFloppy, IconEdit } from "@tabler/icons-react";
import data from "./assayData.json";
import { DEFAULT_TABLE_CONFIG } from "../../../../../shared/constants/constants";

const AssayModal = ({ open, onClose }) => {
  const columns = useMemo(
    () => [
      {
        header: "Name",
        accessorKey: "name",
        id: "name",
      },
      {
        header: "Date",
        accessorKey: "date",
        id: "date",
      },
      {
        header: "Amount",
        accessorKey: "amount",
        id: "amount",
      },
      {
        header: "Percentage",
        accessorKey: "percentage",
        id: "percentage",
      },
      {
        header: "Time",
        accessorKey: "time",
        id: "time",
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
