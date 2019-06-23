import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

const IndexPage = () => (
  <Layout>
    <SEO title="Welcome" />
    <Header />
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
    <section></section>
    <section>Skills</section>
    <section>Education</section>
    <section>Contact Details</section>
  </Layout>
)

export default IndexPage
