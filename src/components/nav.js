import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const links = [
  { text: "About", icon: "far fa-user" },
  { text: "Experience", icon: "" },
  { text: "Projects", icon: "" },
  { text: "Skills", icon: "" },
  { text: "Education", icon: "" },
  { text: "Contact", icon: "" },
  { text: "Resume", icon: "" },
]

const NavMenu = styled.nav`
  background: #20034a;
  left: 0;
  top: 0;
  margin: 0;
  position: fixed;
  width: 190px;
  height: calc(100% + 60px);
  padding-bottom: 60px;
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
const NavA = styled.a`
  cursor: pointer;
  display: block;
  line-height: 100%;
  padding: 10px 0 12px;
  font-size: 1rem;
  background-color: transparent;
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
          <NavA href={`#${link.text}`}>
            <i className={`${link.icon}`}></i>
            <LinkSpan>{link.text}</LinkSpan>
          </NavA>
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
