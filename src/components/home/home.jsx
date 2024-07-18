import React, { useMemo } from "react";
import "./home.css";
import { Box, Select, TextInput } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import editLogo from "./../../assets/edit.png";
import downloadLogo from "./../../assets/download.png";

const Home = () => {
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
        // accessorFn: (dataRow) => parseInt(dataRow.company), //alternate way to access data if processing logic is needed
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
                cell.getValue() == "Active"
                  ? theme.colors.yellow[9]
                  : cell.getValue() == "InActive"
                  ? theme.colors.red[9]
                  : cell.getValue() == "InProgress"
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
            <img src={editLogo} className="logo" style={{ width: "16px" }} />{" "}
            <img
              src={downloadLogo}
              className="logo"
              style={{ width: "16px" }}
            />
          </Box>
        ),
      },
    ],
    []
  );

  const table = useMantineReactTable({
    columns,
    data,
    enableRowSelection: false,
    enableColumnOrdering: false,
    enableGlobalFilter: false,
    enableColumnActions: false,
    enableColumnFilters: false,
    enablePagination: true,
    enableSorting: false,
  });

  return (
    <div className="home">
      <div className="search-container">
        <TextInput
          placeholder="search"
          color="black"
          style={{ width: "25%" }}
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
          <DatePickerInput placeholder="Date Range" style={{ width: "33%" }} />
        </div>
      </div>
      <MantineReactTable table={table} />
    </div>
  );
};

export default Home;
