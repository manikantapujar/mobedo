import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/global.css'
import Button from 'react-bootstrap/Button';
import { Link } from "gatsby"
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navitem() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="#ffffff" variant="light" className="maincontainer sticky-top">
        <Container fluid className='Navbarpage'>
          <Link to="/">
            <Navbar.Brand >
              <img src="/mobedologo1.jpeg"
                width="150px"
                height="80px"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">

            </Nav>
            <Nav className='navitems'>
              <Link to="/"><Nav className='navlist'  >Home</Nav></Link>
              <div className="dropdown">
                <button className="dropbtn navlist">Services
                  <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content" id="collasible-nav-dropdown">
                  <NavDropdown.Item><Link to='/starategy'> Strategy</Link></NavDropdown.Item>
                  <NavDropdown.Item ><Link to='/technology'>Technology</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to='/digital_transformation'>Digital Transformation</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to='/shared_services'>Shared Services</Link></NavDropdown.Item>
                </div>
              </div>
              <div className="dropdown" >
                <button className="dropbtn navlist">About Us
                  <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content" id="collasible-nav-dropdown">
                  <NavDropdown.Item><Link to='/about/#story'> The MOBEDO Story</Link></NavDropdown.Item>
                  <NavDropdown.Item ><Link to='/about/#guides'>What Guides Us</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to='/about/#coreteam'>Our Core Team</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to='/about/#partofus'>Be Part of us</Link></NavDropdown.Item>
                </div>
              </div>
              {/* <NavDropdown className='navlist' title="Services" id="collasible-nav-dropdown">
                <div className=''>
                  <NavDropdown.Item><Link to='/about/#story'> The MOBEDO Story</Link></NavDropdown.Item>
                  <NavDropdown.Item ><Link to='/about/#guides'>What Guides Us</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to='/about/#coreteam'>Our Core Team</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to='/about/#partofus'>Be Part of us</Link></NavDropdown.Item>
                </div>
              </NavDropdown>
              <NavDropdown className='navlist' title="About Us" id="collasible-nav-dropdown">
                <div className=''>
                  <NavDropdown.Item><Link to='/about/#story'> The MOBEDO Story</Link></NavDropdown.Item>
                  <NavDropdown.Item ><Link to='/about/#guides'>What Guides Us</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to='/about/#coreteam'>Our Core Team</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to='/about/#partofus'>Be Part of us</Link></NavDropdown.Item>
                </div>
              </NavDropdown> */}
              <Link to="/careers"><Nav className='navlist' >Careers</Nav></Link>
              <Link to="/blog"><Nav className='navlist' > Blog</Nav></Link>
              <Link to="/contact"><Nav className='navlist'   > <Button variant="warning">CONTACT NOW</Button>{' '} </Nav></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
export default Navitem;
