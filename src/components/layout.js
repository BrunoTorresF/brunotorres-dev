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
  faProjectDiagram,
  faList,
  faFilePdf,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"

import Nav from "./nav"

import "./layout.css"
library.add(fab, faUser, faProjectDiagram, faList, faFilePdf, faEnvelope)

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`

const ContentWrapper = styled.main`
  display: flex;
  height: 90vh;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
`

const Layout = ({ children }) => {
  return (
    <>
      <Container>
        <ContentWrapper>{children}</ContentWrapper>
        <footer style={{ margin: "0 auto" }}>
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
