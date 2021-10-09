import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Menu from "./menuNavigation/Menu"
import ExperimentalNav from "./menuNavigation/ExperimentalNav"
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
      <ExperimentalNav />
      </div>
    </header>
  )
}

export default Header
