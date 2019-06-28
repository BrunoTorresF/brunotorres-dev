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
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"

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

const SiteWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
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
      <SiteWrapper>
        <Nav siteTitle={data.site.siteMetadata.title} />
        <Container>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built by
            {` `}
            <a href="https://twitter.com/BrunoTFMX">Bruno</a> with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </Container>
      </SiteWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
