import React, { useEffect, useMemo, useState } from "react"
import ReactDOM from "react-dom"
import { createEditor, Editor, Transforms, Range } from "slate"
import { Slate, Editable, withReact } from "slate-react"

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
]

// Portal wrapper to fix popover positioning
const PopoverPortal = ({ position, children }) => {
  if (!position) return null

  return ReactDOM.createPortal(
    <div
      style={{
        position: "absolute",
        top: `${position.top}px`,
        left: `${position.left}px`,
        transform: "translate(-50%, -100%)",
        background: "white",
        padding: "4px 8px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
        zIndex: 1000,
      }}
    >
      {children}
    </div>,
    document.body
  )
}

const SlateEditor = ({ text = "" }) => {
  const initialVal = useMemo(
    () => [{ type: "paragraph", children: [{ text }] }],
    [text]
  )
  const [value, setValue] = useState(initialVal)

  const [popoverPos, setPopoverPos] = useState(null)
  const [selection, setSelection] = useState(null)
  const [editor] = useState(() => withReact(createEditor()))

  useEffect(() => {
    setValue([{ type: "paragraph", children: [{ text }] }])
  }, [text])

  useEffect(() => {
    const handleMouseUp = () => {
      // Delay just enough to allow DOM to update
      setTimeout(() => {
        const domSelection = window.getSelection()

        // Skip if nothing selected or just a caret
        if (
          !editor.selection ||
          Range.isCollapsed(editor.selection) ||
          Editor.string(editor, editor.selection).trim() === ""
        ) {
          setPopoverPos(null)
          setSelection(null)
          return
        }

        // Get position and show popover
        const domRange = domSelection.getRangeAt(0)
        const rect = domRange.getBoundingClientRect()
        setPopoverPos({
          top: rect.bottom + window.scrollY - 30,
          left: rect.left + rect.width / 2 + window.scrollX,
        })
        setSelection(editor.selection)
      }, 0)
    }

    document.addEventListener("mouseup", handleMouseUp)
    return () => document.removeEventListener("mouseup", handleMouseUp)
  }, [editor])

  const wrapWithAt = () => {
    if (!selection) return
    const selectedText = Editor.string(editor, selection)
    Transforms.insertText(editor, `@@@${selectedText}@@@`, { at: selection })
    setPopoverPos(null)
  }

  return (
    <Slate
      editor={editor}
      value={value}
      initialValue={initialVal}
      onChange={(val) => {
        setValue(val)

        if (
          !editor.selection ||
          Range.isCollapsed(editor.selection) ||
          Editor.string(editor, editor.selection).trim() === ""
        ) {
          setPopoverPos(null)
          setSelection(null)
        }
      }}
    >
      <Editable
        style={{
          border: "1px solid #ccc",
          borderRadius: "6px",
          padding: "12px",
          minHeight: "120px",
        }}
        placeholder="Select some text..."
      />

      {/* Render @ button using Portal */}
      <PopoverPortal position={popoverPos}>
        <button onMouseDown={wrapWithAt}>@</button>
      </PopoverPortal>
    </Slate>
  )
}

export default SlateEditor
