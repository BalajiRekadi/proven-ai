import React, { useState, useMemo } from "react"
import { createEditor, Editor, Transforms, Range } from "slate"
import { Slate, Editable, withReact, ReactEditor } from "slate-react"
import PopoverPortal from "./PopoverPortal"
import { withHistory } from "slate-history"
import "./slateEditor.css"
import { Button } from "@mantine/core"

const SlateEditor = ({ initialVal = [], value = "", setValue }) => {
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])

  const [popoverPos, setPopoverPos] = useState(null)
  const [selection, setSelection] = useState(null)

  const wrapWith = (symbols) => {
    if (!selection) return
    const selectedText = Editor.string(editor, selection)
    Transforms.insertText(editor, `${symbols}${selectedText}${symbols}`, {
      at: selection,
    })
    setPopoverPos(null)
  }

  const updatePopover = () => {
    const sel = editor.selection
    if (
      !sel ||
      Range.isCollapsed(sel) ||
      Editor.string(editor, sel).trim() === ""
    ) {
      setPopoverPos(null)
      setSelection(null)
      return
    }

    try {
      const domRange = ReactEditor.toDOMRange(editor, sel)
      const rect = domRange.getBoundingClientRect()
      setPopoverPos({
        top: rect.bottom + window.scrollY - 30,
        left: rect.left + rect.width / 2 + window.scrollX,
      })
      setSelection(sel)
    } catch (err) {
      setPopoverPos(null)
      setSelection(null)
    }
  }

  return (
    <Slate
      editor={editor}
      value={value}
      initialValue={initialVal}
      onChange={(val) => {
        setValue(val)
        // Delay to allow selection update
        setTimeout(updatePopover, 0)
      }}
    >
      <Editable
        placeholder="Select some text..."
        style={{
          border: "2px solid #ccc",
          borderRadius: "6px",
          padding: "16px",
          height: "76vh",
          overflow: "auto",
        }}
      />

      <PopoverPortal position={popoverPos}>
        <Button
          variant="outline"
          onMouseDown={() => wrapWith("@@@")}
          color="white"
        >
          @
        </Button>
        <Button
          variant="outline"
          onMouseDown={() => wrapWith("##")}
          color="white"
        >
          #
        </Button>
        <Button
          variant="outline"
          onMouseDown={() => wrapWith("&&")}
          color="white"
        >
          &
        </Button>
      </PopoverPortal>
    </Slate>
  )
}

export default SlateEditor
