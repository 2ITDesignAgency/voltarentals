import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import UniversalLink from "./UniversalLink"
import CityCar from "../assets/images/economy.png"
import Electric from "../assets/images/zoe-hp.png"
import Prestige from "../assets/images/luxury.png"
import RentaCar from "../assets/images/rent-a-car.jpg"
import Parking from "../assets/images/parking.jpg"
import Chefaur from "../assets/images/chefaur.jpg"

import Van from "../assets/images/van.png"


const Menu = () => {
  const { wpMenu } = useStaticQuery(graphql`
    {
      wpMenu(slug: { eq: "primary" }) {
        name
        menuItems {
          nodes {
            label
            url
            databaseId
            connectedNode {
              node {
                ... on WpContentNode {
                  uri
                }
              }
            }
          }
        }
      }
    }
  `)

  if (!wpMenu?.menuItems?.nodes || wpMenu.menuItems.nodes === 0) return null

  return (
    <nav
      className="primary-menu-wrapper"
      aria-label="Horizontal"
      role="navigation"
    >
      <ul className="primary-menu reset-list-style">
        {wpMenu.menuItems.nodes.map((menuItem, i) => {
          const path = menuItem?.connectedNode?.node?.uri ?? menuItem.url

          const itemId = "menu-item-" + menuItem.databaseId

          return (
            <li
              id={itemId}
              key={i + menuItem.url}
              className={
                "menu-item menu-item-type-custom menu-item-object-custom menu-item-home " +
                itemId
              }
            >
              <UniversalLink
                to={path}
                activeClassName={"current-menu-item current_page_item"}
              >
                {menuItem.label}
              </UniversalLink>
            </li>
          )
        })}        <li
        id="menu-item-47"
        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-has-children"
      >
        <a href="#">
          OUR FLEET1<i className="fa fa-angle-down" aria-hidden="true"></i>
        </a>
        <ul className="secondary-menu fleet-menu reset-list-style">
          <li>
            <a href="/services/rent-a-car/"><img
                  src={CityCar}
                  className="fleet-menu-img"
                /> CITY CAR</a>
          </li>
          <li>
            <a href="/services/chauffeur-services/">               <img
                  src={Electric}
                  className="fleet-menu-img"
                /> ELECTRIC</a>
          </li>
          <li>
            <a href="/services/parking-services/"><img
                  src={Prestige}
                  className="fleet-menu-img"
                /> PRESTIGE</a>
          </li>
          <li>
            <a href="/services/parking-services/"><img
                  src={Van}
                  className="fleet-menu-img"
                /> VAN & TRUCK</a>
          </li>
        </ul>
      </li>
        <li
          id="menu-item-47"
          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-has-children"
        >
          <a href="#">
            SERVICES <i className="fa fa-angle-down" aria-hidden="true"></i>
          </a>
          <ul className="secondary-menu service-menu reset-list-style">
            <li>
              <a href="/services/rent-a-car/">
              <img
                  src={RentaCar}
                  className="service-menu-img"
                />
                RENT A CAR</a>
            </li>
            <li>
              <a href="/services/chauffeur-services/">
              <img
                  src={Chefaur}
                  className="service-menu-img"
                />
                CHAUFFEUR SERVICES</a>
            </li>
            <li>
              <a href="/services/parking-services/">
              <img
                  src={Parking}
                  className="service-menu-img"
                />
                PARKING SERVICES</a>
            </li>
          </ul>
        </li>
        <li
          id="menu-item-47"
          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home"
        >
          <a href="/offers&news/">OFFERS & NEWS</a>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
