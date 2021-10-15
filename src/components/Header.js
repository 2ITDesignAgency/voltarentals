import React from "react"
import ExperimentalNav from "./menuNavigation/ExperimentalNav"

const Header = ({ pageContext, toggleBackdrop, ...props }) => {
  return (
    <header id="site-header" className="header-footer-group" role="banner">
      <div className="header-inner section-inner">
      <ExperimentalNav />
      </div>
    </header>
  )
}

export default Header
