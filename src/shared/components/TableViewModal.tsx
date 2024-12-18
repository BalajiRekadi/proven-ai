import './tableViewModal.css'

import { useState } from 'react'

import { ActionIcon, Button, Flex, Modal, Title } from '@mantine/core'
import { IconZoomScan } from '@tabler/icons-react'

import { ExcelTable } from './'
import DataTable from './DataTable'

const TableViewModal = ({
  open,
  onClose,
  label,
  size = "70rem",
  content = [],
  enableRowNumbers = true,
  showAsExcel = false,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

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
      {!showAsExcel && (
        <DataTable
          label={label}
          content={content}
          enableRowNumbers={enableRowNumbers}
        />
      )}
      {showAsExcel && (
        <ExcelTable
          label={label}
          content={content}
          enableRowNumbers={enableRowNumbers}
        />
      )}
      <Flex justify={"flex-end"}>
        <Button variant="filled">Save</Button>
      </Flex>
    </Modal>
  );
};

export default TableViewModal;
