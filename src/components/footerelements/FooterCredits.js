import React from "react"
import { Link } from "gatsby"
import FooterLogo from "../../assets/images/footer-logo.png"

const FooterCredits = ({}) => {
  return (
    <div className="footer-credits">
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
    </div>
  )
}

export default FooterCredits
