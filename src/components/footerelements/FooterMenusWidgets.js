import React from "react"
import DividerFooter from "./dividerSection"
import FooterMenusOne from "./FooterWidget1"
import FooterMenusTwo from "./FooterWidget2"
import FooterMenusThree from "./FooterWidget3"
import FooterMenusfour from "./FooterWidget4"
const FooterMenusWidgets = ({}) => {
  return (
    <div className="footer-nav-widgets-wrapper header-footer-group">
      <DividerFooter />
      <div className="footer-inner section-inner">
        <aside className="footer-widgets-outer-wrapper" role="complementary">
          <div className="footer-widgets-wrapper">
            <div className="footer-widgets">
              <div className="widget widget_text">
                <div className="widget-content">
                  <FooterMenusOne />
                </div>
              </div>
            </div>

            <div className="footer-widgets">
              <div className="widget widget_text">
                <div className="widget-content">
                <FooterMenusTwo />
                </div>
              </div>
            </div>

            <div className="footer-widgets">
              <div className="widget widget_text">
                <div className="widget-content">
                <FooterMenusThree />
                </div>
              </div>
            </div>

            <div className="footer-widgets">
              <div className="widget widget_text">
                <div className="widget-content">
                <FooterMenusfour />
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default FooterMenusWidgets
