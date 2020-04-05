/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Header from "./header"
import Footer from "./footer"
import { colors, heights } from "./constants"
import "./layout.css"
import "./styles.css"
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css"

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const currentPath = location.pathname

  const navigagatorIconStyle = {
    color: 'black'
  }

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0px`,
          // maxWidth: 960,
          padding: `0 0 1.45rem`,
          paddingTop: 20,
          height: `calc(100vh - ${heights.header + heights.footer}px)`,
          borderLeft: `solid ${colors.border} 20px`,
          borderRight: `solid ${colors.border} 20px`,
          borderTop: `solid ${colors.border} 20px`,
          borderBottom: `solid ${colors.border} 20px`,
          borderRadius: `53px`,
          overflow: `scroll`,
          background: `white`
        }}
      >
        {
          ['/', '/down'].includes(currentPath) && (
            <AniLink
              style={{
                position: `absolute`,
                top: `-20px`,
                left: `46%`,
                zIndex: 10
              }}
              swipe direction="down"
              to={currentPath === '/down' ? '/' : '/up'}
            >
              <i style={navigagatorIconStyle} className="fas fa-angle-up fa-5x" />
            </AniLink>
          )
        }

        {
          ['/', '/up'].includes(currentPath) && (
            <AniLink
              style={{
                position: `absolute`,
                bottom: `5px`,
                left: `46%`,
                zIndex: 10
              }}
              swipe direction="up"
              to={currentPath === '/up' ? '/' : '/down'}
            >
              <i style={navigagatorIconStyle} className="fas fa-angle-down fa-5x" />
            </AniLink>
          )
        }
        
        {
          ['/', '/left'].includes(currentPath) && (
            <AniLink
              style={{
                position: `absolute`,
                top: `45%`,
                right: `5px`,
                zIndex: 10
              }}
              swipe direction="left"
              to={currentPath === '/left' ? '/' : '/right'}
            >
              <i style={navigagatorIconStyle} className="fas fa-angle-right fa-5x" />
            </AniLink>
          )
        }
        
        {
          ['/', '/right'].includes(currentPath) && (
            <AniLink
              style={{
                position: `absolute`,
                top: `45%`,
                left: `5px`,
                zIndex: 10
              }}
              swipe direction="right"
              to={currentPath === '/right' ? '/' : '/left'}
            >
              <i style={navigagatorIconStyle} className="fas fa-angle-left fa-5x" />
            </AniLink>
          )
        }
        
        <main>
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
