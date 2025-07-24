import React, { useState, useMemo } from "react"
import { createEditor, Editor, Transforms, Range } from "slate"
import { Slate, Editable, withReact, ReactEditor } from "slate-react"
import PopoverPortal from "./PopoverPortal"

const SlateEditor = ({ text = "" }) => {
  const editor = useMemo(() => withReact(createEditor()), [])

  const initialVal = useMemo(
    () => [{ type: "paragraph", children: [{ text }] }],
    [text]
  )

  const [value, setValue] = useState(initialVal)
  const [popoverPos, setPopoverPos] = useState(null)
  const [selection, setSelection] = useState(null)

  const wrapWithAt = () => {
    if (!selection) return
    const selectedText = Editor.string(editor, selection)
    Transforms.insertText(editor, `@@@${selectedText}@@@`, { at: selection })
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
          border: "1px solid #ccc",
          borderRadius: "6px",
          padding: "12px",
          minHeight: "120px",
        }}
      />

      <PopoverPortal position={popoverPos}>
        <button onMouseDown={wrapWithAt}>@</button>
      </PopoverPortal>
    </Slate>
  )
}

export default SlateEditor
