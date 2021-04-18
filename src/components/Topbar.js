import { Link } from "gatsby"
import React from "react"

const TopBar = () => (
  <div
    className="top-bar"
    style={{
      background: `#2ca83d !important`,
      marginBottom: `0`,
      maxHeight: `79px`,
    }}
  >
    <div
      className="top-bar"
      style={{
        background: `#012a37`,
      }}
    >
      <div
        className="top-bar"
        style={{
        //   padding: `1rem 1rem 0 0`,
          background: `#012a37`,
          paddingBottom: `0rem`,
          paddingTop: `0rem`,
          color: `white`,
          margin: `0 auto`,
          maxWidth: 1280,
          display: `flex`,
          justifyContent: `flex-start`,
        }}
      >
        <p
          style={{
            paddingBottom: `0.5rem`,
            paddingTop: `0.5rem`,
            fontSize:`14px`,
            background: `#012a37`,
            color: `white`,
            marginLeft: `1rem`,
            maxWidth: 1280,
            marginBottom: 0,
          }}
        >
          COVID 19: Information regarding hygiene and safety measures at
          voltarentals👉
          <Link to="/" activeClassName="active">
            Learn more
          </Link>
        </p>
      </div>
    </div>
  </div>
)
export default TopBar
