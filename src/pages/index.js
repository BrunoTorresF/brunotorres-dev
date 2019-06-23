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
      <h1 style={{ marginLeft: "5%" }}>Education</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, auto)",
          marginLeft: "5%",
        }}
      >
        <div>
          <p>HolaCode</p>
          <p>Date</p>
          <p>degree</p>
        </div>
        <div>
          <p>Leeds University</p>
          <p>Date</p>
          <p>degree</p>
        </div>
      </div>
    </section>
    <section>
      <h1 style={{ marginLeft: "5%" }}>Contact Me</h1>
      <div style={{ marginLeft: "5%" }}>
        <p>name</p>
        <p>profile picture</p>
        <p>phonenumber</p>
      </div>
    </section>
    <section>
      <p>
        Meanwhile, for any development-related questions, feel free to send me
        an email at:{" "}
        <a
          style={{ textDecoration: "none" }}
          href="mailto:contact@brunotorres.dev"
        >
          contact@brunotorres.dev
        </a>
      </p>
    </section>
  </Layout>
)

export default IndexPage
