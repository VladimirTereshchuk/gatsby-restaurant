import React from "react"
import { Link } from "gatsby"
// import logo from "../../../images/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import styled from "styled-components"
import { styles } from "../../../utils"
const NavbarHeader = ({ handleNavbar }) => {
  return (
    <HeaderWrapper>
      <Link to="/" style={{ textDecoration: "none" }}>
        {/* <img src={logo} alt="company logo" /> */}
        <h2 className="logo" style={{ fontWeight: "bold" }}>
          {" "}
          lunchroom
        </h2>
      </Link>
      <FaAlignRight className="toggle-icon" onClick={handleNavbar} />
    </HeaderWrapper>
  )
}
export default NavbarHeader

const HeaderWrapper = styled.div`
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .toggle-icon {
    font-size: 1.75rem;
    color: ${styles.colors.mainYellow};
    cursor: pointer;
  }
  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
    padding: 0.4rem 1rem;
  }
  .logo {
    text-transform: uppercase;
    color: ${styles.colors.mainYellow};
    text-shadow: 2.4px 2.4px rgba(0, 0, 11, 0.2);
    ${styles.border({ color: `${styles.colors.mainYellow}` })};
    padding: 0 1rem;
  }
`
