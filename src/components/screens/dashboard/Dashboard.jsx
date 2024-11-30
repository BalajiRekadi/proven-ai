import { useMemo } from "react";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import { Badge, Box, Skeleton, Title } from "@mantine/core";
import { DEFAULT_TABLE_CONFIG } from "../../../shared/constants/constants";
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
        id: "taskId",
        accessorKey: "taskId",
        size: 20,
      },
      {
        header: "Company",
        accessorKey: "company",
        id: "company",
        size: 30,
      },
      {
        header: "Facility",
        accessorKey: "facility",
        id: "facility",
        size: 30,
      },
      {
        header: "Product",
        accessorKey: "product",
        id: "product",
        size: 40,
      },
      {
        header: "Spec",
        accessorKey: "spec",
        id: "spec",
      },
      {
        header: "Method",
        accessorKey: "method",
        id: "method",
        size: 30,
      },
      {
        header: "Created By",
        accessorKey: "createdBy",
        id: "createdBy",
        size: 30,
      },
      {
        header: "Created On",
        accessorKey: "createdOn",
        id: "createdOn",
        size: 30,
      },
      {
        header: "Status",
        accessorKey: "status",
        id: "status",
        size: 150,
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
    data: data || [],
    enableColumnResizing: true,
    defaultColumn: { minSize: 200, maxSize: 1000, size: 500 },
    columnResizeMode: "onChange",
    ...DEFAULT_TABLE_CONFIG,
    enablePagination: true,
    paginationDisplayMode: "pages",
    enableBottomToolbar: true,
    enableGlobalFilter: true,
    enableSorting: true,
    mantineTableProps: {
      withColumnBorders: true,
      striped: true,
      stickyHeader: true,
      sx: {
        tableLayout: "fixed",
      },
    },
    enableTopToolbar: true,
    enableFullScreenToggle: true,
    mantinePaginationProps: {},
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
      {!data && (
        <>
          <Skeleton height={36} radius="xl" mb={24} />
          <Skeleton height={36} radius="xl" mb={24} />
          <Skeleton height={36} radius="xl" mb={24} />
          <Skeleton height={36} radius="xl" mb={24} />
          <Skeleton height={36} radius="xl" mb={24} />
          <Skeleton height={36} radius="xl" mb={24} />
        </>
      )}
      {data && <MantineReactTable table={table} />}
    </Box>
  );
};

export default Dashboard;
