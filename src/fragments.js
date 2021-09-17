import { graphql } from "gatsby"

export const fragments = graphql`
  fragment HeroImage on File {
    childImageSharp {
      fluid(maxWidth: 1440) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
        presentationWidth
      }
    }
  }

  fragment AvatarImage on File {
    childImageSharp {
      fixed(width: 80, height: 80) {
        ...GatsbyImageSharpFixed_withWebp_tracedSVG
      }
    }
  }

  fragment Thumbnail on File {
    childImageSharp {
      fluid(maxWidth: 1200) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
        presentationWidth
      }
    }
  }

  fragment PostPreviewContent on WpPost {
    uri
    title
    databaseId
    excerpt
    date(formatString: "LL")
    featuredImage {
      node {
        localFile {
          ...Thumbnail
        }
      }
    }
    author {
      node {
        name
        firstName
        lastName
        uri
      }
    }
    categories {
      nodes {
        name
        slug
        uri
      }
    }
  }

  fragment PostContent on WpPost {
    title
    content
    date(formatString: "LL")
    excerpt
    blocks {
      originalContent
    }
    featuredImage {
      node {
        localFile {
          ...HeroImage
        }
      }
    }
    author {
      node {
        name
        firstName
        lastName
        uri
        description
        avatar {
          url
          width
          height
          imageFile {
            ...AvatarImage
          }
        }
      }
    }
    categories {
      nodes {
        name
        slug
        uri
      }
    }
  }

  fragment PageContent on WpPage {
    
    title
    content
    databaseId
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
        fieldGroupName
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
        fleetCategorieLink1
        fleetCategorieLink2
        fleetCategorieLink3
        fleetCategorieLink4
        fleetCategorieText1
        fleetCategorieText2
        fleetCategorieText3
        fleetCategorieText4
        fleetCategorieTitle1
        fleetCategorieTitle2
        fleetCategorieTitle3
        fleetCategorieTitle4
        fleetSubtitle
        fleetTitle
      }
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
    featuredImage {
      node {
        link
        uri
        sourceUrl
        localFile {
          ...HeroImage
        }
      }
    }
  }
`
