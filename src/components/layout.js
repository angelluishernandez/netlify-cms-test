import React, { useState } from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import Navbar from "./navbar"
import Footer from "./footer"
import "../styles/styles.scss"
import Sidebar from "./sidebar"

const Layout = ({ location, title, children }) => {
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const props = { open, setOpen, handleDrawerClose, handleDrawerOpen }

  return (
    <div>
      <Navbar {...props} />
      <Sidebar {...props} />
      {children}
      <Footer />{" "}
    </div>
  )
}

export default Layout
