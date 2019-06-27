import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const SectionTitle = styled.h1`
  margin-top: 2%;
  margin-left: 2.5%;
`

const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-items: center;
  margin-left: 2.5%;
  margin-right: 5%;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 1em 0;
  width: 50%;
  transition: background 0.2s;
  &:hover {
    background: #f2fdff;
  }
`

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

const TechSection = () => {
  const query = useStaticQuery(graphql`
    query {
      reactImg: file(relativePath: { eq: "react-logo.png" }) {
        ...squareImage
      }
      nodeImg: file(relativePath: { eq: "node-logo.png" }) {
        ...squareImage
      }
      expressImg: file(relativePath: { eq: "express-logo.png" }) {
        ...squareImage
      }
      htmlImg: file(relativePath: { eq: "htmlcss-logo.png" }) {
        ...squareImage
      }
      mysqlImg: file(relativePath: { eq: "mysql-logo.png" }) {
        ...squareImage
      }
      mongoImg: file(relativePath: { eq: "mongodb-logo.png" }) {
        ...squareImage
      }
    }
  `)

  return (
    <section>
      <SectionTitle style={{ marginLeft: "5%" }}>Technologies</SectionTitle>
      <SectionGrid>
        <Card>
          <Img fluid={query.reactImg.childImageSharp.fluid} />
        </Card>
        <Card>
          <Img fluid={query.nodeImg.childImageSharp.fluid} />
        </Card>
        <Card>
          <Img fluid={query.expressImg.childImageSharp.fluid} />
        </Card>
        <Card>
          <Img fluid={query.htmlImg.childImageSharp.fluid} />
        </Card>
        <Card>
          <Img fluid={query.mysqlImg.childImageSharp.fluid} />
        </Card>
        <Card>
          <Img fluid={query.mongoImg.childImageSharp.fluid} />
        </Card>
      </SectionGrid>
    </section>
  )
}

export default TechSection