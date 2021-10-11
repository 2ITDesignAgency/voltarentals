import React, { useState } from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import './experimentalNav.scss'
import Logo from "../../assets/images/logo-icon.png"
import Phone from "../../assets/svg/phone.svg"
import Mail from "../../assets/svg/mail.svg"

const ExperimentalNav = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
  const updateStatus = (value, index) => {
    const clone = [...status];
    clone[index] = value;
    setStatus(clone);
}

  return (
      <Navbar color="white" light expand="md">
        <NavbarBrand href="/">
          <img
            src={Logo}
            alt="logo"
            className="desktop-menu"
            width="190"
            style={{
              display: "inline-block",
              marginBottom: 0,
            }}
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Locations
              </DropdownToggle>
              <DropdownMenu right >
                <DropdownItem>
                  <NavLink href="/mainland">Mainland</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/islands">Islands</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Our Fleet
              </DropdownToggle>
              <DropdownMenu right className="fleat-menu">
                <DropdownItem className="fleat-item">
                  <NavLink href="/our-fleet/compact">Compact</NavLink>
                </DropdownItem>
                <DropdownItem className="fleat-item">
                  <NavLink href="/our-fleet/economy">Economy</NavLink>
                </DropdownItem>
                <DropdownItem className="fleat-item">
                  <NavLink href="/our-fleet/luxury/">Luxury</NavLink>
                </DropdownItem>
                <DropdownItem className="fleat-item">
                  <NavLink href="/our-fleet/mini/">Mini</NavLink>
                </DropdownItem>
                <DropdownItem className="fleat-item">
                  <NavLink href="/our-fleet/premium/">Premium</NavLink>
                </DropdownItem>
                <DropdownItem className="fleat-item">
                  <NavLink href="/our-fleet/suv/">SUV</NavLink>
                </DropdownItem>
                <DropdownItem className="fleat-item">
                  <NavLink href="/our-fleet/vans/">Vans</NavLink>
                </DropdownItem>
                <DropdownItem className="fleat-item">
                  <NavLink href="/our-fleet/cargo-vans/">Cargo Vans</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Services
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="/services/rent-a-car/">Rent A Car</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/services/chauffeur-services/">
                    Chauffeur Services
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/services/parking-services/">
                    Parking Services
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/blog/offers/">Offers</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/blog/news/">News</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact-us">Contact Us</NavLink>
            </NavItem>
          </Nav>
          <div className="contact-info contact-info-desktop">
            <NavbarText className="menu-icon-text phone ml-auto">
              
              <a href="tel:+302109735000"><img src={Phone} width="20" className="menu-icon" /></a>
            </NavbarText>
            <NavbarText className="menu-icon-text phone ml-auto">
              
              <a href="mailto:info@volta4u.com"><img src={Mail} width="20" className="menu-icon" /></a>
            </NavbarText>
          </div>
          <div className="contact-info contact-info-mobile">
            <NavbarText className="menu-icon-text phone ml-auto">
              
              <a href="tel:+302109735000"><img src={Phone} className="menu-icon" /></a>
            </NavbarText>
            <NavbarText className="menu-icon-text phone ml-auto">
              <a href="mailto:info@volta4u.com"><img src={Mail} className="menu-icon" /></a>
            </NavbarText>
          </div>
        </Collapse>
      </Navbar>
  )
}

export default ExperimentalNav
