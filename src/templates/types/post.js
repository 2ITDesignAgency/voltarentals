import React, {useEffect} from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import AuthorBio from "../../components/AuthorBio"
import PostCategories from "../../components/PostCategories"
import FeaturedMedia from "../../components/FeaturedMedia"
import { Container, Row } from "reactstrap"

const post = ({ data }) => {
  const { page } = data
  const {
    title,
    content,
    featuredImage,
    categories,
    excerpt,
    databaseId,
    author,
  } = page

  useEffect(() => {
    if (window.startWheels) {
      window.reloadTheEngine()
    }
  }, [])

  return (
    <Layout
      bodyClass={`post-template-default single single-post postid-${databaseId} single-format-standard wp-embed-responsive singular has-post-thumbnail has-single-pagination showing-comments footer-top-visible customize-support`}
    >
      <Seo title={title} description={excerpt} />
      <article
        className={`post-${databaseId} post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized`}
        id={`post-${databaseId}`}
      >
        <header className="entry-header has-text-align-center header-footer-group">
          <div className="entry-header-inner section-inner medium">
            <PostCategories
              categories={categories}
              className="single-post-categiries"
            />
            <h1
              className="entry-title"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </div>
        </header>
        <Container fluid>
        <FeaturedMedia image={featuredImage} />
        <Row
            dangerouslySetInnerHTML={{ __html: content }}
            className="entry-content post-content"
          />
        </Container>
        
        <div className="post-inner thin">
          {post.Blocks && <post.Blocks />}

        </div>
        <div className="section-inner">
          <AuthorBio author={author} />
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query post($id: String!, $nextPage: String, $previousPage: String) {
    page: wpPost(id: { eq: $id }) {
      ...PostContent
    }
    nextPage: wpPost(id: { eq: $nextPage }) {
      title
      uri
    }
    previousPage: wpPost(id: { eq: $previousPage }) {
      title
      uri
    }
  }
`

export default post
