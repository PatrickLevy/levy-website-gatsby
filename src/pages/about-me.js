import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutMe = ({location}) => (
  <Layout location={location}>
    <SEO title="About Me" />
    <div className="aboutMeWrapper">
      <Link to="/">
        <i className="fa fa-angle-double-left fa-3x backArrow"/>
      </Link>
      <h1>Patrick Levy</h1>
      <p className="summary">
        I'm a software developer in the Saint Paul, MN.
        I have taken rather roundabout journey in my career and I loved every stop along the way.
        I have worked in analytical chemistry, taught high school, and am now the happiest I've ever been immersed in a world of code.
      </p>
      <p>
        <a href="https://github.com/patricklevy" target="_blank">Check me out of GitHub</a>
      </p>
    </div>
  </Layout>
)

export default AboutMe
