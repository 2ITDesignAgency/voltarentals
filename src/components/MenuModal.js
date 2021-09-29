import React from "react"
import CloseIcon from "../assets/svg/close.inline.svg"
import { graphql, useStaticQuery } from "gatsby"
import stopPropagation from "../utils/stop-propagation"
import UniversalLink from "./UniversalLink"
import SocialMenu from "./SocialMenu"
import Phone from "../assets/svg/phone.svg"
import Mail from "../assets/svg/mail.svg"

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
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-has-children">
                <a href="#">lOCATIONS<i className="fa fa-angle-down" aria-hidden="true"></i></a>
                  <li><a href="/mainland">Mainland</a></li>
                  <li><a href="/Islands">islands</a></li>
              </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-has-children">
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
                <li  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-has-children">
                  <a href="#">SERVICES<i className="fa fa-angle-down" aria-hidden="true"></i></a>
                  <li><a href="/services/rent-a-car/">Rent A Car</a></li>
                  <li><a href="/services/chauffeur-services/">Chauffeur Services</a></li>
                  <li><a href="/services/parking-services/">Parking Services</a></li>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home">
                  <a href="/blog/news/">NEWS</a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home">
                  <a href="/blog/offers/">OFFERS </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home">
                <a href="/contact-us/">CONTACT US</a>
                </li>   
              </ul>
            </nav>
          </div>

          <div className="menu-bottom">
            <div className="contact-info">
              <span className="contact-item"><img src={Phone} className="menu-icon"/><a href="tel:6972348949">6972348949</a></span>
              <span className="contact-item"><img src={Mail} className="menu-icon"/><a href="mailto:info@volta4you.gr">info@volta4you.gr</a></span>
            </div>
            <SocialMenu isExpanded />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuModal
