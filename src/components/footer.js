import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from "prop-types"
import React from "react"
import { colors } from "./constants"

const Footer = ({ siteTitle }) => (
  <footer
    style={{
      marginBottom: `0`,
    }}
  >
    <div
      style={{
        margin: `0 0`,
        maxWidth: 960,
        padding: `0 1.5rem`,
      }}
    >
      © {new Date().getFullYear()}, <AniLink paintDrip hex={colors.border} to="/about-me/">Patrick Levy</AniLink>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: `Hello`,
}

export default Footer
