import React, { useEffect } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import FeaturedMedia from "../../components/FeaturedMedia"

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
    // section heroCta veriables start
    // slider veriables
    const sliderImage = frontPage.heroCta.imageBackground.sourceUrl
    const sliderText = frontPage.heroCta.ctaText

    // section 1 veriables start
    // offer veriables
    const offerTitle = frontPage.section2.offersTitle

    // post 1
    const offerPost1Title = frontPage.section2.featuredPost1.title
    const offerPost1Excerpt = frontPage.section2.featuredPost1.excerpt
    const offerPost1Slug = frontPage.section2.featuredPost1.slug
    const offerPost1Img =
      frontPage.section2.featuredPost1.featuredImage.node.sourceUrl

    // post 2
    const offerPost2Title = frontPage.section2.featuredPost2.title
    const offerPost2Excerpt = frontPage.section2.featuredPost2.excerpt
    const offerPost2Slug = frontPage.section2.featuredPost2.slug
    const offerPost2Img =
      frontPage.section2.featuredPost2.featuredImage.node.sourceUrl

    // post 3
    const offerPost3Title = frontPage.section2.featuredPost3.title
    const offerPost3Excerpt = frontPage.section2.featuredPost3.excerpt
    const offerPost3Slug = frontPage.section2.featuredPost3.slug
    const offerPost3Img =
      frontPage.section2.featuredPost3.featuredImage.node.sourceUrl

    // section 2 veriables start
    // enjoy cta veriables
    const travelExperianceTitle = frontPage.section2.travelExperianceTitle
    const travelParagraph = frontPage.section2.travelParagraph
    const buttonTravelExperience = frontPage.section2.buttonTravelExperience
    const travelExperienceImage =
      frontPage.section2.travelExperienceImage.sourceUrl
    // const travelExperienceImage = frontPage.section2.travelExperienceImage

    //  section 3 veriable start
    // section 3 title and subtitle
    const fleetTitle = frontPage.section3.fleetTitle
    const fleetSubtitle = frontPage.section3.fleetSubtitle

    // section 3 fleet 1
    const fleetCategorieTitle1 = frontPage.section3.fleetCategorieTitle1
    const fleetCategorieText1 = frontPage.section3.fleetCategorieText1
    const fleetCategorieLink1 = frontPage.section3.fleetCategorieLink1
    const fleetCategorie1Image =
      frontPage.section3.fleetCategorie1Image.sourceUrl

    // section 3 fleet 2
    const fleetCategorieTitle2 = frontPage.section3.fleetCategorieTitle2
    const fleetCategorieText2 = frontPage.section3.fleetCategorieText2
    const fleetCategorieLink2 = frontPage.section3.fleetCategorieLink2
    const fleetCategorie2Image =
      frontPage.section3.fleetCategorie2Image.sourceUrl

    // section 3 fleet 3
    const fleetCategorieTitle3 = frontPage.section3.fleetCategorieTitle3
    const fleetCategorieText3 = frontPage.section3.fleetCategorieText3
    const fleetCategorieLink3 = frontPage.section3.fleetCategorieLink3
    const fleetCategorie3Image =
      frontPage.section3.fleetCategorie3Image.sourceUrl

    // section 3 fleet 4
    const fleetCategorieTitle4 = frontPage.section3.fleetCategorieTitle4
    const fleetCategorieText4 = frontPage.section3.fleetCategorieText4
    const fleetCategorieLink4 = frontPage.section3.fleetCategorieLink4
    const fleetCategorie4Image =
      frontPage.section3.fleetCategorie4Image.sourceUrl

    // section 3 cta 1
    const ctaTitle1 = frontPage.section3.ctaTitle1
    const ctaSubtitle1 = frontPage.section3.ctaSubtitle1
    const ctaButtonText1 = frontPage.section3.ctaButtonText1
    const ctaButtonLink1 = frontPage.section3.ctaButtonLink1
    const ctaIcon1 = frontPage.section3.ctaIcon1.sourceUrl

    // section 3 cta 2
    const ctaTitle2 = frontPage.section3.ctaTitle2
    const ctaSubtitle2 = frontPage.section3.ctaSubtitle2
    const ctaButtonText2 = frontPage.section3.ctaButtonText2
    const ctaButtonLink2 = frontPage.section3.ctaButtonLink2
    const ctaIcon2 = frontPage.section3.ctaIcon2.sourceUrl

    // section 3 cta 3
    const ctaTitle3 = frontPage.section3.ctaTitle3
    const ctaSubtitle3 = frontPage.section3.ctaSubtitle3
    const ctaButtonText3 = frontPage.section3.ctaButtonText3
    const ctaButtonLink3 = frontPage.section3.ctaButtonLink3
    const ctaIcon3 = frontPage.section3.ctaIcon3.sourceUrl

    // section 4 start
    // section title
    const featuredPostTitle = frontPage.section4.featuredPostTitle
    const featuredPostSutitle = frontPage.section4.featuredPostSutitle

    // section blog

    // Featuredpost 1
    const featuredPost1Title = frontPage.section4.featuredPosts1.title
    const featuredPost1Excerpt = frontPage.section4.featuredPosts1.excerpt
    const featuredPost1Slug = frontPage.section4.featuredPosts1.slug
    const featuredPost1Img =
      frontPage.section4.featuredPosts1.featuredImage.node.sourceUrl

    // Featuredpost 2
    const featuredPost2Title = frontPage.section4.featuredPosts2.title
    const featuredPost2Excerpt = frontPage.section4.featuredPosts2.excerpt
    const featuredPost2Slug = frontPage.section4.featuredPosts2.slug
    const featuredPost2Img =
      frontPage.section4.featuredPosts2.featuredImage.node.sourceUrl

    // Featuredpost 3
    const featuredPost3Title = frontPage.section4.featuredPosts3.title
    const featuredPost3Excerpt = frontPage.section4.featuredPosts3.excerpt
    const featuredPost3Slug = frontPage.section4.featuredPosts3.slug
    const featuredPost3Img =
      frontPage.section4.featuredPosts3.featuredImage.node.sourceUrl

    // Featuredpost 4
    const featuredPost4Title = frontPage.section4.featuredPosts4.title
    const featuredPost4Excerpt = frontPage.section4.featuredPosts4.excerpt
    const featuredPost4Slug = frontPage.section4.featuredPosts4.slug
    const featuredPost4Img =
      frontPage.section4.featuredPosts4.featuredImage.node.sourceUrl

    return (
      <Layout
        bodyClass={`page-template-default page page-id-${databaseId} wp-embed-responsive singular missing-post-thumbnail has-no-pagination not-showing-comments footer-top-visible customize-support`}
      >
        {/*front-page header with booking system start*/}
        <header
          className="header-cta section_1"
          style={{
            background: `url(${sliderImage}) center center`
          }}
        >
          <div className="entry-content">
            <h1 className="header-cta-title">{sliderText}</h1>
          </div>
          <div className="cta-booking ">
            <div id="wheelsbook" style={{ maxWidth: `1040px` }}></div>
          </div>
        </header>
        {/*front-page header with booking system end*/}

        {/*front-page section 2 start*/}
        <div className="cyan-content section_2">
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
                <div>
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
                <div>
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
                <div>
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
          <div
            className="entry-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
        {/*front-page section 2 end*/}

        {/* front-page section 3 start*/}
        <div
          className="section-divider"
          style={{ backgroundColor: `#e8f1f2` }}
        ></div>
        <div className="section_3">
          {/* fleet categories title and subtitle start*/}
          <h1 className="section_3_title">{fleetTitle}</h1>
          <h3 className="section_3_sub_title">{fleetSubtitle}</h3>
          {/* fleet categories title and subtitle start*/}

          {/* fleet categories start*/}
          <div className="entry-content">
            {/* categories row start */}
            <div className="section_3_row">
              {/* fleet categories col 1*/}
              <div className="section_3_col">
                <Link to={`/our-fleet/cyti-cars/`}>
                  <img src={fleetCategorie1Image} />
                </Link>
                <div>
                  <h2 className="entry-title heading-size-1 archive-post-title">
                    {fleetCategorieTitle1}
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{ __html: fleetCategorieText1 }}
                    className="offer-post-excerpt"
                  />
                  <Link to={`/our-fleet/cyti-cars/`} className="Offer-btn">
                    Read more
                  </Link>
                </div>
              </div>
              {/* fleet categories col 1 end */}

              {/* fleet categories col 2*/}
              <div className="section_3_col">
                <Link to={`/our-fleet/electric/`}>
                  <img src={fleetCategorie2Image} />
                </Link>
                <div>
                  <h2 className="entry-title heading-size-1 archive-post-title">
                    {fleetCategorieTitle2}
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{ __html: fleetCategorieText2 }}
                    className="offer-post-excerpt"
                  />
                  <Link to={fleetCategorieLink2} className="Offer-btn">
                    Read more
                  </Link>
                </div>
              </div>
              {/* fleet categories col 2 end */}

              {/* fleet categories col 3 */}
              <div className="section_3_col">
                <Link to={fleetCategorieLink3}>
                  <img src={fleetCategorie3Image} />
                </Link>
                <div>
                  <h2 className="entry-title heading-size-1 archive-post-title">
                    {fleetCategorieTitle3}
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{ __html: fleetCategorieText3 }}
                    className="offer-post-excerpt"
                  />
                  <Link to={fleetCategorieLink3} className="Offer-btn">
                    Read more
                  </Link>
                </div>
              </div>
              {/* fleet categories col 3 end */}

              {/* fleet categories col 4 */}
              <div className="section_3_col">
                <Link to={fleetCategorieLink4}>
                  <img src={fleetCategorie4Image} />
                </Link>
                <div>
                  <h2 className="entry-title heading-size-1 archive-post-title">
                    {fleetCategorieTitle4}
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{ __html: fleetCategorieText4 }}
                    className="offer-post-excerpt"
                  />
                  <Link to={fleetCategorieLink4} className="Offer-btn">
                    Read more
                  </Link>
                </div>
              </div>
              {/* fleet categories col 4 end */}
            </div>
            {/* categories row end */}

            <div className="section_3_row cta">
              {/* fleet categories col 1*/}
              <div className="cta cta-col">
                <Link to={ctaButtonLink1}>
                  <img src={ctaIcon1} className="cta-icon" />
                </Link>
                <div>
                  <h2 className="entry-title heading-size-1 archive-post-title cta">
                    {ctaTitle1}
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{ __html: ctaSubtitle1 }}
                    className="offer-post-excerpt"
                  />
                  <Link to={ctaButtonLink1} className="enjoy-btn cta">
                    {ctaButtonText1}
                  </Link>
                </div>
              </div>
              {/* fleet categories col 1 end */}

              {/* fleet categories col 2*/}
              <div className="cta cta-col">
                <Link to={ctaButtonLink2}>
                  <img src={ctaIcon2} className="cta-icon" />
                </Link>
                <div>
                  <h2 className="entry-title heading-size-1 archive-post-title cta">
                    {ctaTitle2}
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{ __html: ctaSubtitle2 }}
                    className="offer-post-excerpt"
                  />
                  <Link to={ctaButtonLink2} className="enjoy-btn cta">
                    {ctaButtonText2}
                  </Link>
                </div>
              </div>
              {/* fleet categories col 2 end */}

              {/* fleet categories col 3 */}
              <div className="cta cta-col">
                <Link to={ctaButtonLink3}>
                  <img src={ctaIcon3} className="cta-icon" />
                </Link>
                <div>
                  <h2 className="entry-title heading-size-1 archive-post-title cta">
                    {ctaTitle3}
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{ __html: ctaSubtitle3 }}
                    className="offer-post-excerpt"
                  />
                  <Link to={ctaButtonLink3} className="enjoy-btn cta">
                    {ctaButtonText3}
                  </Link>
                </div>
              </div>
              {/* fleet categories col 3 end */}
            </div>
            {/* categories row end */}
          </div>
          {/* fleet categories end*/}
        </div>
        {/* front-page section 3 end*/}

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

          <div
            className="entry-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
        {/* front-page section 4 end*/}

        {/*front-page section 5 start*/}
        <div className="section_3"> </div>
        {/*front-page section 5 end*/}
      </Layout>
    )
  }
  // page template that dont have a special page
  else {
    console.log(featuredImage);
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
            style={{ background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)) , url('${featuredImage.node.sourceUrl}') center center no-repeat` }}
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
