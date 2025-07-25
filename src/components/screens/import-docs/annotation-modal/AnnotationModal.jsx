// eslint-disable-next-line no-unused-vars
import React from "react"

import { Button, Flex, Modal, Title } from "@mantine/core"
import SlateEditor from "./SlateEditor"
import { useFileContent } from "../../../../api/hooks"

function AnnotationModal({ open, handleClose, methodFilePath }) {
  const methodFileContent = useFileContent(methodFilePath)
  return (
    <Modal
      opened={open}
      onClose={handleClose}
      title={<Title order={3}>{"Update Annotations"}</Title>}
      size={"xl"}
    >
      <SlateEditor text={methodFileContent?.data?.content} />
      <Flex gap={16} py={16} justify={"flex-end"} align={"center"}>
        <Button variant="outline">Cancel</Button>
        <Button variant="filled">Save</Button>
      </Flex>
    </Modal>
  )
}

export default AnnotationModal
