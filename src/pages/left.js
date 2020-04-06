import React from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Component1 from "../components/component1"

const Left = ({ location }) => (
  <Layout location={location}>
    <SEO title="Home" />
    Left
  </Layout>
)

export default Left
