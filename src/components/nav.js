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
  background: #582f73;
  width: 15vw;
`
const Title = styled.h1`
  color: #d5d0f2;
  text-align: center;
`

const LiItems = styled.li`
  list-style-type: none;
  font-size: 1rem;
  line-height: 1.5rem;
  transition: background-color 0.3s;
`
const StyledLink = styled(Link)`
  cursor: pointer;
  color: #d5d0f2;
  display: inline-block;
  line-height: 1.5rem;
  padding: 0.5rem 0;
  font-size: 1.2rem;
  text-decoration: none;
`

const LinkSpan = styled.span`
  display: inline-block;
  margin-left: 0.5rem;
  color: #d5d0f2;
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
