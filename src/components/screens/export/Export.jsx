import { ActionIcon, Box, Flex, Select, TextInput } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import React, { useMemo } from "react";
import {
  IconAlertCircle,
  IconCalendar,
  IconClipboardText,
  IconSearch,
} from "@tabler/icons-react";
import { DEFAULT_TABLE_CONFIG } from "../../../shared/constants";

const Export = () => {
  const data = [
    {
      product: "10001234",
      solution: "Mobile Phase",
      name: "PARA_DISS_MAP_01",
      type: "Worksheet",
      content: "",
      exceptionReport: "Success",
    },
    {
      product: "10001234",
      solution: "Mobile Phase",
      name: "PARA_DISS_MAP_01",
      type: "Worksheet",
      content: "",
      exceptionReport: "Failure",
    },
    {
      product: "10001234",
      solution: "Mobile Phase",
      name: "PARA_DISS_MAP_01",
      type: "Worksheet",
      content: "",
      exceptionReport: "Success",
    },
    {
      product: "10001234",
      solution: "Mobile Phase",
      name: "PARA_DISS_MAP_01",
      type: "Worksheet",
      content: "",
      exceptionReport: "Failure",
    },
  ];

  const columns = useMemo(
    () => [
      {
        header: "Product",
        accessorKey: "product",
      },
      {
        header: "Solution",
        accessorKey: "solution",
      },
      {
        header: "Name",
        accessorKey: "name",
      },
      {
        header: "Type",
        accessorKey: "type",
      },
      {
        header: "Content",
        accessorKey: "content",
        Cell: ({ cell }) => (
          <ActionIcon variant="subtle">
            <IconClipboardText />
          </ActionIcon>
        ),
      },
      {
        header: "Exception Report",
        accessorKey: "exceptionReport",
        Cell: ({ cell }) => (
          <IconAlertCircle
            size={20}
            style={{ marginRight: "8px", color: "var(--secondary)" }}
          />
        ),
      },
    ],
    []
  );

  const tableConfig = { columns, data, ...DEFAULT_TABLE_CONFIG };
  const table = useMantineReactTable(tableConfig);

  return (
    <Box p={16}>
      <Flex gap={32} justify={"space-between"} p={32} pb={64}>
        <TextInput
          placeholder="search"
          color="black"
          style={{ width: "25%" }}
          rightSection={<IconSearch />}
        />
        <Flex gap={16}>
          <Select
            placeholder="Category"
            variant="default"
            data={["One", "Two", "Three"]}
          />
          <Select
            placeholder="Filter By"
            variant="default"
            data={["One", "Two", "Three"]}
          />
          <DatePickerInput
            placeholder="Date Range"
            style={{ width: "33%" }}
            rightSection={<IconCalendar />}
          />
        </Flex>
      </Flex>
      <MantineReactTable table={table} />
    </Box>
  );
};

export default Export;