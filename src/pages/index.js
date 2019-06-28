import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
  max-width: 100%;
  max-height: 100%;
  width: 50%;
  height: auto;
  margin-bottom: 0.5rem;
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
      <Divider />
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginLeft: "2%",
          marginTop: "2%",
        }}
      >
        <h1>Contact Me</h1>
        <h4> You can reach me at:</h4>
        <div>
          <span>
            <a
              style={{ textDecoration: "none" }}
              href="mailto:contact@brunotorres.dev"
            >
              <FontAwesomeIcon icon={"envelope"} size="s" />
            </a>
          </span>
          <span>
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/BrunoTorresF"
            >
              <FontAwesomeIcon icon={["fab", "github-square"]} size="s" />
            </a>
          </span>
          <span>
            <a
              style={{ textDecoration: "none" }}
              href="https://linkedin.com/in/BrunoTorresF"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} size="s" />
            </a>
          </span>
          <span>
            <a
              style={{ textDecoration: "none" }}
              href="https://twitter.com/BrunoTFMX"
            >
              <FontAwesomeIcon icon={["fab", "twitter-square"]} size="s" />
            </a>
          </span>
        </div>
      </section>
    </Layout>
  )
}
export default IndexPage
