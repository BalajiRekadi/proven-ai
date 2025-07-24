import ReactDOM from "react-dom"

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

export default PopoverPortal
