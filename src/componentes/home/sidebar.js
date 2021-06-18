import React from "react"

const Sidebar = ({toggle, sideBar}) => {
  return (
    <div
      style={{
        display: toggle ? "block" : "none"
      }}
      className="sidebar"
    >
      <div className="side">Sidebar Content</div>
      <div className="bg" onClick={() => sideBar()}>
        click on dark area to close
      </div>
    </div>
  )
}

export default Sidebar
