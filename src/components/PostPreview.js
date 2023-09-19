import React from "react"
import { Link } from "gatsby"
import PostCategories from "./PostCategories"
import FeaturedMedia from "./FeaturedMedia"
import { Button } from "reactstrap"
import "../components/homepageelements/hompageBootstrap.scss"
const PostPreview = ({ post, isLast }) => {
  return (
    <>
      <article
        className={`post-${post.databaseId} post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized article-post`}
        id={`post-${post.databaseId}`}
      >
        <div className={"article-single-post"}>
          <Link to={post.uri}>
            <FeaturedMedia image={post.featuredImage} />
          </Link>
          <header className="entry-header">
            <div className="entry-header-inner section-inner medium">
              <PostCategories categories={post.categories} />
              <h2 className="entry-title heading-size-1 archive-post-title">
                <Link
                  to={post.uri}
                  dangerouslySetInnerHTML={{ __html: post.title }}
                />
              </h2>
            </div>
          </header>

          <div className="post-inner thin ">
            <div className="entry-content archive-post">
              <div
                dangerouslySetInnerHTML={{ __html: post.excerpt }}
                className="card-text"
              />
            </div>
            <div class="d-grid gap-2">
            <Button color="btn btn-success mb-4">
              <Link to={post.uri} className="readMore">
                Read more
              </Link>
            </Button>
            </div>
          </div>
        </div>
      </article>

      {/* {!isLast && (
        <hr
          key={post.postId + "-hr"}
          className="post-separator styled-separator is-style-wide section-inner"
          aria-hidden="true"
        />
      )} */}
    </>
  )
}

export default PostPreview
