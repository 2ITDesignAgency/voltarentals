import React, { useEffect } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import FeaturedMedia from "../../components/FeaturedMedia"
import Slider from "../../components/homepageelements/Slider"
import Section2 from "../../components/homepageelements/section2"
import FleetHome from "../../components/homepageelements/FleetHome"
import NewsFeed from "../../components/homepageelements/newsFeed"

const page = ({ data }) => {
  const { page } = data
  const { title, content, featuredImage, excerpt, databaseId, frontPage } = page

  useEffect(() => {
    if (window.startWheels) {
      window.reloadTheEngine()
    }
  }, [])

  let pageName = title
  const homepage = "HOME"
  const locationsPage = "LOCATIONS"
  const services = "SERVICES"

  // homepage template
  if (homepage == title) {
    return (
      <Layout
        bodyClass={`page-template-default page page-id-${databaseId} wp-embed-responsive singular missing-post-thumbnail has-no-pagination not-showing-comments footer-top-visible customize-support`}
      >
        {/*front-page section 2 start*/}
        <div className="sliderHome">
          <Slider />
        </div>
        <Section2 />
        <FleetHome />
        <NewsFeed />
        <ul>
          <li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          </li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>
      </Layout>
    )
  }
  // page template that dont have a special page
  else {
    return (
      <Layout
        bodyClass={`page-template-default page page-id-${databaseId} wp-embed-responsive singular missing-post-thumbnail has-no-pagination not-showing-comments footer-top-visible customize-support`}
      >
        <Seo title={title} description={excerpt} />

        <article
          className={`post-${databaseId} post page type-page status-publish hentry`}
          id={`post-${databaseId}`}
        >
          <header
            className="entry-header has-text-align-center header-footer-group header-cta"
            // style={{ background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)) , url('${featuredImage.node.sourceUrl}') center center no-repeat` }}
          >
            <div className="entry-header-inner section-inner medium">
              <h1
                className="entry-title"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </div>
          </header>

          {/* <FeaturedMedia image={featuredImage} /> */}

          <div className="post-inner thin">
            <div
              className="entry-content"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </article>
      </Layout>
    )
  }
}

export const query = graphql`
  query page($id: String!, $nextPage: String, $previousPage: String) {
    page: wpPage(id: { eq: $id }) {
      ...PageContent
    }

    nextPage: wpPage(id: { eq: $nextPage }) {
      title
      uri
    }

    previousPage: wpPage(id: { eq: $previousPage }) {
      title
      uri
    }
  }
`

export default page
