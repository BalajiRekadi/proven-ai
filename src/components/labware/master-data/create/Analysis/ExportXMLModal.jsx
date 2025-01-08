import {
  ActionIcon,
  Box,
  Button,
  Flex,
  Group,
  Modal,
  ScrollArea,
  Skeleton,
  Title,
} from "@mantine/core"
import { IconFileTypeXml, IconZoomScan } from "@tabler/icons-react"
import { useMemo, useState } from "react"
import { useAnalysisXMLData, useProductXMLData } from "../../../../../api/hooks"
import { DEFAULT_TABLE_CONFIG } from "../../../../../shared/constants/constants"
import { MantineReactTable, useMantineReactTable } from "mantine-react-table"
import { downloadFile } from "../../../../../shared/utilities"
import { useToast } from "../../../../../shared/components/toast/useToast"

const ExportXMLModal = ({ open, handleClose, taskId = "" }) => {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [rowSelection, setRowSelection] = useState({})
  const toast = useToast()
  const { data = [] } = useAnalysisXMLData(taskId)
  const { getProductXMLData, isPending } = useProductXMLData()

  const columns = useMemo(
    () => [
      {
        header: "Analysis Name",
        accessorKey: "Analysis Name",
        id: "Analysis Name",
        size: 60,
      },
      {
        header: "Actions",
        accessorKey: "XML",
        id: "XML",
        size: 30,
        Cell: ({ row }) => (
          <ActionIcon
            variant="subtle"
            onClick={(e) => handleAnalysisXMLDownload(e, row.original)}
          >
            <IconFileTypeXml />
          </ActionIcon>
        ),
      },
    ],
    []
  )

  const handleAnalysisXMLDownload = (e, row) => {
    e.stopPropagation()
    downloadFile({
      data: row.XML,
      fileName: `${row["Analysis Name"] || "NA"}.xml`,
      fileType: "text/plain",
    })
  }

  const handleProductExport = () => {
    const names = Object.keys(rowSelection)
    if (names?.length) {
      getProductXMLData({ taskId, names }).then((res) => {
        downloadFile({
          data: res.XML,
          fileName: `${res["Product Name"] || "NA"}.xml`,
          fileType: "text/plain",
        })
        toast.success("Successfully downloaded Product XML.")
      })
    }
  }

  const tableConfig = {
    columns,
    data: data || [],
    ...DEFAULT_TABLE_CONFIG,
    enableRowSelection: true,
    mantineTableBodyRowProps: ({ row }) => ({
      onClick: row.getToggleSelectedHandler(),
      sx: { cursor: "pointer" },
    }),
    state: { rowSelection },
    getRowId: (row) => row["Analysis Name"],
    enableRowNumbers: false,
    enableStickyHeader: true,
    onRowSelectionChange: setRowSelection,
    mantineTableProps: {
      striped: true,
      stickyHeader: true,
      stickyHeaderOffset: 60,
    },
    mantineTableContainerProps: { sx: { maxHeight: "200px" } },
  }
  const table = useMantineReactTable(tableConfig)

  return (
    <Modal
      opened={open}
      onClose={handleClose}
      fullScreen={isFullscreen}
      title={
        <Flex justify={"space-between"}>
          <Title order={3}>{"Export XML"}</Title>
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
      size={800}
      className="export-modal"
    >
      <ScrollArea h={"40vh"}>
        {!data && (
          <Box m={32}>
            <Skeleton height={48} radius="sm" mb={24} />
            <Skeleton height={48} radius="sm" mb={24} />
            <Skeleton height={48} radius="sm" mb={24} />
            <Skeleton height={48} radius="sm" mb={24} />
            <Skeleton height={48} radius="sm" mb={24} />
            <Skeleton height={48} radius="sm" mb={24} />
          </Box>
        )}
        {!!data && <MantineReactTable table={table} />}
      </ScrollArea>
      <Group justify="right" mt="md">
        <Button variant="outline" onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={handleProductExport} loading={isPending}>
          Export Product XML
        </Button>
      </Group>
    </Modal>
  )
}

export default ExportXMLModal
