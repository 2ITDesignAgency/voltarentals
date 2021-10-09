import React from "react"
import WheelsBook from "./WheelsBook"
import OffersHome from "./OffersHome"
import LoayaltyProgram from "./LoyaltyProgram"
import {
  Container
} from "reactstrap"
// Step 2: Define your component

const Section2 = () => {
  return (
    <Container fluid className="cyan-content">
      <WheelsBook />
      <OffersHome />
      <LoayaltyProgram />
    </Container>
  )
}
// Step 3: Export your component
export default Section2
