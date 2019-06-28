import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import TechSection from "../components/techsection"

const Divider = styled.div`
  width: 75%;
  height: 0;
  border: 1px solid grey;
  margin: 0 auto;
`

const EduCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 95%;
`

const EduImg = styled(Img)`
  width: 50%;
  height: 50%;
  margin-bottom: 0.2em;
`

const IndexPage = () => {
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
    <Layout>
      <SEO title="Welcome" />
      <Header />
      <TechSection />
      <Divider />
      <section style={{ marginLeft: "2%", marginTop: "2%" }}>
        <h1>Education</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, auto)",
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
      <Divider />
      <section>
        <h1>Contact Me</h1>
        <div>
          <p>
            For any development-related questions, feel free to send me an email
            at:{" "}
            <a
              style={{ textDecoration: "none" }}
              href="mailto:contact@brunotorres.dev"
            >
              contact@brunotorres.dev
            </a>
          </p>
        </div>
      </section>
    </Layout>
  )
}
export default IndexPage
