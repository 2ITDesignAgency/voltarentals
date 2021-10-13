import React, { useState } from "react"
import Header from "./Header"
import Footer from "./footerelements/Footer"
import TopBar from "./menuNavigation/Topbar"
import FooterMenusWidgets from "./footerelements/FooterMenusWidgets"
import Seo from "./Seo"
import Helmet from "react-helmet"
import { Container } from "reactstrap"
import Favicon from "../assets/images/gatsby-icon.png"


const backdropClasses = " backdrop"

const Layout = ({ children, bodyClass }) => {
  const [backdropActive, setBackdropActive] = useState(false)

  const toggleBackdrop = (e, active) => {
    e.preventDefault()
    setBackdropActive(active)
  }

  return (
    <div
      id={"GatsbyBody"}
      className={
        bodyClass +
        " showing-menu-modal showing-modal" +
        (backdropActive ? backdropClasses : "")
      }
    >
      <Helmet>
      <meta name="icon" href="../assets/images/gatsby-icon.png" />
        <script type="text/javascript" src="https://ecigr.wheelsys.ms/jsHandler.ashx?elementId=wheelsbook&language=en" defer/>
      </Helmet>
      <TopBar />
      <Header />
      <main id="site-content" role="main">
        {children}
      </main>
        <FooterMenusWidgets />
      <Footer />
    </div>
  )
}

export default Layout
