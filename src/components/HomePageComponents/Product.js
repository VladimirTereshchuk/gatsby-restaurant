import React from "react"
import styled from "styled-components"
import { styles } from "../../utils"
import Img from "gatsby-image"

function Product({ product }) {
  const { name, price, composition } = product
  const { fixed } = product.img
  return (
    <ProcuctWrapper>
      <Img fixed={fixed} className="img" />
      <div className="text">
        <div className="product-content">
          <h3 className="name">{name}</h3>
          <h3 className="price">{price}</h3>
        </div>
        <p className="info">{composition}</p>
      </div>
    </ProcuctWrapper>
  )
}

export default Product

const ProcuctWrapper = styled.div`
  .product-content {
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    text-transform: uppercase;
  }
  /* @media (min-width: 576px) {
    .product-content {
      font-size: 1rem;
    }
  } */
  @media (min-width: 1200px) {
    .product-content {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 1rem;
  }
  .img {
    border-radius: 0.5rem;
  }
  /* .product-content {
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    text-transform: uppercase;
    border: 1px solid red;
  } */
  .name {
    color: ${styles.colors.mainYellow};
    margin-top: 0.5rem;
  }
  .price {
    color: ${styles.colors.mainYellow};
    margin-top: 0.5rem;
  }

  .info {
    margin-top: 0.5rem;
    word-spacing: 0.2rem;
    text-transform: lowercase;
  }
`
