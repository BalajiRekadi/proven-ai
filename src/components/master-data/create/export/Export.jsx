import { Box, Select, TextInput } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import React, { useMemo } from "react";

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
      },
      {
        header: "Exception Report",
        accessorKey: "exceptionReport",
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
    </div>
  );
};

export default Export;
