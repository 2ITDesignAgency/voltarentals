import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap"
import "./hompageBootstrap.scss"
// Step 2: Define your component

const FleetHome = () => {
  const { wpPage } = useStaticQuery(graphql`
    {
      wpPage(title: { eq: "HOME" }) {
        frontPage {
          section3 {
            ctaButtonLink1
            ctaButtonLink2
            ctaButtonLink3
            ctaButtonText1
            ctaButtonText2
            ctaButtonText3
            ctaIcon1 {
              sourceUrl
            }
            ctaIcon2 {
              sourceUrl
            }
            ctaIcon3 {
              sourceUrl
            }
            ctaSubtitle1
            ctaSubtitle2
            ctaSubtitle3
            ctaTitle1
            ctaTitle2
            ctaTitle3
            fleetCategorie1Image {
              sourceUrl
            }
            fleetCategorie2Image {
              sourceUrl
            }
            fleetCategorie3Image {
              sourceUrl
            }
            fleetCategorie4Image {
              sourceUrl
            }
            fleetCategorie5Image {
              sourceUrl
            }
            fleetCategorie6Image {
              sourceUrl
            }
            fleetCategorie7Image {
              sourceUrl
            }
            fleetCategorie8Image {
              sourceUrl
            }
            fleetCategorieLink1
            fleetCategorieLink2
            fleetCategorieLink3
            fleetCategorieLink4
            fleetCategorieLink5
            fleetCategorieLink6
            fleetCategorieLink7
            fleetCategorieLink8
            fleetCategorieText1
            fleetCategorieText2
            fleetCategorieText3
            fleetCategorieText4
            fleetCategorieText5
            fleetCategorieText6
            fleetCategorieText7
            fleetCategorieText8
            fleetCategorieTitle1
            fleetCategorieTitle2
            fleetCategorieTitle3
            fleetCategorieTitle4
            fleetCategorieTitle5
            fleetCategorieTitle6
            fleetCategorieTitle7
            fleetCategorieTitle8
            fleetSubtitle
            fleetTitle
          }
        }
      }
    }
  `)
  //  section 3 veriable start
  // section 3 title and subtitle
  const fleetTitle = wpPage.frontPage.section3.fleetTitle
  const fleetSubtitle = wpPage.frontPage.section3.fleetSubtitle

  // section 3 fleet item 1
  const fleetCategorieTitle1 = wpPage.frontPage.section3.fleetCategorieTitle1
  const fleetCategorieText1 = wpPage.frontPage.section3.fleetCategorieText1
  const fleetCategorieLink1 = wpPage.frontPage.section3.fleetCategorieLink1
  const fleetCategorie1Image =
    wpPage.frontPage.section3.fleetCategorie1Image.sourceUrl

  // section 3 fleet item 2
  const fleetCategorieTitle2 = wpPage.frontPage.section3.fleetCategorieTitle2
  const fleetCategorieText2 = wpPage.frontPage.section3.fleetCategorieText2
  const fleetCategorieLink2 = wpPage.frontPage.section3.fleetCategorieLink2
  const fleetCategorie2Image =
    wpPage.frontPage.section3.fleetCategorie2Image.sourceUrl

  // section 3 fleet item 3
  const fleetCategorieTitle3 = wpPage.frontPage.section3.fleetCategorieTitle3
  const fleetCategorieText3 = wpPage.frontPage.section3.fleetCategorieText3
  const fleetCategorieLink3 = wpPage.frontPage.section3.fleetCategorieLink3
  const fleetCategorie3Image =
    wpPage.frontPage.section3.fleetCategorie3Image.sourceUrl

  // section 3 fleet item 4
  const fleetCategorieTitle4 = wpPage.frontPage.section3.fleetCategorieTitle4
  const fleetCategorieText4 = wpPage.frontPage.section3.fleetCategorieText4
  const fleetCategorieLink4 = wpPage.frontPage.section3.fleetCategorieLink4
  const fleetCategorie4Image =
    wpPage.frontPage.section3.fleetCategorie4Image.sourceUrl

  // section 3 fleet item 5
  const fleetCategorieTitle5 = wpPage.frontPage.section3.fleetCategorieTitle5
  const fleetCategorieText5 = wpPage.frontPage.section3.fleetCategorieText5
  const fleetCategorieLink5 = wpPage.frontPage.section3.fleetCategorieLink5
  const fleetCategorie5Image =
    wpPage.frontPage.section3.fleetCategorie5Image.sourceUrl

  // section 3 fleet item 6
  const fleetCategorieTitle6 = wpPage.frontPage.section3.fleetCategorieTitle6
  const fleetCategorieText6 = wpPage.frontPage.section3.fleetCategorieText6
  const fleetCategorieLink6 = wpPage.frontPage.section3.fleetCategorieLink6
  const fleetCategorie6Image =
    wpPage.frontPage.section3.fleetCategorie6Image.sourceUrl

  // section 3 fleet item 7
  const fleetCategorieTitle7 = wpPage.frontPage.section3.fleetCategorieTitle7
  const fleetCategorieText7 = wpPage.frontPage.section3.fleetCategorieText7
  const fleetCategorieLink7 = wpPage.frontPage.section3.fleetCategorieLink7
  const fleetCategorie7Image =
    wpPage.frontPage.section3.fleetCategorie7Image.sourceUrl

  // section 3 fleet item 8
  const fleetCategorieTitle8 = wpPage.frontPage.section3.fleetCategorieTitle8
  const fleetCategorieText8 = wpPage.frontPage.section3.fleetCategorieText8
  const fleetCategorieLink8 = wpPage.frontPage.section3.fleetCategorieLink8
  const fleetCategorie8Image =
    wpPage.frontPage.section3.fleetCategorie8Image.sourceUrl

  return (
    <Container>
      <Container>
        <Row className="car-rental-title d-flex flex-column">
          <h1 className="sectionTitle">{fleetTitle}</h1>
          <h3 className="section_3_sub_title">{fleetSubtitle}</h3>
        </Row>

        <Row>
          <Col xs="6" sm="6" md="3">
          <Card className="cardFleet">
              <Link to={fleetCategorieLink1}>
                <CardImg
                  top
                  width="100%"
                  src={fleetCategorie1Image}
                  alt="Card image cap"
                />
              </Link>
              <CardBody>
                <CardTitle tag="h5" className="offers-title">{fleetCategorieTitle1}</CardTitle>
                <CardText className="fleetText"
                  dangerouslySetInnerHTML={{ __html: fleetCategorieText1 }}
                ></CardText>
                <Button color="success">
                  <Link to={fleetCategorieLink1} className="readMore">
                    Discover more
                  </Link>
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="6" md="3">
          <Card className="cardFleet">
              <Link to={fleetCategorieLink2}>
                <CardImg
                  top
                  width="100%"
                  src={fleetCategorie2Image}
                  alt="Card image cap"
                />
              </Link>
              <CardBody>
                <CardTitle tag="h5" className="offers-title">{fleetCategorieTitle2}</CardTitle>
                <CardText className="fleetText"
                  dangerouslySetInnerHTML={{ __html: fleetCategorieText2 }}
                ></CardText>
                <Button color="success">
                  <Link to={fleetCategorieLink2} className="readMore">
                    Discover more
                  </Link>
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="6" md="3">
          <Card className="cardFleet">
              <Link to={fleetCategorieLink3}>
                <CardImg
                  top
                  width="100%"
                  src={fleetCategorie3Image}
                  alt="Card image cap"
                />
              </Link>
              <CardBody>
                <CardTitle tag="h5" className="offers-title">{fleetCategorieTitle3}</CardTitle>
                <CardText className="fleetText"
                  dangerouslySetInnerHTML={{ __html: fleetCategorieText3 }}
                ></CardText>
                <Button color="success">
                  <Link to={fleetCategorieLink3} className="readMore">
                    Discover more
                  </Link>
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="6" md="3">
          <Card className="cardFleet">
              <Link to={fleetCategorieLink4}>
                <CardImg
                  top
                  width="100%"
                  src={fleetCategorie4Image}
                  alt="Card image cap"
                />
              </Link>
              <CardBody>
                <CardTitle tag="h5" className="offers-title">{fleetCategorieTitle4}</CardTitle>
                <CardText className="fleetText"
                  dangerouslySetInnerHTML={{ __html: fleetCategorieText4 }}
                ></CardText>
                <Button color="success">
                  <Link to={fleetCategorieLink4} className="readMore">
                    Discover more
                  </Link>
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xs="6" sm="6" md="3">
          <Card className="cardFleet">
              <Link to={fleetCategorieLink5}>
                <CardImg
                  top
                  width="100%"
                  src={fleetCategorie5Image}
                  alt="Card image cap"
                />
              </Link>
              <CardBody>
                <CardTitle tag="h5" className="offers-title">{fleetCategorieTitle5}</CardTitle>
                <CardText className="fleetText"
                  dangerouslySetInnerHTML={{ __html: fleetCategorieText5 }}
                ></CardText>
                <Button color="success">
                  <Link to={fleetCategorieLink5} className="readMore">
                    Discover more
                  </Link>
                </Button>
              </CardBody>
            </Card>
            <Link to={fleetCategorieLink5} className="Offer-btn">
              Discover more
            </Link>
          </Col>
          <Col xs="6" sm="6" md="3">
          <Card className="cardFleet">
              <Link to={fleetCategorieLink6}>
                <CardImg
                  top
                  width="100%"
                  src={fleetCategorie6Image}
                  alt="Card image cap"
                />
              </Link>
              <CardBody>
                <CardTitle tag="h5" className="offers-title">{fleetCategorieTitle6}</CardTitle>
                <CardText className="fleetText"
                  dangerouslySetInnerHTML={{ __html: fleetCategorieText6 }}
                ></CardText>
                <Button color="success">
                  <Link to={fleetCategorieLink6} className="readMore">
                    Discover more
                  </Link>
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="6" md="3">
          <Card className="cardFleet">
              <Link to={fleetCategorieLink7}>
                <CardImg
                  top
                  width="100%"
                  src={fleetCategorie7Image}
                  alt="Card image cap"
                />
              </Link>
              <CardBody>
                <CardTitle tag="h5" className="offers-title">{fleetCategorieTitle7}</CardTitle>
                <CardText className="fleetText"
                  dangerouslySetInnerHTML={{ __html: fleetCategorieText7 }}
                ></CardText>
                <Button color="success">
                  <Link to={fleetCategorieLink7} className="readMore">
                    Discover more
                  </Link>
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="6" md="3">
          <Card className="cardFleet">
              <Link to={fleetCategorieLink8}>
                <CardImg
                  top
                  width="100%"
                  src={fleetCategorie8Image}
                  alt="Card image cap"
                />
              </Link>
              <CardBody>
                <CardTitle tag="h5" className="offers-title">{fleetCategorieTitle8}</CardTitle>
                <CardText className="fleetText"
                  dangerouslySetInnerHTML={{ __html: fleetCategorieText8 }}
                ></CardText>
                <Button color="success">
                  <Link to={fleetCategorieLink8} className="readMore">
                    Discover more
                  </Link>
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
// Step 3: Export your component
export default FleetHome
