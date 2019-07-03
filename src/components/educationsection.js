import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const EduCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 95%;
`

const EduImg = styled(Img)`
  max-width: 100%;
  max-height: 100%;
  width: 50%;
  height: auto;
  margin-bottom: 0.5rem;
`

const EducationSection = () => {
  const query = useStaticQuery(graphql`
    query {
      holacode: file(relativePath: { eq: "holacode-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leeds: file(relativePath: { eq: "leeds_crest.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <section style={{ marginLeft: "2%", marginTop: "2%" }}>
      <h1>Education</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          justifyItems: "center",
        }}
      >
        <EduCard>
          <EduImg fluid={query.holacode.childImageSharp.fluid} />
          <h3>&lt;HolaCode /&gt;</h3>
          <p>Date: Nov. 2017 - April 2018</p>
          <p>Fullstack Software Engineer</p>
        </EduCard>
        <EduCard>
          <EduImg fluid={query.leeds.childImageSharp.fluid} />
          <h3>Leeds University</h3>
          <p>Date: Sept. 2010 - June 2013</p>
          <p>BSc Microbiology with Virology 2:1 Honours</p>
        </EduCard>
      </div>
    </section>
  )
}

export default EducationSection
