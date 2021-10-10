import React from "react"
import SocialMenu from "../SocialMenu"
import FooterCredits from "./FooterCredits"
import FooterToTop from "./FooterToTop"


const Footer = ({}) => {
  return (
    <footer id="site-footer" role="contentinfo" className="header-footer-group">
      <div className="section-inner">
        <FooterCredits />
        <SocialMenu />
        <FooterToTop />
      </div>
      <div className="section-inner">
      <a
          className="volta4u"
          href="https://volta4y.com"
          rel="noreferrer noopener"
          style={{
            marginBottom: 0,
            color:"white",
          }}
        >
          Copyright © {new Date().getFullYear()} volta4u. All Rights Reserved.
        </a>
      </div>
    </footer>
  )
}

export default Footer
