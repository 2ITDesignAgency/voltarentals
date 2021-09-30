import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Menu from "./menuNavigation/Menu"
import ToggleIcon from "../assets/svg/toggle.inline.svg"
import Logo from "../assets/images/logo-icon.png"

const Header = ({ pageContext, toggleBackdrop, ...props }) => {
  const { wp } = useStaticQuery(graphql`
    {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)
  return (
    <header id="site-header" className="header-footer-group" role="banner">
      <div className="header-inner section-inner">
        <div className="header-titles-wrapper">
          <div className="header-titles">
            <h1 className="site-title">
              <Link
                to="/"
                class="logo"
              >
                <img
                  src={Logo}
                  alt="logo"
                  width="190"
                  style={{
                    display: "inline-block",
                    marginBottom: 0,
                  }}
                />
              </Link>
              <Menu />
            </h1>

          </div>

          <button
            className="toggle nav-toggle mobile-nav-toggle"
            data-toggle-target=".menu-modal"
            data-toggle-body-class="showing-menu-modal"
            aria-expanded="false"
            data-set-focus=".close-nav-toggle"
            onClick={(e) => toggleBackdrop(e, true)}
          >
            <span className="toggle-inner">
              <span className="toggle-icon">
                <ToggleIcon />
              </span>
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
