import React from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { colors } from "../components/constants"

const AboutMe = ({location}) => (
  <Layout location={location}>
    <SEO title="About Me" />
    <div className="aboutMeWrapper">
      <AniLink paintDrip hex={colors.border} to="/">
        <i className="fa fa-angle-double-left fa-3x backArrow"/>
      </AniLink>
      <h1>Patrick Levy</h1>
      <section className="summary">
        <p>
          I'm a software developer in Saint Paul, MN.
          I have taken a rather roundabout journey during the course of my career so far, but I have loved every stop along the way.
          I have worked in analytical chemistry, taught high school, and am now the happiest I've ever been immersed in a world of code.
        </p>
        {/* <p>
          I have bachelor's degrees in Chemistry and Computer Science and a master's degree in secondary science education.
        </p> */}
        <p>
          I probably most enjoy writing JavaScript for the frontend and am well versed in React, Vue, and GraphQL.
          I have also enjoyed working in React Native, Python, Ruby, and GoLang.
        </p>
        <p>
          You can visit a project that I have been working on for teaching high school chemistry at <a href="https://www.grokchemistry.com" target="_blank">www.grokchemistry.com</a>.
        </p>
      </section>
      <section className="socialLinks">
        <p>
          <a href="https://github.com/patricklevy" target="_blank"><i class="fab fa-github fa-4x" /></a>
          <a href="https://www.linkedin.com/in/patrick-levy-39009b78/" target="_blank"><i class="fab fa-linkedin fa-4x" /></a>
        </p>
      </section>

    </div>
  </Layout>
)

export default AboutMe
