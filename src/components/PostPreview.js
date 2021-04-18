import React from "react"
import { Link } from "gatsby"
import PostCategories from "./PostCategories"
import FeaturedMedia from "./FeaturedMedia"

const PostPreview = ({ post, isLast }) => {
  return (
    <>
      <article
        className={`post-${post.databaseId} post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized article-post`}
        id={`post-${post.databaseId}`}
      >
        <div className={'article-single-post'}>
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
          <div className="entry-content">
            <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
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
