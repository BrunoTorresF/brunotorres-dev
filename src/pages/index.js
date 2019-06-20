import React from "react"
import { Link } from "gatsby"

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
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
