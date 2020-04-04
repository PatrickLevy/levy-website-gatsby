/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0px`,
          // maxWidth: 960,
          padding: `0 0 1.45rem`,
          paddingTop: 20,
          height: `calc(100vh - 90px)`,
          borderLeft: `solid rebeccapurple 20px`,
          borderRight: `solid rebeccapurple 20px`,
          borderTop: `solid rebeccapurple 20px`,
          borderBottom: `solid rebeccapurple 20px`,
          borderRadius: `53px`,
          overflow: `scroll`,
          background: `white`
        }}
      >
        <main
          style={{
            height: 4000,
          }}
        >{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
