import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Layout from "../Layout"

// Step 2: Define your component

const FleetHome = () => {
  const { wpPage } = useStaticQuery(graphql`
    {
      wpPage(title: { eq: "HOME" }) {
        frontPage {
          section3 {
            ctaButtonLink1
            ctaButtonLink2
            ctaButtonLink3
            ctaButtonText1
            ctaButtonText2
            ctaButtonText3
            ctaIcon1 {
              sourceUrl
            }
            ctaIcon2 {
              sourceUrl
            }
            ctaIcon3 {
              sourceUrl
            }
            ctaSubtitle1
            ctaSubtitle2
            ctaSubtitle3
            ctaTitle1
            ctaTitle2
            ctaTitle3
            fleetCategorie1Image {
              sourceUrl
            }
            fleetCategorie2Image {
              sourceUrl
            }
            fleetCategorie3Image {
              sourceUrl
            }
            fleetCategorie4Image {
              sourceUrl
            }
            fleetCategorie5Image {
              sourceUrl
            }
            fleetCategorie6Image {
              sourceUrl
            }
            fleetCategorie7Image {
              sourceUrl
            }
            fleetCategorie8Image {
              sourceUrl
            }
            fleetCategorieLink1
            fleetCategorieLink2
            fleetCategorieLink3
            fleetCategorieLink4
            fleetCategorieLink5
            fleetCategorieLink6
            fleetCategorieLink7
            fleetCategorieLink8
            fleetCategorieText1
            fleetCategorieText2
            fleetCategorieText3
            fleetCategorieText4
            fleetCategorieText5
            fleetCategorieText6
            fleetCategorieText7
            fleetCategorieText8
            fleetCategorieTitle1
            fleetCategorieTitle2
            fleetCategorieTitle3
            fleetCategorieTitle4
            fleetCategorieTitle5
            fleetCategorieTitle6
            fleetCategorieTitle7
            fleetCategorieTitle8
            fleetSubtitle
            fleetTitle
          }
        }
      }
    }
  `)
  //  section 3 veriable start
  // section 3 title and subtitle
  const fleetTitle = wpPage.frontPage.section3.fleetTitle
  const fleetSubtitle = wpPage.frontPage.section3.fleetSubtitle

  // section 3 fleet item 1
  const fleetCategorieTitle1 = wpPage.frontPage.section3.fleetCategorieTitle1
  const fleetCategorieText1 = wpPage.frontPage.section3.fleetCategorieText1
  const fleetCategorieLink1 = wpPage.frontPage.section3.fleetCategorieLink1
  const fleetCategorie1Image =
    wpPage.frontPage.section3.fleetCategorie1Image.sourceUrl

  // section 3 fleet item 2
  const fleetCategorieTitle2 = wpPage.frontPage.section3.fleetCategorieTitle2
  const fleetCategorieText2 = wpPage.frontPage.section3.fleetCategorieText2
  const fleetCategorieLink2 = wpPage.frontPage.section3.fleetCategorieLink2
  const fleetCategorie2Image =
    wpPage.frontPage.section3.fleetCategorie2Image.sourceUrl

  // section 3 fleet item 3
  const fleetCategorieTitle3 = wpPage.frontPage.section3.fleetCategorieTitle3
  const fleetCategorieText3 = wpPage.frontPage.section3.fleetCategorieText3
  const fleetCategorieLink3 = wpPage.frontPage.section3.fleetCategorieLink3
  const fleetCategorie3Image =
    wpPage.frontPage.section3.fleetCategorie3Image.sourceUrl

  // section 3 fleet item 4
  const fleetCategorieTitle4 = wpPage.frontPage.section3.fleetCategorieTitle4
  const fleetCategorieText4 = wpPage.frontPage.section3.fleetCategorieText4
  const fleetCategorieLink4 = wpPage.frontPage.section3.fleetCategorieLink4
  const fleetCategorie4Image =
    wpPage.frontPage.section3.fleetCategorie4Image.sourceUrl

  // section 3 fleet item 5
  const fleetCategorieTitle5 = wpPage.frontPage.section3.fleetCategorieTitle5
  const fleetCategorieText5 = wpPage.frontPage.section3.fleetCategorieText5
  const fleetCategorieLink5 = wpPage.frontPage.section3.fleetCategorieLink5
  const fleetCategorie5Image =
    wpPage.frontPage.section3.fleetCategorie5Image.sourceUrl

  // section 3 fleet item 6
  const fleetCategorieTitle6 = wpPage.frontPage.section3.fleetCategorieTitle6
  const fleetCategorieText6 = wpPage.frontPage.section3.fleetCategorieText6
  const fleetCategorieLink6 = wpPage.frontPage.section3.fleetCategorieLink6
  const fleetCategorie6Image =
    wpPage.frontPage.section3.fleetCategorie6Image.sourceUrl

  // section 3 fleet item 7
  const fleetCategorieTitle7 = wpPage.frontPage.section3.fleetCategorieTitle7
  const fleetCategorieText7 = wpPage.frontPage.section3.fleetCategorieText7
  const fleetCategorieLink7 = wpPage.frontPage.section3.fleetCategorieLink7
  const fleetCategorie7Image =
    wpPage.frontPage.section3.fleetCategorie7Image.sourceUrl

  // section 3 fleet item 8
  const fleetCategorieTitle8 = wpPage.frontPage.section3.fleetCategorieTitle8
  const fleetCategorieText8 = wpPage.frontPage.section3.fleetCategorieText8
  const fleetCategorieLink8 = wpPage.frontPage.section3.fleetCategorieLink8
  const fleetCategorie8Image =
    wpPage.frontPage.section3.fleetCategorie8Image.sourceUrl

  // section 3 cta 1
  const ctaTitle1 = wpPage.frontPage.section3.ctaTitle1
  const ctaSubtitle1 = wpPage.frontPage.section3.ctaSubtitle1
  const ctaButtonText1 = wpPage.frontPage.section3.ctaButtonText1
  const ctaButtonLink1 = wpPage.frontPage.section3.ctaButtonLink1
  const ctaIcon1 = wpPage.frontPage.section3.ctaIcon1.sourceUrl

  // section 3 cta 2
  const ctaTitle2 = wpPage.frontPage.section3.ctaTitle2
  const ctaSubtitle2 = wpPage.frontPage.section3.ctaSubtitle2
  const ctaButtonText2 = wpPage.frontPage.section3.ctaButtonText2
  const ctaButtonLink2 = wpPage.frontPage.section3.ctaButtonLink2
  const ctaIcon2 = wpPage.frontPage.section3.ctaIcon2.sourceUrl

  // section 3 cta 3
  const ctaTitle3 = wpPage.frontPage.section3.ctaTitle3
  const ctaSubtitle3 = wpPage.frontPage.section3.ctaSubtitle3
  const ctaButtonText3 = wpPage.frontPage.section3.ctaButtonText3
  const ctaButtonLink3 = wpPage.frontPage.section3.ctaButtonLink3
  const ctaIcon3 = wpPage.frontPage.section3.ctaIcon3.sourceUrl
  console.log(wpPage)
  return (
    <main>
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
              <Link to={fleetCategorieLink1}>
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
                <Link to={fleetCategorieLink1} className="Offer-btn">
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

          {/* categories second row start */}
          <div className="section_3_row">
            {/* fleet categories col 1*/}
            <div className="section_3_col">
              <Link to={fleetCategorieLink5}>
                <img src={fleetCategorie5Image} />
              </Link>
              <div>
                <h2 className="entry-title heading-size-1 archive-post-title">
                  {fleetCategorieTitle5}
                </h2>
                <div
                  dangerouslySetInnerHTML={{ __html: fleetCategorieText5 }}
                  className="offer-post-excerpt"
                />
                <Link to={fleetCategorieLink5} className="Offer-btn">
                  Read more
                </Link>
              </div>
            </div>
            {/* fleet categories col 1 end */}

            {/* fleet categories col 2*/}
            <div className="section_3_col">
              <Link to={fleetCategorieLink6}>
                <img src={fleetCategorie6Image} />
              </Link>
              <div>
                <h2 className="entry-title heading-size-1 archive-post-title">
                  {fleetCategorieTitle6}
                </h2>
                <div
                  dangerouslySetInnerHTML={{ __html: fleetCategorieText6 }}
                  className="offer-post-excerpt"
                />
                <Link to={fleetCategorieLink6} className="Offer-btn">
                  Read more
                </Link>
              </div>
            </div>
            {/* fleet categories col 2 end */}

            {/* fleet categories col 3 */}
            <div className="section_3_col">
              <Link to={fleetCategorieLink7}>
                <img src={fleetCategorie7Image} />
              </Link>
              <div>
                <h2 className="entry-title heading-size-1 archive-post-title">
                  {fleetCategorieTitle7}
                </h2>
                <div
                  dangerouslySetInnerHTML={{ __html: fleetCategorieText7 }}
                  className="offer-post-excerpt"
                />
                <Link to={fleetCategorieLink7} className="Offer-btn">
                  Read more
                </Link>
              </div>
            </div>
            {/* fleet categories col 3 end */}

            {/* fleet categories col 4 */}
            <div className="section_3_col">
              <Link to={fleetCategorieLink8}>
                <img src={fleetCategorie8Image} />
              </Link>
              <div>
                <h2 className="entry-title heading-size-1 archive-post-title">
                  {fleetCategorieTitle8}
                </h2>
                <div
                  dangerouslySetInnerHTML={{ __html: fleetCategorieText8 }}
                  className="offer-post-excerpt"
                />
                <Link to={fleetCategorieLink8} className="Offer-btn">
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
    </main>
  )
}
// Step 3: Export your component
export default FleetHome
