import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Welcome" />
    <h1>Hi everyone!</h1>
    <h2>
      I'm a fullstack software engineer with a penchant for React (and now
      Gatsby).
    </h2>
    <p>This will be the home of my new portfolio site.</p>
    <p>It's currently under construction so please check back in a few days.</p>
    <p>
      Meanwhile, for any development-related questions, feel free to send me an
      email at:{" "}
      <a
        style={{ textDecoration: "none" }}
        href="mailto:contact@brunotorres.dev"
      >
        contact@brunotorres.dev
      </a>
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
