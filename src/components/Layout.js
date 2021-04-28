import React, { useState } from "react"
import Header from "./Header"
import Footer from "./footerelements/Footer"
import TopBar from "./Topbar"
import FooterMenusWidgets from "./footerelements/FooterMenusWidgets"
import MenuModal from "./MenuModal"
import Seo from "./Seo"
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
      {/* <Helmet>
        <script type="text/javascript" src="https://ecigr.wheelsys.ms/jsHandler.ashx?elementId=wheelsbook&language=en" defer/>
      </Helmet> */}
      <TopBar />
      <Header toggleBackdrop={toggleBackdrop} />
      <MenuModal isActive={backdropActive} toggleBackdrop={toggleBackdrop} />
      <main id="site-content" role="main">
        {children}
      </main>
      <FooterMenusWidgets />
      <Footer />
    </div>
  )
}

export default Layout
