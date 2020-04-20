import React from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutMeDetails from "../components/aboutMeDetails"

import { colors } from "../components/constants"

const AboutMe = ({location}) => (
  <Layout location={location}>
    <SEO title="Patrick Levy" />
    <div>
      <div className="overlay aboutMeWrapperIntroPage .fade-in">
        <AboutMeDetails />
      </div>
    </div>
  </Layout>
)

export default AboutMe
