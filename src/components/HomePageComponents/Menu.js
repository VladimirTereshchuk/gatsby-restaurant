import React from "react"
import Product from "./Product"
import { useStaticQuery, graphql } from "gatsby"
import { Section, Title, SectionButton } from "../../utils"

const query = graphql`
  {
    menuItems: allContentfulRestaurantMenu(filter: { popular: { eq: true } }) {
      edges {
        node {
          composition
          id
          img {
            fluid {
              src
            }
          }
          name
          popular
          price
          slug
          weight
        }
      }
    }
  }
`

export default function Menu() {
  const { menuItems } = useStaticQuery(query)
  console.log(menuItems)
  return (
    <Section>
      <Title title="featured items" message="little taste" />
      <Product />
    </Section>
  )
}
