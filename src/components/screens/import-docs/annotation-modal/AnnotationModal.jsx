// eslint-disable-next-line no-unused-vars
import React, { useMemo, useState } from "react"

import { Button, Flex, Modal, Title } from "@mantine/core"
import SlateEditor from "./SlateEditor"
import { useFileContent, usePostFileContent } from "../../../../api/hooks"

function AnnotationModal({ open, handleClose, methodFilePath }) {
  const methodFileContent = useFileContent(methodFilePath)
  const { saveFileContent } = usePostFileContent()
  const text = methodFileContent?.data?.content || ""
  const initialVal = useMemo(
    () => [{ type: "paragraph", children: [{ text }] }],
    [text]
  )

  const [value, setValue] = useState(initialVal)

  const handleSaveAnnotations = () => {
    saveFileContent({
      taskId: methodFileContent?.data?.taskid,
      content: value?.[0].children[0]?.text,
    })
  }

  return (
    <Modal
      opened={open}
      onClose={handleClose}
      title={<Title order={3}>{"Update Annotations"}</Title>}
      size={"xl"}
    >
      <SlateEditor initialVal={initialVal} value={value} setValue={setValue} />
      <Flex gap={16} py={16} justify={"flex-end"} align={"center"}>
        <Button variant="outline">Cancel</Button>
        <Button variant="filled" onClick={handleSaveAnnotations}>
          Save
        </Button>
      </Flex>
    </Modal>
  )
}

export default AnnotationModal
