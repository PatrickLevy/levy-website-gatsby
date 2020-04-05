import { Link } from "gatsby"
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
      © {new Date().getFullYear()}, <Link to="/about-me/">Patrick Levy</Link>
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
