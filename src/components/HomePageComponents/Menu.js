import React from "react"
import Product from "./Product"
import { useStaticQuery, graphql } from "gatsby"
import { Section, Title, SectionButton } from "../../utils"
import styled from "styled-components"
import Link from "gatsby"

const query = graphql`
  {
    menuItems: allContentfulRestaurantMenu(filter: { popular: { eq: true } }) {
      edges {
        node {
          composition
          id
          img {
            fixed(width: 150, height: 150) {
              ...GatsbyContentfulFixed
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
      <Title title="popular dishes" message="little taste" />
      <ProductList>
        {menuItems.edges.map(({ node }, index) => {
          return <Product key={node.id} product={node} />
        })}
      </ProductList>
    </Section>
  )
}

const ProductList = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 3rem;
  @media (min-width: 576px) {
    grid-template-columns: 95%;
  }

  @media (min-width: 768px) {
    grid-template-columns: 80%;
    justify-content: center;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
`
