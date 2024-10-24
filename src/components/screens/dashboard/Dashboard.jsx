import { useMemo } from "react";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import { Badge, Box, Flex, Select, Title, TextInput } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { IconCalendar, IconSearch } from "@tabler/icons-react";
import { DEFAULT_TABLE_CONFIG } from "../../../shared/constants";
import { useTasks } from "../../../api/hooks";
import { useStore } from "../../../store/useStore";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
  const { data } = useTasks();
  const { setTaskId, module } = useStore();
  const navigate = useNavigate();

  const handleRowSelect = (row) => {
    setTaskId(row.original.taskId);
    navigate(`/user/${module}/create`);
  };

  const columns = useMemo(
    () => [
      {
        header: "Task ID",
        accessorKey: "taskId",
        size: 20,
      },
      {
        header: "Company",
        accessorKey: "company",
        size: 30,
      },
      {
        header: "Facility",
        accessorKey: "facility",
        size: 30,
      },
      {
        header: "Product",
        accessorKey: "product",
        size: 40,
      },
      {
        header: "Spec",
        accessorKey: "spec",
        size: 30,
      },
      {
        header: "Method",
        accessorKey: "method",
        size: 30,
      },
      {
        header: "Created By",
        accessorKey: "createdBy",
        size: 30,
      },
      {
        header: "Created On",
        accessorKey: "createdOn",
        size: 30,
      },
      {
        header: "Status",
        accessorKey: "status",
        size: 30,
        Cell: ({ cell }) => (
          <Badge
            color={
              cell.getValue() === "Active"
                ? "yellow"
                : cell.getValue() === "InActive"
                ? "red"
                : cell.getValue() === "In-Progress"
                ? "green"
                : "gray"
            }
          >
            {cell.getValue() || "No Status"}
          </Badge>
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
    enableGlobalFilter: true,
    enableSorting: true,
    mantineTableProps: {
      withColumnBorders: true,
      striped: true,
      stickyHeader: true,
    },
    enableTopToolbar: true,
    enableFullScreenToggle: true,
    mantineTableBodyRowProps: ({ row }) => ({
      onClick: () => handleRowSelect(row),
    }),
    renderTopToolbarCustomActions: () => (
      <Title order={4} pt={4} pl={8}>
        {"Tasks"}
      </Title>
    ),
  };
  const table = useMantineReactTable(tableConfig);

  return (
    <Box p={16} className="dashboard">
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
            comboboxProps={{ shadow: "lg" }}
            variant="default"
            data={["One", "Two", "Three"]}
          />
          <Select
            placeholder="Filter By"
            comboboxProps={{ shadow: "lg" }}
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

export default Dashboard;
