import { ActionIcon, Box } from "@mantine/core";
import React, { useMemo, useState } from "react";
import csvLogo from "../../../../assets/csv.png";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import AssayModal from "./AssayModal";
import { DEFAULT_TABLE_CONFIG } from "../../../../shared/constants";

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
          <ActionIcon variant="subtle" aria-label="Settings">
            <img
              src={csvLogo}
              className="logo"
              style={{ width: "16px" }}
              onClick={toggleAssayModal}
            />
          </ActionIcon>
        ),
      },
      {
        header: "",
        size: 50,
        accessorKey: "actions",
        Cell: ({ cell }) => (
          <ActionIcon variant="subtle" aria-label="Settings">
            <img src={csvLogo} className="logo" style={{ width: "16px" }} />
          </ActionIcon>
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
