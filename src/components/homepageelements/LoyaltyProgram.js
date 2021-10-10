import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { Row, Col, Container } from "reactstrap"
import "./hompageBootstrap.scss"

// Step 2: Define your component

const LoayaltyProgram = () => {
  const { wpPage } = useStaticQuery(graphql`
    {
      wpPage(title: { eq: "HOME" }) {
        frontPage {
          section2 {
            buttonTravelExperience
            travelExperienceImage {
              sourceUrl
            }
            travelExperianceTitle
            travelParagraph
          }
        }
      }
    }
  `)
  // enjoy cta veriables
  const travelExperianceTitle = wpPage.frontPage.section2.travelExperianceTitle
  const travelParagraph = wpPage.frontPage.section2.travelParagraph
  const buttonTravelExperience =
    wpPage.frontPage.section2.buttonTravelExperience
  const travelExperienceImage =
    wpPage.frontPage.section2.travelExperienceImage.sourceUrl
  return (
    <Container fluid className="loyaltyProgram cyan-content ">
      <Container className="loyaltyProgram">
      <Row className="row-reverse">
        <Col className="align-self-center" xs="12" md="6" order="2">
          <h3 className="enjoy-cta">{travelExperianceTitle}</h3>
          <p className="travelParagraph">{travelParagraph}</p>
          <Link to={buttonTravelExperience} className="enjoy-btn">
            Read more
          </Link>
        </Col>
        <Col sm="12" md="6" order="1">
          <img src={travelExperienceImage} className="img-fluid box-shadow"/>
        </Col>
      </Row>
      </Container>
    </Container>
  )
}
// Step 3: Export your component
export default LoayaltyProgram
