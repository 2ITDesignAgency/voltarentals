import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PostPreview from "../components/PostPreview"
import ArchivePagination from "../components/ArchivePagination"
import {
  Container,
  Row,
} from "reactstrap"
const Archive = (props) => {
  const {
    data: {
      allWpPost: { nodes, pageInfo },
    },
    pageContext: { archiveType, archivePath },
  } = props

  return (
    <Layout bodyClass="home blog wp-embed-responsive has-no-pagination showing-comments hide-avatars footer-top-visible customize-support">
      <Seo title="Home" description="Welcome to volta4u" />
      <Container>
      <Row xs="1" lg="3">
        {nodes &&
          nodes.map((post, index) => {
            return (
              <PostPreview
                key={index}
                post={post}
                isLast={index === nodes.length - 1}
              />
            )
          })}
      </Row>
      <ArchivePagination {...pageInfo} archivePath={archivePath} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query ArchivePage(
    $offset: Int!
    $perPage: Int!
    $userDatabaseId: Int
    $categoryDatabaseId: Int
  ) {
    allWpPost(
      limit: $perPage
      skip: $offset
      filter: {
        author: { node: { databaseId: { eq: $userDatabaseId } } }
        categories: {
          nodes: { elemMatch: { databaseId: { eq: $categoryDatabaseId } } }
        }
      }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        ...PostPreviewContent
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        currentPage
        pageCount
      }
    }
  }
`

export default Archive
