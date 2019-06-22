/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import {
  faUser,
  faAddressCard,
  faUniversity,
  faProjectDiagram,
  faList,
  faFilePdf,
  faAtom,
} from "@fortawesome/free-solid-svg-icons"

// import Header from "./header"
import Nav from "./nav"

import "./layout.css"
library.add(
  fab,
  faUser,
  faAddressCard,
  faUniversity,
  faProjectDiagram,
  faList,
  faFilePdf,
  faAtom
)

const Container = styled.div`
  position: absolute;
  left: 190px;
  height: 100%;
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.875rem 1.45rem;
  padding-top: 0px;
  text-align: center;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Nav siteTitle={data.site.siteMetadata.title} />
      <Container>
        <main style={{ display: `inline-block` }}>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://twitter.com/BrunoTFMX">Bruno</a> with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
