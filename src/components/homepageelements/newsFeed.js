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

const NewsFeed = () => {
  const { wpPage } = useStaticQuery(graphql`
    {
      wpPage(title: { eq: "HOME" }) {
        frontPage {
          section4 {
            featuredPostSutitle
            featuredPostTitle
            featuredPosts1 {
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
            featuredPosts2 {
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
            featuredPosts3 {
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
            featuredPosts4 {
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
  // section 4 start
  // section title
  const featuredPostTitle = wpPage.frontPage.section4.featuredPostTitle
  const featuredPostSutitle = wpPage.frontPage.section4.featuredPostSutitle

  // section blog

  // Featuredpost 1
  const featuredPost1Title = wpPage.frontPage.section4.featuredPosts1.title
  const featuredPost1Excerpt = wpPage.frontPage.section4.featuredPosts1.excerpt
  const featuredPost1Slug = wpPage.frontPage.section4.featuredPosts1.slug
  const featuredPost1Img =
    wpPage.frontPage.section4.featuredPosts1.featuredImage.node.sourceUrl

  // Featuredpost 2
  const featuredPost2Title = wpPage.frontPage.section4.featuredPosts2.title
  const featuredPost2Excerpt = wpPage.frontPage.section4.featuredPosts2.excerpt
  const featuredPost2Slug = wpPage.frontPage.section4.featuredPosts2.slug
  const featuredPost2Img =
    wpPage.frontPage.section4.featuredPosts2.featuredImage.node.sourceUrl

  // Featuredpost 3
  const featuredPost3Title = wpPage.frontPage.section4.featuredPosts3.title
  const featuredPost3Excerpt = wpPage.frontPage.section4.featuredPosts3.excerpt
  const featuredPost3Slug = wpPage.frontPage.section4.featuredPosts3.slug
  const featuredPost3Img =
    wpPage.frontPage.section4.featuredPosts3.featuredImage.node.sourceUrl

  // Featuredpost 4
  const featuredPost4Title = wpPage.frontPage.section4.featuredPosts4.title
  const featuredPost4Excerpt = wpPage.frontPage.section4.featuredPosts4.excerpt
  const featuredPost4Slug = wpPage.frontPage.section4.featuredPosts4.slug
  const featuredPost4Img =
    wpPage.frontPage.section4.featuredPosts4.featuredImage.node.sourceUrl
  return (
    <Container fluid className="cyan-content ">
      <Container>
        <Row className="car-rental-title d-flex flex-column">
          <h1 className="sectionTitle text-center">{featuredPostTitle}</h1>
          <h3 className="section_3_sub_title text-center">
            {featuredPostSutitle}
          </h3>
        </Row>
        <Row>
          {/* post 1 */}
          <Col xs="12" sm="12" md="3">
            <Card>
              <Link to={featuredPost1Slug}>
                <CardImg
                  top
                  width="100%"
                  src={featuredPost1Img}
                  alt="Card image cap"
                />
              </Link>
              <CardBody>
              <Link to={featuredPost1Slug} className="CardTitleLink">
                <CardTitle tag="h5">{featuredPost1Title}</CardTitle>
                </Link>
                <CardText
                  dangerouslySetInnerHTML={{ __html: `<div>${featuredPost1Excerpt}</div>` }}
                ></CardText>
                <Button color="success">
                  <Link to={featuredPost1Slug} className="readMore">
                    Read more
                  </Link>
                </Button>
              </CardBody>
            </Card>
          </Col>
          {/* post 2 */}
          <Col xs="12" sm="12" md="3">
            <Card>
              <Link to={featuredPost2Slug}>
                <CardImg
                  top
                  width="100%"
                  src={featuredPost2Img}
                  alt="Card image cap"
                />
              </Link>
              <CardBody>
              <Link to={featuredPost2Slug} className="CardTitleLink">
                <CardTitle tag="h5">{featuredPost2Title}</CardTitle>
                </Link>
                <CardText
                  dangerouslySetInnerHTML={{ __html: `<div>${featuredPost1Excerpt}</div>` }}
                  ></CardText>
                <Button color="success">
                  <Link to={featuredPost3Slug} className="readMore">
                    Read more
                  </Link>
                </Button>
              </CardBody>
            </Card>
          </Col>
          {/* post 3 */}
          <Col xs="12" sm="12" md="3">
            <Card>
              <Link to={featuredPost3Slug}>
                <CardImg
                  top
                  width="100%"
                  src={featuredPost3Img}
                  alt="Card image cap"
                />
              </Link>
              <CardBody>
                <Link to={featuredPost3Slug} className="CardTitleLink">
                  <CardTitle tag="h5">{featuredPost3Title}</CardTitle>
                </Link>
                <CardText
                  dangerouslySetInnerHTML={{ __html: `<div>${featuredPost1Excerpt}</div>` }}
                  ></CardText>
                <Button color="success">
                  <Link to={featuredPost3Slug} className="readMore">
                    Read more
                  </Link>
                </Button>
              </CardBody>
            </Card>
          </Col>
          {/* post 4 */}
          <Col xs="12" sm="12" md="3">
            <Card>
              <Link to={featuredPost4Slug}>
                <CardImg
                  top
                  width="100%"
                  src={featuredPost4Img}
                  alt="Card image cap"
                />
              </Link>
              <CardBody>
              <Link to={featuredPost4Slug} className="CardTitleLink">
                <CardTitle tag="h5">{featuredPost4Title}</CardTitle>
                </Link>
                <CardText
                  dangerouslySetInnerHTML={{ __html: `<div>${featuredPost1Excerpt}</div>` }}
                  ></CardText>
                <Button color="success">
                  <Link to={featuredPost4Slug} className="readMore">
                    Read more
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
export default NewsFeed
