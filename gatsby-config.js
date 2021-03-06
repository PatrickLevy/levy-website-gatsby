module.exports = {
  siteMetadata: {
    title: ``,
    description: `Welcome to my profile page. I'm mostly just using this to play around with GatsbyJS.`,
    author: `mrpatricklevy@gmail.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#5a6aa0d4`,
        theme_color: `#5a6aa0d4`,
        display: `minimal-ui`,
        icon: `src/images/erlenmeyer-flask.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-transition-link`
  ],
  pathPrefix: "/levy-website-gatsby",
}
