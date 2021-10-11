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

const offersHome = () => {
  const { wpPage } = useStaticQuery(graphql`
    {
      wpPage(title: { eq: "HOME" }) {
        frontPage {
          section2 {
            buttonTravelExperience
            offersTitle
            featuredPost1 {
              ... on WpPost {
                id
                title
                slug
                categories {
                  nodes {
                    name
                    slug
                  }
                }
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
                excerpt
              }
            }
            featuredPost2 {
              ... on WpPost {
                id
                title
                slug
                categories {
                  nodes {
                    name
                    slug
                  }
                }
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
                excerpt
              }
            }
            featuredPost3 {
              ... on WpPost {
                id
                title
                slug
                categories {
                  nodes {
                    name
                    slug
                  }
                }
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
                excerpt
              }
            }
          }
        }
      }
    }
  `)
  // section 1 veriables start
  // offer veriables
  const offerTitle = wpPage.frontPage.section2.offersTitle

  // post 1
  const offerPost1Title = wpPage.frontPage.section2.featuredPost1.title
  const offerPost1Excerpt = wpPage.frontPage.section2.featuredPost1.excerpt
  const offerPost1Slug = wpPage.frontPage.section2.featuredPost1.slug
  const offerPost1Img =
    wpPage.frontPage.section2.featuredPost1.featuredImage.node.sourceUrl

  // post 2
  const offerPost2Title = wpPage.frontPage.section2.featuredPost2.title
  const offerPost2Excerpt = wpPage.frontPage.section2.featuredPost2.excerpt
  const offerPost2Slug = wpPage.frontPage.section2.featuredPost2.slug
  const offerPost2Img =
    wpPage.frontPage.section2.featuredPost2.featuredImage.node.sourceUrl

  // post 3
  const offerPost3Title = wpPage.frontPage.section2.featuredPost3.title
  const offerPost3Excerpt = wpPage.frontPage.section2.featuredPost3.excerpt
  const offerPost3Slug = wpPage.frontPage.section2.featuredPost3.slug
  const offerPost3Img =
    wpPage.frontPage.section2.featuredPost3.featuredImage.node.sourceUrl

  return (
    <Container>
      <Row className="car-rental-title">
        <h1 className="sectionTitle text-center">{offerTitle}</h1>
      </Row>
      {/* 3 column offers start */}
      <Row>
        {/* post 1 */}
        <Col xs="12" sm="6" md="4">
          <Card>
            <Link to={offerPost1Slug}>
              <CardImg
                top
                width="100%"
                src={offerPost1Img}
                alt="Card image cap"
              />
            </Link>
            <CardBody>
              <Link to={offerPost1Slug}>
                <CardTitle tag="h5" className="offers-title">
                  {offerPost1Title}
                </CardTitle>
              </Link>
              <CardText
                dangerouslySetInnerHTML={{ __html: offerPost1Excerpt }}
              ></CardText>
              <Button color="success">
                <Link to={offerPost1Slug} className="readMore">
                  Read more
                </Link>
              </Button>
            </CardBody>
          </Card>
        </Col>
        {/* post 2 */}
        <Col xs="12" sm="6" md="4">
          <Card>
            <Link to={offerPost2Slug}>
              <CardImg
                top
                width="100%"
                src={offerPost2Img}
                alt="Card image cap"
              />
            </Link>
            <CardBody>
              <Link to={offerPost2Slug}>
                <CardTitle tag="h5" className="offers-title">
                  {offerPost2Title}
                </CardTitle>
              </Link>{" "}
              <CardText
                dangerouslySetInnerHTML={{ __html: offerPost2Excerpt }}
              ></CardText>
              <Button color="success">
                <Link to={offerPost3Slug} className="readMore">
                  Read more
                </Link>
              </Button>
            </CardBody>
          </Card>
        </Col>
        {/* post 3 */}
        <Col xs="12" sm="6" md="4">
          <Card>
            <Link to={offerPost3Slug}>
              <CardImg
                top
                width="100%"
                src={offerPost3Img}
                alt="Card image cap"
              />
            </Link>
            <CardBody>
              <Link to={offerPost3Slug}>
                <CardTitle tag="h5" className="offers-title">
                  {offerPost3Title}
                </CardTitle>
              </Link>
              <CardText
                dangerouslySetInnerHTML={{ __html: offerPost3Excerpt }}
              ></CardText>
              <Button color="success">
                <Link to={offerPost3Slug} className="readMore">
                  Read more
                </Link>
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
      {/* 3 column offers end*/}
    </Container>
  )
}
// Step 3: Export your component
export default offersHome
