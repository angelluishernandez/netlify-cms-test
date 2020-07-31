import React, { useState } from "react"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./navbar"
import Footer from "./footer"
import "../styles/styles.scss"
import Sidebar from "./sidebar"

// React Bootstrap imports

import { Container, Row, Col } from "react-bootstrap"

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
      <Container fluid>
        <Row>
          <Sidebar />

          <Col xs={8}>{children}</Col>
          <Col xs={2} style={{ backgroundColor: "red" }}>
            Social media
          </Col>
        </Row>
      </Container>
      <Footer />{" "}
    </div>
  )
}

export default Layout
