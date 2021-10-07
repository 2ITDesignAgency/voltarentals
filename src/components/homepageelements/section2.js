import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import WheelsBook from "./WheelsBook"

// Step 2: Define your component

const Section2 = () => {
  const { wpPage } = useStaticQuery(graphql`
    {
      wpPage(title: { eq: "HOME" }) {
        frontPage {
          heroCta {
            ctaForm
            ctaText
            imageBackground {
              uri
              sourceUrl
            }
          }
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
  // const { page } = wpPage
  // const { frontPage } = wpPage

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

  // section 2 veriables start
  // enjoy cta veriables
  const travelExperianceTitle = wpPage.frontPage.section2.travelExperianceTitle
  const travelParagraph = wpPage.frontPage.section2.travelParagraph
  const buttonTravelExperience =
    wpPage.frontPage.section2.buttonTravelExperience
  const travelExperienceImage =
    wpPage.frontPage.section2.travelExperienceImage.sourceUrl
  // const travelExperienceImage = frontPage.section2.travelExperienceImage
  return (
    <container>
      <div className="cyan-content section_2">
      <WheelsBook />
        <div className="entry-content">
          <div className="car-rental-title">
            <h1 className="todays-car-rental ">{offerTitle}</h1>
          </div>
          {/* 3 column offers start */}
          <div className="offer-row">
            {/* post 1 */}
            <div className="offer-post">
              <Link to={offerPost1Slug}>
                <img src={offerPost1Img} />
              </Link>
              <div class="post-content-single">
                <h2 className="entry-title heading-size-1 archive-post-title">
                  {offerPost1Title}
                </h2>
                <div
                  dangerouslySetInnerHTML={{ __html: offerPost1Excerpt }}
                  className="offer-post-excerpt"
                />
                <Link to={offerPost1Slug} className="Offer-btn">
                  Read more
                </Link>
              </div>
            </div>
            {/* post 2 */}
            <div className="offer-post">
              <Link to={offerPost2Slug}>
                <img src={offerPost2Img} />
              </Link>
              <div class="post-content-single">
                <h2 className="entry-title heading-size-1 archive-post-title">
                  {offerPost2Title}
                </h2>
                <div
                  dangerouslySetInnerHTML={{ __html: offerPost2Excerpt }}
                  className="offer-post-excerpt"
                />
                <Link to={offerPost2Slug} className="Offer-btn">
                  Read more
                </Link>
              </div>
            </div>
            {/* post 3 */}
            <div className="offer-post">
              <Link to={offerPost3Slug}>
                <img src={offerPost3Img} />
              </Link>
              <div class="post-content-single">
                <h2 className="entry-title heading-size-1 archive-post-title">
                  {offerPost3Title}
                </h2>
                <div
                  dangerouslySetInnerHTML={{ __html: offerPost3Excerpt }}
                  className="offer-post-excerpt"
                />
                <Link to={offerPost3Slug} className="Offer-btn">
                  Read more
                </Link>
              </div>
            </div>
          </div>
          {/* 3 column offers end*/}

          {/* 2 column enjoy cta section */}
          <div className="enjoy-cta-row row">
            <div className="col md-2">
              <h3>{travelExperianceTitle}</h3>
              <p className="travelParagraph">{travelParagraph}</p>
              <Link to={buttonTravelExperience} className="enjoy-btn">
                Read more
              </Link>
            </div>
            <div className="col enjoy md-2">
              <img src={travelExperienceImage} />
            </div>
          </div>
          {/* 2 column enjoy cta section */}
        </div>
      </div>
      {/*front-page section 2 end*/}
    </container>
  )
}
// Step 3: Export your component
export default Section2
