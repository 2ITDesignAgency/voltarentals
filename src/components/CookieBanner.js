import React from "react"
import { CookieNotice } from "gatsby-cookie-notice"
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies"
import "../assets/cookie-banner.scss"


const cookieBanner = () => {
  return (
    <CookieNotice
      personalizeButtonClasses={"my-btn-classes"}
      personalizeButtonText={"Learn More →"}
      declineButtonText={"Disagree and close"}
      acceptButtonText={"Agree and close"}
      expires={150}
      cookies={[
        {
          name: "necessary",
          editable: false,
          default: true,
          title: "Essentiel",
          text: "Essential cookies are necessary for the proper functioning of the site. The site cannot function properly without them.",
        },
        {
          name: "gatsby-gdpr-google-analytics",
          editable: true,
          default: false,
          title: "Google Analytics",
          text: "Google Analytics is a statistical tool of Google allowing to measure the audience of the website.",
        },
        {
            name: "gatsby-gdpr-facebook-pixel",
            editable: true,
            default: false,
            title: "Facebook Pixel",
            text: "Facebook Pixel is a statistical tool of Meta allowing to measure the audience of the website.",
          },
        {
          name: "gatsby-gdpr-hotjar",
          editable: true,
          default: false,
          title: "Hotjar",
        },
      ]}
      style={{
        background: "black",
        display: "flex",
        padding: "10px",
      }}
      buttonStyle={{
        display: "inline-flex",
        background: "#fff",
        color: "red",
        borderRadius: "4px",
        justifyContent: "middle",
        width: "85px",
      }}
      declineButtonStyle={{
        display: "inline-flex",
        background: "#ff5f56",
        borderRadius: "4px",
        color: "#fff",
        cursor: "pointer",
        width: "85px",
      }}
      onAccept={() => {
        initializeAndTrack(location)
      }}
      onDecline={() => {
        initializeAndTrack(location)
      }}
    >
      <h4>This websites uses cookies.</h4>
      <p className="cookie-banner-text">
        Volta4u and its partners wish to use cookies or equivalent technologies
        to store and/or access personal data about your device, such as its
        unique identifier, your IP address, etc., in order to improve your
        experience on the site, to analyse navigation, to offer personalized
        advertising, and to facilitate sharing on social networks. We also allow
        the use of third-party cookies (including those from our advertising
        partners) on our sites. Click on "Learn more"; to set your choices. You
        can read our cookie policy for more information about the cookies that
        may be deposited on your device and change your preferences at any time.
        <br />
        <span className="cookie-banner-subtitle">
          <strong>We and our partners do the following data processing:</strong>
        </span>
        <br />
        <span className="cookie-banner-extra-text">
          Personalised ads and content, ad and content measurement, audience
          insights and product development, Precise geolocation data, and
          identification through device scanning, Storage and access to
          geolocation information for targeted advertising purposes, Storage and
          access to geolocation information to carry out marketing studies,
          Store and/or access information on a device, These cookies are
          essential for us to ensure the proper functioning of our website.
        </span>
      </p>
      
    </CookieNotice>
  )
}

export default cookieBanner
