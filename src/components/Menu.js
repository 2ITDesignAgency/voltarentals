import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import UniversalLink from "./UniversalLink"

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
        })}{" "}
        <li id="menu-item-47" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-has-children">
          <a href="/our-fleet">OUR FLEET<i className="fa fa-angle-down" aria-hidden="true"></i></a>
          <ul className="secondary-menu fleet-menu reset-list-style">
            <li><a href="/our-fleet/compact/">Compact</a></li>
            <li><a href="/our-fleet/economy/">Economy</a></li>
            <li><a href="/our-fleet/luxury/">Luxury</a></li>
            <li><a href="/our-fleet/mini/">Mini</a></li>
            <li><a href="/our-fleet/premium/">Premium</a></li>
            <li><a href="/our-fleet/suv/">SUV</a></li>
            <li><a href="/our-fleet/vans/">Vans</a></li>
            <li><a href="/our-fleet/cargo-vans/">Cargo Vans</a></li>
          </ul>
        </li>
        <li id="menu-item-47" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-has-children">
          <a href="#">SERVICES<i className="fa fa-angle-down" aria-hidden="true"></i></a>
          <ul className="secondary-menu fleet-menu reset-list-style">
            <li><a href="/services/rent-a-car/">RENT A CAR</a></li>
            <li><a href="/services/chauffeur-services/">CHAUFFEUR SERVICES</a></li>
            <li><a href="/services/parking-services/">PARKING SERVICES</a></li>
          </ul>
        </li>
        <li id="menu-item-47" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home">
          <a href="/offers&news/">OFFERS & NEWS</a>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
