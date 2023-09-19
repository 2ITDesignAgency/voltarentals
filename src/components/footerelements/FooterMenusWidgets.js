import React from "react"
import { Container, Row, Col } from "reactstrap"
import "../homepageelements/hompageBootstrap.scss"
import DividerFooter from "./dividerSection"
import FooterMenusOne from "./FooterWidget1"
import FooterMenusTwo from "./FooterWidget2"
import FooterMenusThree from "./FooterWidget3"
import FooterMenusfour from "./FooterWidget4"
import FooterWidget1Mobile from "./FooterWidget1Mobile"
import FooterWidget2Mobile from "./FooterWidget2Mobile"
import FooterWidget3Mobile from "./FooterWidget3Mobile"
import FooterWidget4Mobile from "./FooterWidget4Mobile"

const FooterMenusWidgets = ({}) => {
  return (
    <Container fluid className="footer-nav-widgets-wrapper header-footer-group">
      <DividerFooter />
      <div className="footer-inner section-inner">
        <aside className="footer-widgets-outer-wrapper" role="complementary">
          <div className="footer-widgets-wrapper">
            <div className="footer-widgets">
            <Col className="widget-content footer-desktop">
                  <FooterMenusOne />
                </Col>
                <Col className="widget-content footer-mobile">
                  <FooterWidget1Mobile />
                </Col>
            </div>

            <div className="footer-widgets">
            <Col className="widget-content footer-desktop">
                  <FooterMenusTwo />
                </Col>
                <Col className="widget-content footer-mobile">
                  <FooterWidget2Mobile />
                </Col>
            </div>

            <div className="footer-widgets">
            <Col className="widget-content footer-desktop">
                  <FooterMenusThree />
                </Col>
                <Col className="widget-content footer-mobile">
                  <FooterWidget3Mobile />
                </Col>
            </div>

            <div className="footer-widgets">
                <Col className="widget-content footer-desktop">
                  <FooterMenusfour />
                </Col>
                <Col className="widget-content footer-mobile">
                  <FooterWidget4Mobile />
                </Col>
            </div>
          </div>
        </aside>
      </div>
    </Container>
  )
}

export default FooterMenusWidgets
