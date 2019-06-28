import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const links = [
  { text: "About", icon: "user", to: "/" },
  { text: "Experience", icon: "list", to: "/experience" },
  { text: "Projects", icon: "project-diagram", to: "/projects" },
  { text: "Resume", icon: "file-pdf", to: "/" },
]

const NavMenu = styled.nav`
  background: #20034a;
  width: 15vw;
`
const Title = styled.h1`
  color: white;
  text-align: center;
`

const LiItems = styled.li`
  list-style-type: none;
  font-size: 16px;
  line-height: 64px;
  padding: 0;
  float: none;
  transition: background-color 0.3s;
`
const StyledLink = styled(Link)`
  cursor: pointer;
  display: block;
  line-height: 100%;
  padding: 10px 0 12px;
  font-size: 1.2rem;
  background-color: transparent;
  text-decoration: none;
`

const LinkSpan = styled.span`
  color: white;
`

const Nav = ({ siteTitle }) => (
  <NavMenu>
    <Title>{siteTitle}</Title>
    <ul>
      {links.map(link => (
        <LiItems>
          <StyledLink to={`${link.to}`}>
            <FontAwesomeIcon icon={link.icon} size="lg" />
            <LinkSpan>{link.text}</LinkSpan>
          </StyledLink>
        </LiItems>
      ))}
    </ul>
  </NavMenu>
)

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav
