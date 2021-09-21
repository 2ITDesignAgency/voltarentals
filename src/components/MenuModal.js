import React from "react"
import CloseIcon from "../assets/svg/close.inline.svg"
import { graphql, useStaticQuery } from "gatsby"
import stopPropagation from "../utils/stop-propagation"
import UniversalLink from "./UniversalLink"
import SocialMenu from "./SocialMenu"

const MenuModal = ({ isActive, toggleBackdrop }) => {
  const { wpMenu } = useStaticQuery(graphql`
    {
      wpMenu(slug: { eq: "extended" }) {
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
    <div
      className={
        "menu-modal cover-modal header-footer-group show-modal" +
        (isActive ? " active" : "")
      }
      data-modal-target-string=".menu-modal"
      onClick={(e) => toggleBackdrop(e, false)}
    >
      <div onClick={stopPropagation} className="menu-modal-inner modal-inner">
        <div className="menu-wrapper section-inner">
          <div className="menu-top">
            <button
              className="toggle close-nav-toggle fill-children-current-color"
              data-toggle-target=".menu-modal"
              data-toggle-body-class="showing-menu-modal"
              aria-expanded="false"
              data-set-focus=".menu-modal"
              onClick={(e) => toggleBackdrop(e, false)}
            >
              <span className="toggle-text"></span>
              <CloseIcon />
            </button>

            <nav
              className="expanded-menu"
              aria-label="Expanded"
              role="navigation"
            >
              <ul className="modal-menu reset-list-style">
                {wpMenu.menuItems.nodes.map((menuItem, i) => {
                  const path =
                    menuItem?.connectedNode?.node?.uri ?? menuItem.url

                  const itemId = "modal-menu-item-" + menuItem.databaseId

                  return (
                    <li
                      id={itemId}
                      key={itemId}
                      className={
                        "menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home " +
                        itemId
                      }
                    >
                      <div className="ancestor-wrapper">
                        <UniversalLink
                          to={path}
                          activeClassName={
                            "current-menu-item current_page_item"
                          }
                        >
                          {menuItem.label}
                        </UniversalLink>
                      </div>
                    </li>
                  )
                })}
                <li id="menu-item-47"className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-has-children">
                  <a href="/our-fleet">OUR FLEET<i className="fa fa-angle-down" aria-hidden="false"></i></a>
                  <li><a href="/our-fleet/compact/">Compact</a></li>
                  <li><a href="/our-fleet/economy/">Economy</a></li>
                  <li><a href="/our-fleet/luxury/">Luxury</a></li>
                  <li><a href="/our-fleet/mini/">Mini</a></li>
                  <li><a href="/our-fleet/premium/">Premium</a></li>
                  <li><a href="/our-fleet/suv/">SUV</a></li>
                  <li><a href="/our-fleet/vans/">Vans</a></li>
                  <li><a href="/our-fleet/cargo-vans/">Cargo Vans</a></li>
                </li>
                <li id="menu-item-47" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-has-children">
                  <a href="#">SERVICES<i className="fa fa-angle-down" aria-hidden="true"></i></a>
                    <li><a href="/services/rent-a-car/">RENT A CAR</a></li>
                    <li><a href="/services/chauffeur-services/">CHAUFFEUR SERVICES</a></li>
                    <li><a href="/services/parking-services/">PARKING SERVICES</a></li>
                </li>
                <li id="menu-item-47" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home">
                  <a href="/offers&news/">OFFERS & NEWS</a>
                </li>
              </ul>
            </nav>

            <nav className="mobile-menu" aria-label="Mobile" role="navigation">
              <ul className="modal-menu reset-list-style">
                {wpMenu.menuItems.nodes.map((menuItem, i) => {
                  const path =
                    menuItem?.connectedNode?.node?.uri ?? menuItem.url

                  const itemId = "modal-mobile-menu-item-" + menuItem.databaseId

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
                })}
                <li id="menu-item-47"className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-has-children">
                  <a href="/our-fleet">OUR FLEET<i className="fa fa-angle-down" aria-hidden="false"></i></a>
                    <li id="menu-item-47"><a href="/our-fleet/city-cars/"> CITY CAR</a></li>
                    <li id="menu-item-47"><a href="/our-fleet/electric/">ELECTRIC</a></li>
                    <li id="menu-item-47"><a href="/our-fleet/prestige/"> PRESTIGE</a></li>
                    <li id="menu-item-47"><a href="/our-fleet/van-track/"> VAN & TRUCK</a></li>
                </li>
                <li id="menu-item-47" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-has-children">
                  <a href="#">SERVICES<i className="fa fa-angle-down" aria-hidden="true"></i></a>
                    <li><a href="/services/rent-a-car/">RENT A CAR</a></li>
                    <li><a href="/services/chauffeur-services/">CHAUFFEUR SERVICES</a></li>
                    <li><a href="/services/parking-services/">PARKING SERVICES</a></li>
                </li>
                <li id="menu-item-47" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home">
                  <a href="/offers&news/">OFFERS & NEWS</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="menu-bottom">
            <SocialMenu isExpanded />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuModal
