import React from "react"
import { Link } from "gatsby"
import SocialMenu from "../SocialMenu"
import Logo from "../../assets/images/logo-icon.png"

const Footer = ({}) => {
  return (
    <footer id="site-footer" role="contentinfo" className="header-footer-group">
      <div className="section-inner">
        <div className="footer-credits">
          <p className="footer-copyright">
            © {new Date().getFullYear()}
            <Link to={"/"}>
              <img
                src={Logo}
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
              Build with Love by SNS
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
