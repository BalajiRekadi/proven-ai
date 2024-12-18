import './tableViewModal.css'

import { MantineReactTable, useMantineReactTable } from 'mantine-react-table'
import { useMemo, useState } from 'react'

import { ActionIcon, Box, Flex, Modal, Title } from '@mantine/core'
import { IconZoomScan } from '@tabler/icons-react'

import {
    COMPONENT_DEFAULTS, COMPONENT_DOUBLE_CHECKS, COMPONENT_MANUALS, DEFAULT_TABLE_CONFIG,
    PRODUCT_SPEC_DEFAULTS, PRODUCT_SPEC_DOUBLE_CHECKS, PRODUCT_SPEC_MANUALS,
} from '../constants/constants'

const TableViewModal = ({
  open,
  onClose,
  label,
  size = "70rem",
  content = [],
  enableRowNumbers = true,
}: any) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const getClassName = (header) => {
    if (label == "Components") {
      if (COMPONENT_DEFAULTS.includes(header)) {
        return "default-header";
      } else if (COMPONENT_DOUBLE_CHECKS.includes(header)) {
        return "double-check-header";
      } else if (COMPONENT_MANUALS.includes(header)) {
        return "manual-header";
      } else {
        return "";
      }
    }
    if (label == "Product Spec") {
      if (PRODUCT_SPEC_DEFAULTS.includes(header)) {
        return "default-header";
      } else if (PRODUCT_SPEC_DOUBLE_CHECKS.includes(header)) {
        return "double-check-header";
      } else if (PRODUCT_SPEC_MANUALS.includes(header)) {
        return "manual-header";
      } else {
        return "";
      }
    }
  };

  const columns = useMemo(() => {
    if (content.length < 1) return [];
    const keys = Object.keys(content[0]);
    const cols = keys.filter(Boolean).map((key) => {
      return {
        header: key,
        Header: ({ column }) => (
          <Box className={`common ${getClassName(key)}`}>
            {column.columnDef.header}
          </Box>
        ),
        id: key,
        accessorKey: key,
        size: 150,
      };
    });
    return cols;
  }, [content]);

  const tableConfig = {
    columns,
    data: content,
    enableColumnResizing: true,
    defaultColumn: { minSize: 250, maxSize: 1500, size: 500 },
    columnResizeMode: "onChange",
    ...DEFAULT_TABLE_CONFIG,
    enableRowNumbers,
    mantineTableProps: {
      striped: true,
      withColumnBorders: true,
      sx: {
        maxHeight: "30rem",
      },
    },
  };
  const table = useMantineReactTable(tableConfig);

  return (
    <Modal
      opened={open}
      onClose={onClose}
      zIndex={400}
      size={size}
      centered={true}
      closeOnClickOutside={false}
      fullScreen={isFullscreen}
      title={
        <Flex justify={"space-between"}>
          <Title order={3}>{label}</Title>
          <ActionIcon
            ml="md"
            variant="subtle"
            mr={8}
            onClick={() => setIsFullscreen(!isFullscreen)}
          >
            <IconZoomScan size={20} />
          </ActionIcon>
        </Flex>
      }
      className="table-view-modal"
    >
      <Box h={"70vh"}>
        <MantineReactTable table={table} />
      </Box>
    </Modal>
  );
};

export default TableViewModal;
