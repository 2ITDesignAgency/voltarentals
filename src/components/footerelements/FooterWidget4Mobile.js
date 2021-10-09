import React from "react"
import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"
import UniversalLink from "../UniversalLink"
import "../homepageelements/hompageBootstrap.scss"

const FooterWidget4Mobile = () => {
  const { wpMenu } = useStaticQuery(graphql`
    {
      wpMenu(slug: { eq: "footercolumnfour" }) {
        name
        menuItems {
          nodes {
            label
            url
            databaseId
            connectedNode {
              node {
                ... on WpContentNode {
                  uri
                }
              }
            }
          }
        }
      }
    }
  `)

  if (!wpMenu?.menuItems?.nodes || wpMenu.menuItems.nodes === 0) return null
  return (
    <div>
      <Button
        color="success footter-btn"
        id="toggler4"
        style={{ marginBottom: "1rem" }}
        className="btn-block"
      >
        LEGAL
      </Button>
      <UncontrolledCollapse toggler="#toggler4">
        <Card className="footerCard">
          <CardBody className="footerCardBody">
            <ul>
              {wpMenu.menuItems.nodes.map((menuItem, i) => {
                const path = menuItem?.connectedNode?.node?.uri ?? menuItem.url

                const itemId = "menu-item-" + menuItem.databaseId
                return (
                  <li
                    id={itemId}
                    key={i + menuItem.url}
                    className={
                      "menu-item menu-item-type-custom menu-item-object-custom menu-item-home " +
                      itemId
                    }
                  >
                    <UniversalLink
                      to={path}
                      activeClassName={"current-menu-item current_page_item"}
                    >
                      {menuItem.label}
                    </UniversalLink>
                  </li>
                )
              })}
            </ul>
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>
  )
}

export default FooterWidget4Mobile
