import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import TechSection from "../components/techsection"

const IndexPage = () => (
  <Layout>
    <SEO title="Welcome" />
    <Header />
    <TechSection />
    <section>
      <h1 style={{ marginLeft: "2.5%" }}>Education</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, auto)",
          marginLeft: "2.5%",
        }}
      >
        <div>
          <p>&lt;HolaCode /&gt;</p>
          <p>Date: Nov. 2017 - April 2018</p>
          <p>Fullstack Software Engineer</p>
        </div>
        <div>
          <p>Leeds University</p>
          <p>Date: Sept. 2010 - June 2013</p>
          <p>BSc Microbiology with Virology 2:1 Honours</p>
        </div>
      </div>
    </section>
    <section>
      <h1 style={{ marginLeft: "2.5%" }}>Contact Me</h1>
      <div style={{ marginLeft: "2.5%" }}>
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

export default IndexPage
