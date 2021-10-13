import React from "react"
import { Link } from "gatsby"
import { Container, Row, Button } from "reactstrap"
import Layout from "../components/Layout"
import "bootstrap/dist/css/bootstrap.min.css"

const NotFound = () => (
  <Layout>
    <Container fluid className="erroPageContainer">
      <Container>
        <Row>
          <h1 className="erroPageHeader">
            <span>NEVER STOP EXPLORING</span>
          </h1>
        </Row>
        <Row>
          {" "}
          <h3 className="erroPageSubHeader">
            The path ends here, but your journey doesn't. Visit our homepage
            below to get back on course
          </h3>
        </Row>
        <Row>
          <Button color="success erroPageButton">
            <Link to={"/"} className="readMore">
            <h3 className="erroPageButtonText">Back To Home</h3>
            </Link>
          </Button>
        </Row>
      </Container>
    </Container>
  </Layout>
)

export default NotFound
