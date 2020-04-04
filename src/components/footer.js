import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
  <footer
    style={{
      background: `rebeccapurple`,
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
      © {new Date().getFullYear()}, Patrick Levy
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
