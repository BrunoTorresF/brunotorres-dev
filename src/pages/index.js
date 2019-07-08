import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Button = styled.button`
  color: #7544a6;
  border: 2px solid #7544a6;
  background: #9ad4d6;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  margin: 1rem;
  padding: 0.25rem 1rem;
  border-radius: 3px;
`

const DownloadLink = styled.a`
  text-decoration: none;
`

const SplashImg = styled(BackgroundImage)`
  width: 100%;
  background-position: center center;
  background-repeat: none;
  background-size: contain;
  }
`

const IndexPage = () => {
  const query = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "btf-logo.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <SplashImg fluid={query.logo.childImageSharp.fluid}>
      <Layout>
        <SEO title="Welcome" />
        <div
          style={{
            display: "flex",
            width: "50%",
            justifyContent: "space-evenly",
            marginBottom: "1rem",
          }}
        >
          <a
            style={{ textDecoration: "none", color: "#7544A6" }}
            href="mailto:bruno@brunotorres.dev"
          >
            <FontAwesomeIcon icon={"envelope"} size="2x" />
          </a>
          <a
            style={{ textDecoration: "none", color: "#7544A6" }}
            href="https://github.com/BrunoTorresF"
          >
            <FontAwesomeIcon icon={["fab", "github-square"]} size="2x" />
          </a>
          <a
            style={{ textDecoration: "none", color: "#7544A6" }}
            href="https://linkedin.com/in/BrunoTorresF"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
          </a>
          <a
            style={{ textDecoration: "none", color: "#7544A6" }}
            href="https://twitter.com/BrunoTFMX"
          >
            <FontAwesomeIcon icon={["fab", "twitter-square"]} size="2x" />
          </a>
        </div>
        <h2
          style={{
            color: "#20034A",
            marginTop: "1.25rem",
            marginBottom: "0",
            paddingTop: "1.25rem",
          }}
        >
          Fullstack Software Engineer
        </h2>
        <Button type="button">
          <DownloadLink
            href="https://firebasestorage.googleapis.com/v0/b/e-radar-244305.appspot.com/o/BrunoTorres-CV-v1.1.pdf?alt=media&token=cc61c9f8-7c05-42be-b369-d187e07d93da"
            download
            target="_blank"
          >
            DOWNLOAD CV
          </DownloadLink>
        </Button>
      </Layout>
    </SplashImg>
  )
}
export default IndexPage
