import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  height: 20vh;
  min-height: 300px;
  overflow: hidden;
`

const BgImage = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: -1;
  & > img {
    object-fit: cover;
    object-position: -50% -50%;
  }
`

const HeroText = styled.h1`
  font-size: 3em;
  font-weight: 600;
  position: absolute;
  width: 100%;
  padding: 0 1rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  text-shadow: 1px 1px 0 #000;
`

const Header = () => {
  const query = useStaticQuery(graphql`
    query {
      headerImg: file(relativePath: { eq: "index-banner.png" }) {
        childImageSharp {
          fluid(maxHeight: 360) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <HeaderContainer>
      <BgImage fluid={query.headerImg.childImageSharp.fluid} />
      <HeroText>
        Hi there! I'm a fullstack software engineer and web developer.
      </HeroText>
    </HeaderContainer>
  )
}

export default Header
