import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Layout from "../Layout"

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
    <main>
      {/* front-page section 4 start*/}
      <div className="cyan-content section_2">
        <div
          className="section-divider"
          style={{ backgroundColor: `#e8f1f2` }}
        ></div>
        <div className="entry-content">
          <h1 className="todays-car-rental">{featuredPostTitle}</h1>
          <h3 className="section_3_sub_title">{featuredPostSutitle}</h3>
          {/* 3 column offers start */}
          <div className="offer-row">
            {/* post 1 */}
            <div className="offer-post col-4">
              <Link to={featuredPost1Slug}>
                <img src={featuredPost1Img} />
              </Link>
              <div>
                <h2 className="entry-title heading-size-1 archive-post-title">
                  {featuredPost1Title}
                </h2>
                <div
                  dangerouslySetInnerHTML={{ __html: featuredPost1Excerpt }}
                  className="offer-post-excerpt"
                />
                <Link to={featuredPost1Slug} className="Offer-btn">
                  Read more
                </Link>
              </div>
            </div>
            {/* post 2 */}
            <div className="offer-post col-4">
              <Link to={featuredPost2Slug}>
                <img src={featuredPost2Img} />
              </Link>
              <div>
                <h2 className="entry-title heading-size-1 archive-post-title">
                  {featuredPost2Title}
                </h2>
                <div
                  dangerouslySetInnerHTML={{ __html: featuredPost2Excerpt }}
                  className="offer-post-excerpt"
                />
                <Link to={featuredPost2Slug} className="Offer-btn">
                  Read more
                </Link>
              </div>
            </div>
            {/* post 3 */}
            <div className="offer-post col-4">
              <Link to={featuredPost3Slug}>
                <img src={featuredPost3Img} />
              </Link>
              <div>
                <h2 className="entry-title heading-size-1 archive-post-title">
                  {featuredPost3Title}
                </h2>
                <div
                  dangerouslySetInnerHTML={{ __html: featuredPost3Excerpt }}
                  className="offer-post-excerpt"
                />
                <Link to={featuredPost3Slug} className="Offer-btn">
                  Read more
                </Link>
              </div>
            </div>
            {/* post 4 */}
            <div className="offer-post col-4">
              <Link to={featuredPost4Slug}>
                <img src={featuredPost4Img} />
              </Link>
              <div>
                <h2 className="entry-title heading-size-1 archive-post-title">
                  {featuredPost4Title}
                </h2>
                <div
                  dangerouslySetInnerHTML={{ __html: featuredPost4Excerpt }}
                  className="offer-post-excerpt"
                />
                <Link to={featuredPost4Slug} className="Offer-btn">
                  Read more
                </Link>
              </div>
            </div>
          </div>
          {/* 3 column offers end*/}
        </div>
      </div>
      {/* front-page section 4 end*/}
    </main>
  )
}
// Step 3: Export your component
export default NewsFeed
