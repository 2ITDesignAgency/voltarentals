import React from "react"
import { Link } from "gatsby"
import SocialMenu from "../SocialMenu"
import FooterLogo from "../../assets/images/footer-logo.png"

const Footer = ({}) => {
  return (
    <footer id="site-footer" role="contentinfo" className="header-footer-group">
      <div className="section-inner">
        <div className="footer-credits">
          <p className="footer-copyright">
            © {new Date().getFullYear()}
            <Link to={"/"}>
              <img
                src={FooterLogo}
                alt="logo"
                width="147"
                style={{
                  display: "inline-block",
                  marginBottom: 0,
                  marginRight: `74px`,
                }}
              />
            </Link>
            <a
              className="powered-by-wordpress"
              href="https://www.henrikwirth.com"
              rel="noreferrer noopener"
              style={{
                marginBottom: 0,
              }}
            >
              Copyright © volta4u. All Rights Reserved.
            </a>
          </p>
        </div>
        <SocialMenu />
        <a className="to-the-top" href="#site-header">
          <span className="to-the-top-long">
            To the top{" "}
            <span className="arrow" aria-hidden="true">
              ↑
            </span>
          </span>
          <span className="to-the-top-short">
            Up{" "}
            <span className="arrow" aria-hidden="true">
              ↑
            </span>
          </span>
        </a>
      </div>
    </footer>
  )
}

export default Footer
