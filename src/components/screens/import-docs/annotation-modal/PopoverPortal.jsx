import { Button } from "@mantine/core"
import ReactDOM from "react-dom"
import "./slateEditor.css"

const PopoverPortal = ({ position, children }) => {
  if (!position) return null

  return ReactDOM.createPortal(
    <Button.Group
      className="popover"
      style={{
        position: "absolute",
        top: `${position.top}px`,
        left: `${position.left}px`,
        transform: "translate(-50%, -100%)",
        background: "var(--primary)",
        borderRadius: "4px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
        zIndex: 1000,
      }}
    >
      {children}
    </Button.Group>,
    document.body
  )
}

export default PopoverPortal
