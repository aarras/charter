import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export const NavBar = ({ color }) => (
<>
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="/">Rewards Program</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
    </Nav>
  </Navbar>
</>
)