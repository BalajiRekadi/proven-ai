// eslint-disable-next-line no-unused-vars
import React from "react"

import { Modal, Title } from "@mantine/core"
import SlateEditor from "./SlateEditor"

function AnnotationModal({ open, handleClose }) {
  return (
    <Modal
      opened={open}
      onClose={handleClose}
      title={<Title order={3}>{"Annotations"}</Title>}
      size={"xl"}
    >
      <SlateEditor text="Hello world" />
    </Modal>
  )
}

export default AnnotationModal
