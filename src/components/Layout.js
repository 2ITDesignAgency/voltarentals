import React, { useState } from "react"
import Header from "./Header"
import Footer from "./footerelements/Footer"
import TopBar from "./menuNavigation/Topbar"
import CookieBanner from "./CookieBanner"
import FooterMenusWidgets from "./footerelements/FooterMenusWidgets"
import Helmet from "react-helmet"
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
      <div></div>
      <Helmet>
        <meta name="icon" href={`${Favicon}`} />
        <script
          type="text/javascript"
          src="https://ecigr.wheelsys.ms/jsHandler.ashx?elementId=wheelsbook&language=en"
          defer
        />
      <meta name="facebook-domain-verification" content="n5prpzmjgoiv5shrqm1w2jsaie7kjz" />
      </Helmet>
      <TopBar />
      <Header />
      <main id="site-content" role="main">
        {children}
      </main>
      <FooterMenusWidgets />
      <Footer />
      <CookieBanner />
    </div>
  )
}

export default Layout
