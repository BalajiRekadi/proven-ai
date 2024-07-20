import React, { useMemo, useState } from "react";
import { ActionIcon, Box, Select, TextInput } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import DescriptionModal from "./DescriptionModal";
import { DEFAULT_TABLE_CONFIG } from "../../shared/constants";
import "./home.css";
import { IconDownload, IconEdit } from "@tabler/icons-react";

const Home = () => {
  const [modalOpened, setModalOpened] = useState(false);

  const data = [
    {
      taskId: "10001234",
      company: "DRL",
      facility: "DRL",
      product: "10001234",
      spec: "SPEC-DOC-001",
      method: "MET-DOC-001",
      createdBy: "USER001",
      createdOn: "01.01.2024",
      status: "Active",
      actions: ["edit", "download"],
    },
    {
      taskId: "10001235",
      company: "GLN",
      facility: "GLN",
      product: "10001234",
      spec: "SPEC-DOC-001",
      method: "MET-DOC-001",
      createdBy: "USER002",
      createdOn: "01.01.2024",
      status: "InActive",
      actions: ["edit", "download"],
    },
    {
      taskId: "10001235",
      company: "DRL",
      facility: "DRL",
      product: "10001234",
      spec: "SPEC-DOC-001",
      method: "MET-DOC-001",
      createdBy: "USER001",
      createdOn: "01.01.2024",
      status: "InProgress",
      actions: ["edit", "download"],
    },
    {
      taskId: "10001245",
      company: "GLN",
      facility: "GLN",
      product: "10001234",
      spec: "SPEC-DOC-001",
      method: "MET-DOC-001",
      createdBy: "USER002",
      createdOn: "01.01.2024",
      status: "Export",
      actions: ["edit", "download"],
    },
  ];

  const columns = useMemo(
    () => [
      {
        header: "Task ID",
        accessorKey: "taskId",
      },
      {
        header: "Company",
        accessorKey: "company",
      },
      {
        header: "Facility",
        accessorKey: "facility",
      },
      {
        header: "Product",
        accessorKey: "product",
      },
      {
        header: "Spec",
        accessorKey: "spec",
      },
      {
        header: "Method",
        accessorKey: "method",
      },
      {
        header: "Created By",
        accessorKey: "createdBy",
      },
      {
        header: "Created On",
        accessorKey: "createdOn",
      },
      {
        header: "Status",
        accessorKey: "status",
        Cell: ({ cell }) => (
          <Box
            style={(theme) => ({
              backgroundColor:
                cell.getValue() === "Active"
                  ? theme.colors.yellow[9]
                  : cell.getValue() === "InActive"
                  ? theme.colors.red[9]
                  : cell.getValue() === "InProgress"
                  ? theme.colors.green[9]
                  : theme.colors.indigo[9],
              borderRadius: "4px",
              color: "#fff",
              maxWidth: "9ch",
              padding: "4px",
            })}
          >
            {cell.getValue()}
          </Box>
        ),
      },
      {
        header: "Actions",
        accessorKey: "actions",
        Cell: ({ cell }) => (
          <Box>
            <ActionIcon variant="subtle">
              <IconEdit />
            </ActionIcon>
            <ActionIcon variant="subtle">
              <IconDownload />
            </ActionIcon>
          </Box>
        ),
      },
    ],
    []
  );

  const tableConfig = {
    columns,
    data,
    ...DEFAULT_TABLE_CONFIG,
    enablePagination: true,
    enableBottomToolbar: true,
  };
  const table = useMantineReactTable(tableConfig);

  return (
    <div className="home">
      <div className="search-container">
        <TextInput
          placeholder="search"
          color="black"
          style={{ width: "25%" }}
          rightSection={
            <span>
              <i className="fi fi-br-search"></i>
            </span>
          }
        />
        <div className="date-range">
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
            rightSection={
              <span>
                <i className="fi fi-br-calendar"></i>
              </span>
            }
          />
        </div>
      </div>
      <MantineReactTable table={table} />

      <DescriptionModal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
      />
    </div>
  );
};

export default Home;
