import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import TechSection from "../components/techsection"
import EducationSection from "../components/educationsection"
import Contact from "../components/contact"

const Divider = styled.div`
  width: 75%;
  height: 0;
  border: 1px solid grey;
  margin: 0 auto;
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Welcome" />
      <Header />
      <TechSection />
      <Divider />
      <EducationSection />
      <Divider />
      <Contact />
    </Layout>
  )
}
export default IndexPage
